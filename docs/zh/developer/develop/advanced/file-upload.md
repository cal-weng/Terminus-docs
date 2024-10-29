# 文件上传

Olares 作为一个云端系统，存在很多将本地文件上传到云端的场景。`TAPR（Olares Application Runtime）`提供了一个通用的 file-upload 组件。简化 APP 对文件上传需求的开发。同时，file-upload 组件还提供了断点续传功能。

## 如何安装

APP 只要在 TAC 的 [OlaresManifest.yaml](../package/manifest.md#upload) 中申明

```yaml
upload:
  fileType:
    - pdf
  dest: /appdata
  limitedSize: 3729747942
```

## 前端接口对接

**_注意_**：单次上传大小限制为 10M，大于 10M 需要使用分片断点续传功能

1. 文件上传获取 id 及状态接口（POST）
   该接口用于将文件上传到服务器。
   请求

- 方法：POST
- URL：/upload/
  请求体
  请求体为 multipart/form-data 格式，包含以下字段：
- storage_path (必填)：文件在服务器上的存储文件夹，该文件夹必须存在，类型为字符串。
- file_relative_path (必填)：文件相对于 storage_path 的路径，必须包含文件名，类型为字符串。如果以/结尾为文件夹
- file_type (必填)：文件类型，类型为字符串。
- file_size (必填)：文件大小，类型为整数。
  响应
- 状态码：200 OK
- 响应体：JSON 格式
  响应体包含以下字段：
- code：响应码，0 表示成功，非零表示失败。
- message：响应消息，成功时为 "success"，失败时为相应的错误消息。
- data：响应数据，成功时包含以下字段（上传文件夹时无该字段）：
  - id：文件唯一标识符，类型为字符串。
  - offset：文件上传的偏移量，类型为整数。
  - file_relative_path：文件相对于 storage_path 的路径，类型为字符串。
  - file_type：文件类型，类型为字符串。
  - file_size：文件大小，类型为整数。
  - storage_path：文件在服务器上的存储路径，类型为字符串。

示例请求

```sh
curl --location 'http://host:40030/upload/' \
--form 'storage_path="./testupload/"' \
--form 'file_relative_path="1.csv"' \
--form 'file_type="csv"' \
--form 'file_size="1937"'
```

响应

```json
{
  "code": 0,
  "message": "success",
  "data": {
    "id": "b0b76f02bdb8ee3269602c983c4a2aeb",
    "offset": 0,
    "file_relative_path": "1.csv",
    "file_type": "csv",
    "file_size": 1937,
    "storage_path": "./testupload/"
  }
}
```

错误情况

- 状态码 400 Bad Request：请求参数不合法或缺失。
- 状态码 500 Internal Server Error：服务器内部错误，例如创建文件夹失败或保存文件信息失败。

---

2. 文件上传及断点续传（PATCH）
   继续上传文件的剩余部分。
   请求

- 方法：PATCH
- URL：http://host:40030/upload/{uid}
  请求体
  请求体为 multipart/form-data 格式，包含以下字段：
- file (必填)：要上传的文件。请使用 multipart/form-data 格式进行文件上传。
- upload_offset (必填)：文件上传的偏移量，类型为整数。之前已上传的文件大小
  路径参数
- uid (必填)：文件的唯一标识符，类型为字符串。将其替换为实际要上传的文件的标识符。
  响应
- 状态码：200 OK
- 响应体：JSON 格式
  响应体包含以下字段：
- code：响应码，0 表示成功，非零表示失败。
- message：响应消息，成功时为 "File uploaded successfully"，失败时为相应的错误消息。
- data：响应数据，成功时包含以下字段：

  - id：文件唯一标识符，类型为字符串。
  - offset：文件上传的偏移量，类型为整数。
  - file_relative_path：文件相对于 storage_path 的路径，类型为字符串。。
  - file_type：文件类型，类型为字符串。
  - file_size：文件大小，类型为整数。
  - storage_path：文件在服务器上的存储路径，类型为字符串。
    示例
    请求

```sh
curl --location --request PATCH 'http://host:40030/upload/b0b76f02bdb8ee3269602c983c4a2aeb' \
--form 'file=@"/Users/yangtao/Downloads/1.csv"' \
--form 'upload_offset="0"'
```

响应

```json
{
  "code": 0,
  "message": "File uploaded successfully",
  "data": {
    "id": "b0b76f02bdb8ee3269602c983c4a2aeb",
    "offset": 1937,
    "file_name": "1.csv",
    "file_type": "csv",
    "file_size": 1937,
    "storage_path": "./testupload"
  }
}
```

```json
{
  "code": 0,
  "message": "Continue uploading",
  "data": {
    "id": "e3133b0f838124ff3ebcc9cb14774f26",
    "offset": 1048576,
    "file_name": "1.pdf",
    "file_type": ".pdf",
    "file_size": 10296258,
    "storage_path": "./testupload"
  }
}
```

错误情况

- 状态码 400 Bad Request：请求参数不合法或缺失。

```json
{ "code": 1, "message": "Invalid upload ID" }
```

- 状态码 500 Internal Server Error：服务器内部错误，例如创建文件夹失败、保存文件信息失败或移动文件失败。
