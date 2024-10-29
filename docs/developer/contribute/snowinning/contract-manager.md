---
outline: [2, 4]
---

# Manager

We describe how to manage domains with contract interface and SDK (typescript) in this chapter.


## Call the contract directly

### Query

#### DID

##### Get metadata
There are two interfaces for fetching the metadata of a DID - `getMetadata(tokenId)` and `getMetadata(name)`.

###### Return value
```json
[
"james.olares.com", // name
"did:key:z6MkpLwxcTwhj4MRm4eKhvBadK45qHr5QEYHUXNyhCfkXJ9U#z6MkpLwxcTwhj4MRm4eKhvBadK45qHr5QEYHUXNyhCfkXJ9U", // DID derived from mnemonic phrases
"OrganizationalUser", // DID kind
true // allowed to create subdomains?
]
```


##### Get the owner of a domain
Call `ownerOf(tokenId)` to get the on-chain controller address of a DID.


##### Get token by index of creation
Call `tokenByIndex(index)` to get the token with a specified index. It returns a **token ID**.


##### Get token by owner and index
Although we disallow multiple DIDs owned by a single wallet from the business' perspective, the contract allows this considering possible ownership transferring and NFT trading in the future. In this case `tokenOfOwnerByIndex(owner, index)` can be called to get the token owned by a specified address with a specified index. It returns a **token ID**.



#### Tag

##### Get the number of tags defined by a name
`getDefinedTagCount(name)` returns how many tags are defined by a specified TName.

##### Get tag name
Used with the above interface, `getDefinedTagNameByIndex(name, index)` returns a single tag name and `getDefinedTagNames(name)` returns all tag names defined by a specified TName.

##### Structured tag
If a tag type is a complicated structure instead of primitive value, call `getTagType(name, tagName)` to query the structure definition and then call `getFieldNamesEventBlock(fieldNamesHash)` with previously returned **fieldNamesHash** to get the block number at which this tag is defined, finally use `ethers` library to get field names in the definition.

> [!NOTE]
> The interface for querying tag type returns a encoded bytes of the ABI type, which should be parsed according to the code table. And querying field names is complicated and error-prone, so we recommend to use functions in the SDK to fetch data about tags instead of calling the contract manually.
> 
> 

Call `getTagElem(definedDidName, valueDidName, tagName, elemPath)` to get the value of a tag after getting the tag type.

> [!NOTE]
> - definedDidName: the TName defining this tag
> - valueDidName: the TName whose tag value is desired
> - elemPath: path selector to read an inner element for tuples or arrays (`[]` for reading the full tag)
> 
> This interface returns ABI-encoded data which should be parsed according to the tag type.
> It is also recommended to use SDK instead of calling the contract manually.



### Management

#### DID

##### Register DID
The owner of a domain can call `register(owner, MetaData(domain, did, note, allowSubdomain))` to register its subdomains.

> [!NOTE]
> The first parameter **owner** is the specified owner of the new DID and the second parameter is a struct of metadata containing
> - domain: the complete domain name of the new DID, which is also an Olares ID
> - did: the DID derived from the owner's wallet
> - note: notes about the new DID, used by off-chain systems for categorization
> - allowSubdomain: whether or not the new DID is allowed to register subdomains
> 	
> The metadata cannot be changed after registration. If the ownership is transferred in the future, the new DID record will be written to the `latestDid` tag.


#### Tag

##### Define tag
Call `defineTag(didName, tagName, abiType, fieldNames)` with the owner of `didName` to define a tag.

> [!NOTE]
>  - abiType: data type of this tag following our **ABI** code format, which supports complicated structures
> - fieldNames: the field names of structs inside this tag, flatten as a 2D string array using pre-order traversal
> 


##### CRUD

> [!NOTE]
> We recommend to interact with the tagger contract instead of using the following interfaces to perform tag operations.


- Create
  Call `addTag(defineDidName, valueDidName, tagName, value)` to add a tag.

- Update
  Call `updateTagElem(defineDidName, valueDidName, tagName, elemPath, value)` to update a piece of data in a tag.


- Delete
  Call `removeTag(defineDidName, valueDidName, tagName)` to delete a tag. This deletes a tag set on a DID instead of deleting the tag definition.

- Array operations
  If the tag type contains an array, call `popTagElem(defineDidName, valueDidName, tagName, elePaths)` and `pushTagElem(defineDidName, valueDidName, tagName, elePaths, value)` to perform array-specific operations.

> [!NOTE]
> - defineDidName: the TName defining this tag
> - valueDidName: the TName on which the tag value is set
> - value: ABI-encoded tag value



## Management with SDK

### Query

#### DID

##### Get all DIDs
Sometimes we need complete data for statistical or other reasons. The following `fetchAll` method utilizes the contract interfaces to get complete data. Although it gets the result directly from on-chain interfaces instead of traversing Ethereum events, this can be time-consuming as the amount of data is large.
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
> If running in development environment and logging is on, the fetching progress is shown during execution.
> 

###### Fast fetch

For your convenience, the SDK provides two functions `formatDatas` and `loadDatas`. The data returned by `formatDatas` can be stored and it can be loaded by `loadDatas` next time to reduce syncing duration. A simpler way is to access the `/all` endpoint in the official **did-support** service, which can also be loaded by `loadDatas`.

##### Query specific DID
After reading the above contract interfaces, you should notice that the contract does not provide a single interface for fetching complete data related to a DID. So we simplified the design of interfaces in the SDK, where `fetchDomain` returns complete data for a DID.

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

###### Fast query
After you execute `loadDatas` in the above SDK examples, `fetchDomain` will first try to match local data and only fetch data on-chain if there is no data for this DID on local machine.

###### Update DID
If you are worried that fast query does not return the latest data, use `updateDomain` or `updateDomainById` to update local data.

###### Fuzzy matching
Like fast query, you can use the fuzzy matching function in SDK after loading data locally. The following two functions only match the local data.
```Typescript
import DID from 'did-contract-developer-components'
//... code

// 通过 owner 查询 DID, 并将所有子域一同返回
const domainsByOwner = DID.Domain.findSubtreesByOwner(owner, did.treesCache)

//通过 did 查询 DID, 并将所有子域一同返回
const domainsByDid = DID.Domain.findSubtreesByDid(did, did.treesCache)

```

#### Tag

##### Get all tags of a DID
Unlike calling the contract directly, this function returns data with parsed tag structure and struct field names.

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

##### Get all tag values of a DID
Like the above method, this function returns parsed data with JSON tag values.

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

### Management

#### Tag

##### Define tag
Using SDK to define a tag, you can construct the inner structure of the tag type with an object-oriented approach without worrying about the encoding. The following examples include most common data types.

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


##### Set tagger
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

##### Set tag value
Like defining a tag above, when using SDK to set tag value, you only need to pass in suitable JSON data without worring about the encoding. The tag types in the following examples are the same as the tag definition section above.

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


## Environment

### Contracts

#### SepoliaOptimistic

- OlaresDID: 0x4c8c98e652d6a01494971a8faF5d3b68338f9ED4
- RootTagger: 0xaA5bE49799b6A71Eda74d22D01F7A808aFf41b3f
- LibABI: 0xdc9e8faDe38eE9E2Eb43761f1553CD2360ecAEac

#### Optimistic

- OlaresDID: 0x5da4fa8e567d86e52ef8da860de1be8f54cae97d
- RootTagger: 0xe2eaba0979277a90511f8873ae1e8ca26b54e740
- LibABI: 0x9ae3f16bd99294af1784beb1a0a5c84bf2636365

> [!NOTE]
> RootTagger is the tagger for the following official tags:
> 	- DNSARecord
> 	- RSAPubKey
> 	- LatestDid
> 	- AuthAddress
> 

> [!NOTE]
> LibABI is an independent library contract, providing functions like ABI type encoding, data conversion etc.
> 
