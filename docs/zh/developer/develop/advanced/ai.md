# AI

## API 前缀

`agent.<username>.olares.com/api/controllers/console/api`

## 应用

/apps

```json
GET：获取app列表
参数示例：/apps?page=1&limit=30&name=Ashia
```

```json
POST：创建APP
Body示例：
{
    "name": "TEST",
    "icon": "🤖",
    "icon_background": "#FFEAD5",
    "mode": "agent-chat",
    "description": "JUST A TEST"
}
```

## 应用细节

/apps/{uuid:app_id}

```json
GET：获取app细节（无参数）
```

```json
DELETE：删除app（无参数）
```

## 应用复制

/apps/{uuid:app_id}/copy

```json
POST：复制app
Body示例：
{
    "name": "Ashia-2",
    "icon": "🤖",
    "icon_background": "#FFEAD5",
    "mode": "agent-chat"
}
```

## 应用改名

/apps/{uuid:app_id}/name

```json
POST：app改名
Body示例：
{
  "name": "Ashia—34"
}
```

## 应用图标

/apps/{uuid:app_id}/icon

```json
POST：app修改图标
Body示例：
{
  "icon": "heavy_check_mark"
}
```

## 应用网页访问控制

/apps/{uuid:app_id}/site-enable

```json
POST：调整app是否可网页访问
Body示例：
{
  "enable_site": true
}
```

## 应用 API 访问控制

/apps/{uuid:app_id}/api-enable

```json
POST：调整app是否可api访问
Body示例：
{
  "enable_api": true
}
```

## 文本生成

/apps/{uuid:app_id}/completion-messages

```json
POST：文本生成型APP的执行接口
Body示例：
{
  "inputs": {
    "query": "Hello～"
  },
  "model_config": {
      "pre_prompt": "{{query}}",
      "prompt_type": "simple",
      "chat_prompt_config": {},
      "completion_prompt_config": {},
      "user_input_form": [
          {
              "paragraph": {
                  "label": "Query",
                  "variable": "query",
                  "required": true,
                  "default": ""
              }
          }
      ],
      "dataset_query_variable": "",
      "opening_statement": null,
      "suggested_questions_after_answer": {
        "enabled": false
      },
      "speech_to_text": {
        "enabled": false
      },
      "retriever_resource": {
        "enabled": false
      },
      "sensitive_word_avoidance": {
          "enabled": false,
          "type": "",
          "configs": []
      },
      "more_like_this": {
        "enabled": false
      },
      "model": {
          "provider": "openai_api_compatible",
          "name": "nitro",
          "mode": "chat",
          "completion_params": {
              "temperature": 0.7,
              "top_p": 1,
              "frequency_penalty": 0,
              "presence_penalty": 0,
              "max_tokens": 512
          }
      },
      "text_to_speech": {
          "enabled": false,
          "voice": "",
          "language": ""
      },
      "agent_mode": {
          "enabled": false,
          "tools": []
      },
      "dataset_configs": {
          "retrieval_model": "single",
          "datasets": {
            "datasets": []
          }
      },
      "file_upload": {
          "image": {
              "enabled": false,
              "number_limits": 3,
              "detail": "high",
              "transfer_methods": [
                  "remote_url",
                  "local_file"
              ]
          }
      }
  },
  "response_mode": "streaming"
}
```

## 文本生成停止

/apps/{uuid:app_id}/completion-messages/{string:task_id}/stop

```json
POST：文本生成型APP执行中断任务接口（无Body）
```

## 聊天

/apps/{uuid:app_id}/chat-messages

```json
POST：聊天型APP的执行接口
Body示例：
{
  "response_mode": "streaming",
  "conversation_id": "",
  "query": "Hello～",
  "inputs": {},
  "model_config": {
      "pre_prompt": "",
      "prompt_type": "simple",
      "chat_prompt_config": {},
      "completion_prompt_config": {},
      "user_input_form": [],
      "dataset_query_variable": "",
      "opening_statement": "",
      "more_like_this": {
        "enabled": false
      },
      "suggested_questions": [],
      "suggested_questions_after_answer": {
        "enabled": false
      },
      "text_to_speech": {
          "enabled": false,
          "voice": "",
          "language": ""
      },
      "speech_to_text": {
        "enabled": false
      },
      "retriever_resource": {
        "enabled": false
      },
      "sensitive_word_avoidance": {
        "enabled": false
      },
      "agent_mode": {
          "max_iteration": 5,
          "enabled": true,
          "tools": [],
          "strategy": "react"
      },
      "dataset_configs": {
          "retrieval_model": "single",
          "datasets": {
            "datasets": []
          }
      },
      "file_upload": {
          "image": {
              "enabled": false,
              "number_limits": 2,
              "detail": "low",
              "transfer_methods": [
                "local_file"
              ]
          }
      },
      "annotation_reply": {
        "enabled": false
      },
      "supportAnnotation": true,
      "appId": "2c937aae-f4f2-4cf9-b6e2-f2f2756858c0",
      "supportCitationHitInfo": true,
      "model": {
          "provider": "openai_api_compatible",
          "name": "nitro",
          "mode": "chat",
          "completion_params": {
              "temperature": 2,
              "top_p": 1,
              "frequency_penalty": 0,
              "presence_penalty": 0,
              "max_tokens": 512,
              "stop": []
          }
      }
  }
}
```

## 聊天停止

/apps/{uuid:app_id}/chat-messages/{string:task_id}/stop

```json
POST：聊天型APP执行中断任务接口（无Body）
```

## 会话（文本生成）

/apps/{uuid:app_id}/completion-conversations

```json
GET：获取文本生成型APP的会话列表
参数示例：/apps/<uuid:app_id>/completion-conversations?page=1&limit=30
```

## 会话细节（文本生成）

/apps/{uuid:app_id}/completion-conversations/{uuid:conversation_id}

```json
GET：获取文本生成型APP的会话细节（无参数）
```

```json
DELETE：删除文本生成型APP的会话细节（无参数）
```

## 会话（聊天）

/apps/{uuid:app_id}/chat-conversations

```json
GET：获取聊天型APP的会话列表
参数示例：/apps/<uuid:app_id>/chat-conversations?page=1&limit=30
```

## 会话细节（聊天）

/apps/{uuid:app_id}/chat-conversations/{uuid:conversation_id}

```json
GET：获取聊天型APP的会话细节（无参数）
```

```json
DELETE：删除聊天型APP的会话细节（无参数）
```

## 推荐问题（聊天）

/apps/{uuid:app_id}/chat-messages/{uuid:message_id}/suggested-questions

```json
GET：在聊天型APP中，在AI给出一个回复后，获取推荐的可以接着问的问题（无参数）
```

## 消息列表（聊天）

/apps/{uuid:app_id}/chat-messages

```json
GET：获取聊天型APP的消息列表。
参数示例：/apps/<uuid:app_id>/chat-messages?conversation_id={conversation_id}
```

## 消息反馈

/apps/{uuid:app_id}/feedbacks

```json
POST：对APP的消息进行“赞”或“踩”的反馈
Body示例：
{
  "rating": "like"
}
（取值为"like"，"dislike"，null）
```

## 消息标注

/apps/{uuid:app_id}/annotations

```json
POST：对APP的消息进行标注改进反馈（文本生成型）
Body示例：
{
  "message_id": "2b79fdad-e513-45ef-9532-8de5086cb81c",
  "question": "query:How are you?",
  "answer": "some answer messages"
}
```

## 消息标注统计

/apps/{uuid:app_id}/annotations/count

```json
GET：获取APP的消息当前的标注改进反馈数量（无参数）
```

## 消息细节（聊天）

/apps/{uuid:app_id}/messages/{uuid:message_id}

```json
GET：获取APP的消息的消息细节（仅限聊天型）（无参数）
```

## 模型配置

/apps/{uuid:app_id}/model-config

```json
POST：修改APP的模型配置
Body示例：
{
  "pre_prompt": "",
  "prompt_type": "simple",
  "chat_prompt_config": {},
  "completion_prompt_config": {},
  "user_input_form": [],
  "dataset_query_variable": "",
  "opening_statement": "",
  "suggested_questions": [],
  "more_like_this": {
    "enabled": false
  },
  "suggested_questions_after_answer": {
    "enabled": false
  },
  "speech_to_text": {
    "enabled": false
  },
  "text_to_speech": {
    "enabled": false,
    "language": "",
    "voice": ""
  },
  "retriever_resource": {
    "enabled": false
  },
  "sensitive_word_avoidance": {
    "enabled": false
  },
  "agent_mode": {
    "max_iteration": 5,
    "enabled": true,
    "strategy": "react",
    "tools": []
  },
  "model": {
    "provider": "openai_api_compatible",
    "name": "nitro",
    "mode": "chat",
    "completion_params": {
        "frequency_penalty": 0,
        "max_tokens": 512,
        "presence_penalty": 0,
        "stop": [],
        "temperature": 2,
        "top_p": 1
    }
  },
  "dataset_configs": {
    "retrieval_model": "single",
    "datasets": {
        "datasets": []
    }
  },
  "file_upload": {
    "image": {
        "enabled": false,
        "number_limits": 2,
        "detail": "low",
        "transfer_methods": [
            "local_file"
        ]
    }
  }
}
```

## 应用基本信息修改

/apps/{uuid:app_id}/site

```json
POST：修改APP基本信息
Body示例：
{
  "title": "Ashias-23",
  "icon": "grin",
  "icon_background": "#000000",
  "description": "How do you do~"
}
```

## 重新生成公开访问的 URL

/apps/{uuid:app_id}/site/access-token-reset

```json
POST ：为APP重新生成公开访问URL（无Body）
```

## 全部消息数统计

/apps/{uuid:app_id}/statistics/daily-conversations

```json
GET：获取APP统计信息：全部消息数
参数示例：/apps/<uuid:app_id>/statistics/daily-conversations?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```

## 活跃用户数统计

/apps/{uuid:app_id}/statistics/daily-end-users

```json
GET ：获取APP统计信息：活跃用户数
参数示例：/apps/<uuid:app_id>/statistics/daily-end-users?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```

## 费用消耗统计

/apps/{uuid:app_id}/statistics/token-costs

```json
GET ：获取APP统计信息：费用消耗
参数示例：/apps/<uuid:app_id>/statistics/token-costs?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```

## 平均会话互动数统计

/apps/{uuid:app_id}/statistics/average-session-interactions

```json
GET ：获取聊天型APP统计信息：平均会话互动数
参数示例：/apps/<uuid:app_id>/statistics/average-session-interactions?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```

## 用户满意度统计

/apps/{uuid:app_id}/statistics/user-satisfaction-rate

```json
GET：获取APP统计信息：用户满意度
参数示例：/apps/<uuid:app_id>/statistics/user-satisfaction-rate?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```

## 平均响应时间统计

/apps/{uuid:app_id}/statistics/average-response-time

```json
GET：获取文本生成型APP统计信息：平均响应时间
参数示例：/apps/<uuid:app_id>/statistics/average-response-time?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```

## Token 输出速度统计

/apps/{uuid:app_id}/statistics/tokens-per-second

```json
GET：获取APP统计信息：Token输出速度
参数示例：/apps/<uuid:app_id>/statistics/tokens-per-second?start=2024-04-19%2016%3A28&end=2024-04-26%2016%3A28
```
