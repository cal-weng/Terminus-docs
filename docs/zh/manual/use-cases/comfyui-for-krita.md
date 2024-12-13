# Krita + ComfyUI 实时绘画
想要尝试 AI 绘画，但不知道从何入手？这篇教程教你使用 Krita 和运行在 Olares 中的 ComfyUI，用最简单、灵活的方式开启 AI 绘画创作之旅。

## 了解组件构成
你的 AI 艺术工作室由以下三个协同工作的核心部分组成：

* **ComfyUI**：运行在 Olares 环境中的 AI 引擎，为图像生成提供动力。
* **Krita**：用于创作和编辑作品的专业级数字艺术软件。
* **Krita AI Diffusion 插件**：实现 Krita 和 ComfyUI 之间无缝通信的连接器。

## 准备工作
开始之前，请确保具备：
* 已安装且可访问互联网的 Olares 环境
* 与 Olares 连接到同一本地网络的计算机
* 足够的系统资源（建议：16GB 内存以获得最佳性能）

## 配置 ComfyUI

1. 根据角色从应用市场安装 ComfyUI：
   * **管理员**：需要安装“ComfyUI For Cluster”和“ComfyUI”。
   * **团队成员**：确保管理员已安装“ComfyUI For Cluster”，然后只需安装“ComfyUI”。
2. 配置 ComfyUI 的认证级别。

   a. 打开设置，导航至**应用** > **ComfyUI** > **入口**。

   b. 将**认证级别**设置为**内部**。
   ![ComfyUI 认证应用](/images/zh/manual/use-cases/comfyui-authentication-level.png#bordered){width=80%}
   :::info
   将 ComfyUI 应用的认证级别设置为“内部”后，当你的电脑和 Olares 主机在同一局域网或者通过专用网络访问 Olares 时，你可以在不登录 Olares 的情况下使用 ComfyUI。
   :::
3. 从桌面启动 ComfyUI，通过生成测试图像验证安装是否成功。
4. 复制 ComfyUI 地址，以备后续使用。
   :::tip
   出于安全考虑，应始终在局域网中运行 AI 应用。正确配置后，ComfyUI 的 URL 中应包含“`.local`”字段。
   如果缺少“`.local`”，请检查本地网络环境，确保当前设备和 Olares 处于同一网段，并且未启用外部网络代理服务。
   :::
   :::tip
   如果你需要在外网远程使用 Olares 上的 AI 应用，可以使用 LarePass 的专用网络功能，详见[通过专有网络随时随地访问 Olares 应用](../tasks/private-network.md)。
   :::
## 配置 Krita

1. 下载 [Krita](https://krita.org/en/download/)。
2. 下载 [Krita AI Diffusion 插件](https://github.com/Acly/krita-ai-diffusion/releases)。
3. 启动 Krita，选择**工具** > **脚本** > **从文件导入 Python 插件**，选择下载的 ZIP 压缩文件。
   ![导入 AI 插件](/images/zh/manual/use-cases/krita-import-plugin.png#bordered){width=70%}
4. 确认插件激活并重启 Krita。
5. 打开 Krita，在 **配置 Krita** > **Python 插件管理**中验证插件安装成功。

   ![验证 AI 插件](/images/zh/manual/use-cases/krita-verify-plugin.png)

## 连接 Krita 和 ComfyUI

1. 在 Krita 中新建文档。
   :::tip
   建议以 512 x 512 像素的画布开始，以优化性能并高效管理显存。
   :::
2. 点击**设置** > **面板列表** > **AI Image Generation** 启用插件，你可以将面板放置在便于操作的位置。
   ![启用 AI 插件](/images/zh/manual/use-cases/krita-enable-plugin.png)
3. 点击 **Configure**，打开配置对话框。
   ![配置 AI 插件](/images/manual/use-cases/krita-configure-plugin.png#bordered){width=70%}
4. 设置 ComfyUI 连接。

   a. 在 **Connection** 中选择 **Custom Server**，粘贴 ComfyUI 的地址。

   b. 点 击**Connect** 测试连接。出现绿色的“已连接”表示连接成功。
   ![连接 ComfyUI](/images/manual/use-cases/krita-comfyui-connected.png)
   :::info
   如果连接失败：
   - 检查计算机与 Olares 主机是否处于同一网段。如果不在同一网络下，是否已成功开启专有网络功能（网络状态显示为“P2P”或“DERP”）。
   - 检查 ComfyUI 的认证级别设为“内部”。
   - 检查计算机是否开启了网络代理服务。如果开启，手动关闭后再重试。
   - 检查 ComfyUI 在 Olares 主机上是否能正常生成图片。
     :::
5. 调整 ComfyUI 设置。

   a. 在 **Styles** 中配置偏好的风格模板并选择合适的 **Model checkpoint**。

   b. 如要使用实时AI绘画功能，建议将 **Performance Preset** 设置为 **Realtime - LCM**，加快出图速度。

   c. 如果没有其他需求，其他设置项建议使用默认值。

## 开始绘画🎨
现在到了激动人心的部分了！使用自然语言提示开始创作吧！
### 文生图
1. 在文本框右下角选择中文，输入提示词，例如“蓝天白云，绿草地上，飞翔着许多粉色水母”。
2. 点击 **Generate**，浏览生成的图像。
3. 选择相对满意的图像，点击 **Apply** 将其保存到画布上。
   ![生成 AI 艺术](/images/zh/manual/use-cases/krita-generate-ai-art.png)
   :::tip
   如果生成的图片不够理想，可以尝试：
   - 重新生成一批图像
   - 拖动 Strength 的数值调整 AI 的创造性
   - 优化提示词
   - 尝试不同的风格设置
   :::
### 局部修改
1. 使用选择工具选取要局部修改的地方。
2. 在提示词中增加相关的描述，例如“远处有一个小村庄”，点击 **Refine**。
3. 选择看起来最满意的修改，点击 **Apply**，将局部修改保存到一个新图层。
   ![局部修改](/images/zh/manual/use-cases/krita-inpaint.png)
### 实时绘画结合手工调整
1. 将当前的图像合并为一个图层。
2. 点击插件左上角模式菜单，选择 **Live** 实时绘图模式。
   ![启用 Live 实时绘图](/images/zh/manual/use-cases/krita-live-mode.png)
3. 点击“开始”图标，启动实时绘制。
   ![实时绘图](/images/zh/manual/use-cases/krita-live-creation.png)
   :::tip
   开始实时绘制后，原图片会被重绘一次，部分细节可能会发生变化，你可以修改 Strength 来控制改变的“力度”。
   开启实时绘制后，建议先点击右侧的两个对勾按钮保存，并在新图层上进行绘画。
   :::
4. 在提示词中，描述你想要修改的内容，并在图上绘制对应相应内容。
   例如，增加“冒着炊烟”的描述，并用白色线条在房顶简单勾勒下炊烟效果。可以看到预览界面已经实时加入了炊烟效果。
   ![实时绘图](/images/zh/manual/use-cases/krita-add-smoke.png)

**最终效果**

   ![实时绘图最终效果](/images/zh/manual/use-cases/krita-live-art-example.png)
### 图生图
1. 绘制或导入一张人物特定姿势的线稿。
   ![人物线稿](/images/zh/manual/use-cases/krita-sketch.png)
2. 输入提示词，例如“一个女生，看着镜头，坐在紫色的床边”。
3. 点击下方 **Add Control Layer**，选择线稿所在图层，控制方式选择 **Scribble** 涂鸦。
   ![人物线稿涂鸦绘制](/images/zh/manual/use-cases/krita-sketch-scribble.png)
4. 点击 **Generate**，从备选图片中选择满意的图片进一步修改。
5. 开启实时绘画精修手部和其他局部细节。

   a. 用选择工具选取手部区域，复制到一个新图层。

   b. 在提示词中输入描述，例如“左手”。

   c. 开启实时绘画，擦除手部细节。可以直接用文生图生成新的手，也可以简单绘制手的姿势来提高生成的正确率。
   ![调整局部细节](/images/zh/manual/use-cases/krita-sketch-inpaint.png)

**最终效果**

   ![图生图最终效果](/images/zh/manual/use-cases/krita-img-to-img-example.png)