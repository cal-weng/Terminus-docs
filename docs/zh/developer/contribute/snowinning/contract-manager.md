---
outline: [2, 4]
---

# Manager

本章节将详细讲述如何同合约接口以及 SDK(ts) 进行 domain 的管理


## 直接操作合约

### 查询

#### DID

##### 获取 metadata
有两个接口可以获取到 DID 的 metadata, 分别是 `getMetadata(tokenId)` 和 `getMetadata(name)` 

###### 调用返回
```json
[
"james.olares.com", //name
"did:key:z6MkpLwxcTwhj4MRm4eKhvBadK45qHr5QEYHUXNyhCfkXJ9U#z6MkpLwxcTwhj4MRm4eKhvBadK45qHr5QEYHUXNyhCfkXJ9U", //使用助记词生成的did
"OrganizationalUser", //DID 类型
true //是否可以创建子级
]
```


##### 获取 domain 的 owner
如果想要知道 DID 在链上的管理权限归谁所有, 可以调用接口 `ownerOf(tokenId)` 


##### 通过创建序号查询token
`tokenByIndex(index)` 接口可以根据创建 DID 的序号查询, 返回结果为 **TokenID**


##### 通过顺序查询某个地址拥有的token
虽然在业务层面我们禁止了使用一个钱包创建多个 DID, 但考虑到未来可能出现的管理权限转移, NFT 交易等情况, 合约层面允许出现多个 DID 有相同的 owner, 在这种情况下, 可以使用接口 `tokenOfOwnerByIndex(owner, index)` 进行查询, 返回结果为 **TokenID**



#### Tag

##### 查询 DID 下定义的 Tag 数量
`getDefinedTagCount(name)` 接口将会返回这个 DID 定义了多少个 Tag

##### 查询 Tag name
配合上一个接口,使用 `getDefinedTagNameByIndex(name, index)` 就可以查询到此 Tag 的 name, 或者使用 `getDefinedTagNames(name)` 可以查询这个 DID 定义的所有 Tag 的 name

##### 结构化 Tag
如果 Tag 是一个复杂的结构体, 而不是一个值, 你可以使用 `getTagType(name, tagName)` 查询结构体的定义, 然后使用返回结果中的 **fieldNamesHash** 调用 `getFieldNamesEventBlock(fieldNamesHash)` 查询结构体定义的 block, 进而通过 ethers 库中queryFilter 查询到定义时的内部变量名

> [!NOTE]
> 结构体查询将会返回一段 abi 类型编码, 需要参照 abi 码表进行解析, 同时, 字段名的查询也较为复杂并且容易出错, 我们推荐你使用 SDK 中提供的功能获取 Tag 信息, 而不是手工操作合约
> 
> 

在你获取到 Tag 的结构后, 可以使用 `getTagElem(definedDidName, valueDidName, tagName, elemPath)` 获取 Tag 中的值

> [!NOTE]
> - definedDidName: 定义此 Tag 的 DID
> - valueDidName: 需要读取值的 DID
> - elemPath: tag 结构内部, 需要读取值的变量名, 传[]为全部读取
> 
> 与上方的定义相同, 此接口将返回 abi 编码后的数据, 需要你基于上方的 abi 定义进行解析. 
> 此处同样建议使用 SDK 中的功能, 而非手工操作



### 管理

#### DID

##### 创建 DID
父域的 owner 可以通过接口 `register(owner, MetaData(domain, did, note, allowSubdomain))` 创建子域

> [!NOTE]
> 方法的第一个参数 **owner** 是新 DID 的 owner, 第二个参数 **MetaData** 需要生成一个结构体进行提交, 其中包含
> - domain: 新 DID 的完整域名, 也是 OlaresName
> - did: 新 DID 持有者钱包计算生成的 did
> - note: 新 DID 的类型及备注字段, 外部系统依赖此值进行分类
> - allowSubdomain: 新 DID 是否允许创建子域 
> 	
> MetaData 中的数据在创建 DID 之后不允许修改, 如果未来持有者发生了的转移, 则将新持有者的 did 记录进入 LatestDid 这个 tag 中


#### Tag

##### 定义 Tag
使用 `defineTag(didName, tagName, abiType, fieldNames)` 定义一个 Tag, 操作者需要是此 DID 的 owner

> [!NOTE]
>  - abiType: 这个 tag 的数据类型, 此处遵循 **abi** 的编码规范, 同时也支持定义一个极为复杂的结构
> - fieldNames: 在定义复杂结构时, 内部子结构的名字或者数据的名字以二维数组的形式平铺展开
> 


##### 读写

> [!NOTE]
> 此处不建议你直接使用以下方法操作 Tag, 你应该同 Tagger 合约来操作来读写 Tag


- 写入数据
	使用 `addTag(defineDidName, valueDidName, tagName, value)` 接口将数据写入 Tag

- 更新数据
	使用 `updateTagElem(defineDidName, valueDidName, tagName, elePaths, value)` 接口, 可以更新 Tag 中的特定数据


- 删除数据
	使用 `removeTag(defineDidName, valueDidName, tagName)` 删除一个 Tag , 此方法删除的是 Tag 在某个 DID 上的值, 而非 Tag 定义

- 操作数组
	如果你的 Tag 内部有定义数组, 那么你可以使用 `popTagElem(defineDidName, valueDidName, tagName, elePaths)` 和 `pushTagElem(defineDidName, valueDidName, tagName, elePaths, value)` 来管理此数组

> [!NOTE]
> - defineDidName: 定义 tag 的 DID
> - valueDidName: 使用 tag 的 DID
> - value: 遵循 abi 编码的数据



## 通过 SDK 进行管理

### 查询

#### DID

##### 查询所有 DID
有些时候, 可能是为了统计, 也可能是其他原因, 我们需要一份全量的数据, 这里的 `fetchAll` 方法将会使用合约接口进行一次全量数据的查询, 虽然我们并不是同链上的 Event 进行分析, 而是通过接口来获取明确的结果, 但因为数量庞大, 这一行为仍然可能是一件比较耗时的操作
```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const fetch = async () => {
	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)
	
	const dids = await did.fetchAll()

	console.log('dids:', dids)

	console.log('format dids:', await did.formatDatas(dids))
}

fetch()
```

> [!NOTE]
> 如果你是在开发环境运行, 并且允许输出日志的话, 将会在同步过程中看到当前进度
> 

###### 快速获取
为方便你使用, SDK 中还准备了 `formatDatas` 和 `loadDatas` 两个功能, 将 formatDatas 返回的结果存储下来, 在下次使用时, 通过 loadDatas 进行加载, 就可以省掉同步时间, 更简单的方法是访问官方的 **did-support** 服务中 `/all` 接口获取完整数据, 此接口获取的数据可以直接使用 loadDatas 进行加载

##### 查询特定 DID
如果你已经读过上面合约的查询接口,就会知道合约层面并没有提供一个完整数据的查询接口,需要组合使用多个接口才能获取到一个 DID 的完整信息, 所以在 SDK 层面我们简化了接口的设计, 这里的 `fetchDomain` 方法将会返回一个 DID 的完成信息

```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const fetch = async () => {
	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)
	
	const domain = await did.fetchDomain('james.olares.com')
	
	console.log('did:', domain)
}

fetch()
```

###### 快速查询
当你的 SDK 示例, 也就是上方代码中的 did, 已经运行过 loadDatas 时, fetchDomain 将会使用先使用本地数据进行匹配, 如果本地没有此 DID 的数据, 才会从链上获取数据

###### 更新 DID
如果你担心快速查询将会导致没有获取到最新的数据, 你可以使用 `updateDomain` 或 `updateDomainById` 来更新本地数据

###### 模糊匹配
与快速查询情况相同, 当你本地加载过数据后, 就可以使用 SDK 提供的模糊查找功能了, 这两个功能都仅在本地数据中进行匹配
```Typescript
import DID from 'did-contract-developer-components'
//... code

// 通过 owner 查询 DID, 并将所有子域一同返回
const domainsByOwner = DID.Domain.findSubtreesByOwner(owner, did.treesCache)

//通过 did 查询 DID, 并将所有子域一同返回
const domainsByDid = DID.Domain.findSubtreesByDid(did, did.treesCache)

```

#### Tag

##### 获取 DID 的所有 Tag
相比起直接访问合约, 使用此功能可以获取解析后的 Tag 结构, 以及内部变量的名字

```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const fetch = async () => {
	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)
	
	const domain = await did.fetchDomain('james.olares.com')
	
	if (domain == undefined) {
		throw new Error("not found");
	}

	const tags = await DID.Domain.fetchAllTagType(domain, did.getContractDID())
	
	console.log('tags:', tags)
}

fetch()
```

##### 获取 DID 上所有 Tag 的 value
与上面的方法相同, 使用此功能可以获取解析后的数据, tag 的内容将以 json 的格式输出

```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const fetch = async () => {
	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)
	
	const domain = await did.fetchDomain('james.olares.com')
	
	if (domain == undefined) {
		throw new Error("not found");
	}

	await DID.Domain.fetchAllTagType(domain, did.getContractDID())
	
	const tags = await DID.Domain.fetchAllTagValue(domain, did.getContractDID())

	console.dir(tags, {depth: null});
}

fetch()
```

### 管理

#### Tag

##### 定义 Tag
使用 SDK 定义 Tag 时, 你可以使用面向对象的编程方法来构建一个 Tag 的内部结构, 无需考虑编码问题, 以下示例中包含了大多数常用数据类型

```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const defineTag = async () => {

	// tag name: simpleTag
	const tagName = 'simpleTagBox'
	
	// tuple
	const testTuple = new DID.Tag.TagValueTypeTuple(undefined, undefined, true);

	// uint
	const testUint = new DID.Tag.TagValueTypeUint(undefined, undefined, true);
	testUint.setSize(8)

	// address
	const testAddress = new DID.Tag.TagValueTypeAddress(undefined, undefined, true);

	// array<address>
	const testArrayAddress = new DID.Tag.TagValueTypeArray(undefined, undefined, true);
	testArrayAddress.setBuliderType(testAddress)

	// bool
	const testBool= new DID.Tag.TagValueTypeBool(undefined, undefined, true)

	// bytes
	const testBytes = new DID.Tag.TagValueTypeBytes(undefined, undefined, true)

	// int
	const testInt = new DID.Tag.TagValueTypeInt(undefined, undefined, true)
	testInt.setSize(256)

	// flarray<int>
	const testFlarrayInt = new DID.Tag.TagValueTypeFlarray(undefined, undefined, true)
	testFlarrayInt.setBuliderType(testInt)
	testFlarrayInt.setSize(3)

	// flbytes
	const testFlbytes = new DID.Tag.TagValueTypeFlbytes(undefined, undefined, true)
	testFlbytes.setSize(5)
	
	// string
	const testString = new DID.Tag.TagValueTypeString(undefined, undefined, true)

	testTuple.setField('testUint', testUint)
	testTuple.setField('testArrayAddress', testArrayAddress)
	testTuple.setField('testBool', testBool)
	testTuple.setField('testBytes', testBytes)
	testTuple.setField('testFlarrayInt', testFlarrayInt)
	testTuple.setField('testFlbytes', testFlbytes)
	testTuple.setField('testString', testString)

	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)
	
	const domain = await did.fetchDomain('james.olares.com')
	
	await DID.Domain.defineTag(domain, tagName, testTuple, did.getContractDIDByPrivateKey('you-private-key'), did)
}

defineTag()
```


##### 设置 Tagger
```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const setTagger = async () => {

	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)
	
	const domain = await did.fetchDomain('james.olares.com')

	if (domain == undefined) {
		throw new Error("not found");
	}

	const [tag] = domain.tags.filter(tag => tag.name == 'simpleTagBox')

	DID.Domain.setTagger(tag, 'you-tagger-address', did.getContractDIDByPrivateKey('you-private-key'))
}

setTagger()
```

##### 设置 Tag 的 value
与上方 Tag 定义的部分相同, 使用 SDK 进行操作时不需要考虑编码问题, 只需传入符合定义结构的 json , 本示例中的 Tag 结构定义使用上方 Tag 定义部分的示例代码

```Typescript
import DID from 'did-contract-developer-components'

const RPC = "you-rpc-url"
const CONTRACT_DID = "0x5da4fa8e567d86e52ef8da860de1be8f54cae97d"
const CONTRACT_ROOT_RESOLVER = "0xe2eaba0979277a90511f8873ae1e8ca26b54e740"
const CONTRACT_ABI_TYPE = "0x9ae3f16bd99294af1784beb1a0a5c84bf2636365"

const setTagValue = async () => {
	const did = DID.createConsole(RPC, CONTRACT_DID, CONTRACT_ROOT_RESOLVER, CONTRACT_ABI_TYPE)

	const domain = await did.fetchDomain('james.olares.com')

	if (domain == undefined) {
		throw new Error("not found");
	}
	
	console.log(domain)
	const [tag] = domain.tags.filter(tag => tag.name == 'simpleTagBox')
	const tagType = await DID.Domain.fetchTagStructure(tag, did.getContractDID())
	console.dir(tagType, {depth: null})

	const ba1 = ethers.hexlify(Uint8Array.from([1, 2, 3]))
	const ba2 = ethers.hexlify(Uint8Array.from([10, 18, 19]))

	const newData = {
		testbox: {
			testUint: 1,
			testArrayAddress: ['0xF18B2Ea28c722CA87f951F5bF5327b66a7dd72A3', '0xecBA1d33b889f66ad426535f970d1E033ba5c79C'],
			testBool: true,
			testBytes: '0x0102030405' ,
			testFlarrayInt: [2, 3, 4],
			testFlbytes: '0x0a0b0c0d0e',
			testString: 'ok'
		}
	}
	console.log('newData', newData)

	const call = await DID.Tag.doEncode(tagType, newData)
	console.log('call', call)

	//set
	const resp = await DID.Domain.setValue(tag, call, did.getContractDIDByPrivateKey('you-private-key'))
}

setTagValue()
```


## 环境

### 合约

#### SepoliaOptimistic

- OlaresDID: 0x4c8c98e652d6a01494971a8faF5d3b68338f9ED4
- RootTagger: 0xaA5bE49799b6A71Eda74d22D01F7A808aFf41b3f
- LibABI: 0xdc9e8faDe38eE9E2Eb43761f1553CD2360ecAEac

#### Optimistic

- OlaresDID: 0x5da4fa8e567d86e52ef8da860de1be8f54cae97d
- RootTagger: 0xe2eaba0979277a90511f8873ae1e8ca26b54e740
- LibABI: 0x9ae3f16bd99294af1784beb1a0a5c84bf2636365

> [!NOTE]
> RootTagger 是官方扩展字段的 Tagger 合约, 负责管理以下 Tag
> 	- DNSARecord
> 	- RSAPubKey
> 	- LatestDid
> 	- AuthAddress
> 

> [!NOTE]
> LibABI 是一个独立的 lib 合约, 提供 abi 类型, 数据格式转换等功能
> 
