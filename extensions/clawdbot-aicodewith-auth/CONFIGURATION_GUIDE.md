# AICodewith 插件配置指南（按照官方文档优化）

## 📦 插件信息

- **插件名称**: `clawdbot-aicodewith-auth`
- **版本**: 2026.1.26
- **位置**: `extensions/clawdbot-aicodewith-auth/`
- **状态**: ✅ 已启用

## 🚀 快速开始

### 1. 配置 AICodewith Claude（推荐）

按照官方文档，推荐使用 Claude，因为工具调用能力最强：

```bash
pnpm clawdbot models auth login --provider aicodewith-claude --set-default
```

**说明**：
- 使用 `--set-default` 参数会自动将 Claude 设置为默认模型
- 系统会提示输入 AICodewith API Key
- 配置完成后，默认模型会设置为 `aicodewith-claude/claude-sonnet-4-5`

### 2. 查看可用模型

```bash
pnpm clawdbot models list | grep aicodewith
```

### 3. 开始使用

配置完成后，直接在 WhatsApp 中发送消息即可使用！

## 📝 配置其他提供商

### 配置 OpenAI/GPT 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-openai --set-default
```

默认模型：`aicodewith-openai/gpt-4o`

### 配置 Gemini 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-gemini --set-default
```

默认模型：`aicodewith-gemini/gemini-2.0-flash-exp`

### 配置 Antigravity 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-antigravity --set-default
```

默认模型：`aicodewith-antigravity/claude-opus-4-5-thinking`

## 🔄 切换模型

### 方式 1：通过 WhatsApp（最方便）

```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 方式 2：通过终端

```bash
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 切换回 minimax

如果你想切换回原来的 minimax 模型：

```bash
pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

## 📊 支持的模型列表

### AICodewith Claude（推荐）
- `aicodewith-claude/claude-opus-4-5-thinking` - 最强思考模型
- `aicodewith-claude/claude-opus-4-5` - 最强标准模型
- `aicodewith-claude/claude-sonnet-4-5` - 平衡性能（默认）⭐
- `aicodewith-claude/claude-sonnet-4` - 快速响应
- `aicodewith-claude/claude-3-5-sonnet-20241022` - 稳定版本
- `aicodewith-claude/claude-3-5-haiku-20241022` - 最快速度

### AICodewith OpenAI
- `aicodewith-openai/o1` - 最强推理
- `aicodewith-openai/o1-mini` - 快速推理
- `aicodewith-openai/o3-mini` - 新一代推理
- `aicodewith-openai/gpt-4o` - 多模态（默认）⭐
- `aicodewith-openai/gpt-4o-mini` - 快速多模态

### AICodewith Gemini
- `aicodewith-gemini/gemini-2.0-flash-thinking-exp-01-21` - 思考模型
- `aicodewith-gemini/gemini-2.0-flash-exp` - 最新实验版（默认）⭐
- `aicodewith-gemini/gemini-exp-1206` - 实验版本
- `aicodewith-gemini/gemini-1.5-pro-002` - 专业版
- `aicodewith-gemini/gemini-1.5-flash-002` - 快速版

### AICodewith Antigravity（Google Cloud）
- `aicodewith-antigravity/claude-opus-4-5-thinking` - 最强（默认）⭐
- `aicodewith-antigravity/claude-opus-4-5`
- `aicodewith-antigravity/claude-sonnet-4-5`
- `aicodewith-antigravity/claude-sonnet-4`
- `aicodewith-antigravity/gemini-2.0-flash-thinking-exp-01-21`
- `aicodewith-antigravity/gemini-2.0-flash-exp`
- `aicodewith-antigravity/gemini-exp-1206`

## 💡 使用技巧

### 临时使用其他模型

在 WhatsApp 消息前加 `@模型别名`：

```
@claude 帮我写代码
@gpt 解释这段代码
@gemini 翻译文字
@antigravity 解决复杂问题
```

### 查看当前模型

WhatsApp 中发送：
```
/status
```

或终端命令：
```bash
pnpm clawdbot config get agents.defaults.model.primary
```

## ⚠️ 重要说明

1. **使用 `--set-default` 参数**：
   - 会自动设置该提供商的默认模型为主模型
   - 如果你想保留当前的 minimax 模型，不要使用 `--set-default`
   - 或者配置后手动切换回 minimax

2. **API Key 共享**：
   - 所有 AICodewith 提供商（Claude、OpenAI、Gemini、Antigravity）使用相同的 API Key
   - 只需要配置一次 API Key

3. **重启 Gateway**：
   - 配置完成后，建议重启 gateway 以确保配置生效
   ```bash
   pkill -9 -f clawdbot-gateway
   pnpm clawdbot gateway run --bind loopback --port 18789 --force > /tmp/clawdbot-gateway.log 2>&1 &
   ```

## 🔗 相关链接

- AICodewith 官网: https://aicodewith.com
- 官方文档: https://docs.aicodewith.com/docs/openclaw
- 创建 API Key: https://docs.aicodewith.com/docs/create-api-key

## 📚 其他文档

- 快速参考：`QUICK_REFERENCE.md`
- 切换指南：`SWITCHING_GUIDE.md`
- 启动指南：`STARTUP_GUIDE.md`
