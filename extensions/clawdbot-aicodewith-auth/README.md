# Clawdbot AICodewith Auth Plugin

通过 AICodewith 插件，在 Clawdbot 中使用 GPT、Claude、Gemini 和 Google Antigravity 模型。

> 本插件严格按照 [AICodewith 官方文档](https://docs.aicodewith.com/docs/openclaw) 实现

## 安装

插件已内置在 Clawdbot 中，位于 `extensions/clawdbot-aicodewith-auth/`

## 启用插件

```bash
clawdbot plugins enable clawdbot-aicodewith-auth
```

## 配置（推荐使用 Claude）

按照官方文档，推荐使用 Claude，因为工具调用能力最强：

### Claude 模型（推荐）⭐

```bash
clawdbot models auth login --provider aicodewith-claude --set-default
```

使用 `--set-default` 参数会自动将 Claude 设置为默认模型。

### OpenAI 模型

```bash
clawdbot models auth login --provider aicodewith-openai --set-default
```

### Gemini 模型

```bash
clawdbot models auth login --provider aicodewith-gemini --set-default
```

### Google Antigravity 模型

```bash
clawdbot models auth login --provider aicodewith-antigravity --set-default
```

## 支持的模型

### Claude（推荐）
- claude-opus-4-5-thinking
- claude-opus-4-5
- claude-sonnet-4-5 ⭐ 默认
- claude-sonnet-4
- claude-3-5-sonnet-20241022
- claude-3-5-haiku-20241022

### OpenAI
- o1
- o1-mini
- o3-mini
- gpt-4o ⭐ 默认
- gpt-4o-mini

### Gemini
- gemini-2.0-flash-thinking-exp-01-21
- gemini-2.0-flash-exp ⭐ 默认
- gemini-exp-1206
- gemini-1.5-pro-002
- gemini-1.5-flash-002

### Google Antigravity
- claude-opus-4-5-thinking ⭐ 默认
- claude-opus-4-5
- claude-sonnet-4-5
- claude-sonnet-4
- gemini-2.0-flash-thinking-exp-01-21
- gemini-2.0-flash-exp
- gemini-exp-1206

## 切换模型

### 通过 WhatsApp（最方便）

```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 通过终端

```bash
# 切换到 Claude
clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 GPT
clawdbot config set agents.defaults.model.primary aicodewith-openai/gpt-4o

# 切换到 Gemini
clawdbot config set agents.defaults.model.primary aicodewith-gemini/gemini-2.0-flash-exp

# 切换到 Antigravity
clawdbot config set agents.defaults.model.primary aicodewith-antigravity/claude-opus-4-5-thinking

# 切换回 minimax
clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

## 查看可用模型

```bash
clawdbot models list | grep aicodewith
```

## 重要说明

1. **`--set-default` 参数**：使用此参数会自动设置该提供商的默认模型
2. **API Key 共享**：所有 AICodewith 提供商使用相同的 API Key
3. **推荐 Claude**：官方推荐使用 Claude，工具调用能力最强

## 相关链接

- AICodewith 官网: https://aicodewith.com
- 官方文档: https://docs.aicodewith.com/docs/openclaw
- 创建 API Key: https://docs.aicodewith.com/docs/create-api-key

## 详细文档

- [配置指南](./CONFIGURATION_GUIDE.md) - 按照官方文档的配置方式
- [快速参考](./QUICK_REFERENCE.md) - 常用命令速查
- [切换指南](./SWITCHING_GUIDE.md) - 多种切换方式
- [启动指南](./STARTUP_GUIDE.md) - 系统启动说明
