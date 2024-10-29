# Websocket

WebSocket 作为现代前端应用最广泛使用的技术，`TAPR（Olares Application Runtime）`提供了一个通用的 websocket 组件，简化 APP 对 websocket 的使用和开发。

## 一、客户端

基于 JavaScript/TypeScript 的方式开发的客户端，采用“ws”库。
应用服务提供 WebSocket 的路径格式：`wss://<appid>.<username>.olares.com/ws`

### 1、发送消息

客户端发送 WebSocket 消息格式如下（支持其他格式）：

```json
{
  "event": "...",
  "data": {...}
}
```

### 2、ping

客户端需要定期发送 ping 包（30 秒一次），以维持 WebSocket 连接。（WebSocket 服务定期检查 ping 包，超时则会主动关闭该连接），ping 包数据格式如下（严格按照如下格式）：

```json
{
  "event": "ping",
  "data": {}
}
```

## 二、应用 App

应用 App 通过调用 WebSocket 服务的接口，来向客户端广播消息、或响应客户端的 WebSocket 的推送消息。WebSocket 服务也提供关闭指定用户或连接 ID 的 ws 连接；获取当前连接列表。

因为 WebSocket 与 App 是部署在一个容器中的，所以直接访问 localhost 即可调用 WebSocket 服务。端口 40010。

### 1、广播消息

```json
// URL：http://localhost:40010/tapr/ws/conn/send
// 请求方式：POST
// body
{
"payload": {}, // 消息。
"conn_id": "<connId>", // 连接 ID；用于响应客户端的单次 Ws 请求。按 users 广播时不要填写 connId
"users": ["<userName-1>", "<userName-2>"], // 指定用户，如果填写该字段，则是广播。广播场景下不要填写 connId
}

// 响应示例
{
"code": 0,
"message": "success",
}
```

### 2、关闭客户端的 WebSocket 连接

```json
// URL：http://localhost:40010/tapr/ws/conn/close
// 请求方式：POST
// body
{
"conns": ["<connId>", ...], // 关闭指定连接
"users": ["<userName>", ...], // 关闭指定用户的所有连接
}

// 响应示例
{
"code": 0,
"message": "success",
}
```

### 3、获取当前在线的连接列表

```json
// URL：http://localhost:40010/tapr/ws/conn/list
// 请求方式：GET
// 响应示例
{
  "code": 0,
  "message": "success",
  "data": [
    {
      "name": "<userName>",
      "conns": [
        {
          "id": "<connId>", // 连接 ID
          "userAgent": ""
        }
      ]
    }
  ]
}
```

### 4、WebSocket 转发客户端消息到应用 App

转发数据包括三类：a）客户端连入；b）客户端正常发送的消息；c）客户端连接断开，如关闭浏览器，网络异常等。
a）客户端连入

```json
// URL：http://localhost:3010/websocket/message
// 请求方式：POST
// body

{
  "data": {},
  "action": "open", // action
  "user_name": "<userName>",
  "conn_id": "1" // WebSocket 连接 ID
}

// 应用 App 接收到 open 的消息后，做相关处理。
```

b）客户端正常发送的消息

```json
// URL：http://localhost:3010/websocket/message
// 请求方式：POST
// header，会传递客户端的原始 Cookie 给后端应用
Cookie: .... // v1.0.3 版本新增功能

// body
{
"data": { ... }, // 客户端发到 WSGateway 的原始数据，内部结构为 {"event":"", "data": {...}}
"action": "message", // action
"user_name": "<userName>",
"conn_id": "1", // WebSocket 连接 ID
}

// 应用 App 处理后通过“广播消息”的接口，将数据回传给客户端

```

c）客户端连接断开（WebSocket 服务响应到 close 事件后回调 App）

```json
// URL：http://localhost:3010/websocket/message
// 请求方式：POST
// body

{
  "data": {},
  "action": "close", // action
  "user_name": "<userName>",
  "conn_id": "1" // WebSocket 连接 ID
}

// 应用 App 接收到 close 的消息后，做相关处理。
```

## 三、应用 App 部署 WebSocket 服务

APP 要使用这个功能只需要在 TAC 的 [OlaresManifest.yaml](../package/manifest.md#websocket) 中申明

```yaml
options:
  websocket:
    url: /ws/message
    port: 8888
```

WebSocket 是在客户端和应用 App 之间承载消息转发的组件，所以 App 端需要提供一个 API 接口，供 WebSocket 调用转发客户端的 ws 消息。比如，按上面的申明应用应提供接口名为：/ws/message，端口是 8888。
