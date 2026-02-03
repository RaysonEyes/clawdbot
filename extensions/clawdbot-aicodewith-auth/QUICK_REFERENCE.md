# 快速参考：通过 WhatsApp 切换模型

## 🚀 最快方式：WhatsApp 命令

### 切换模型（一行命令）

```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 常用模型切换命令

```bash
# Claude Sonnet 4.5（推荐）
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# GPT-4o
/config set agents.defaults.model.primary aicodewith-openai/gpt-4o

# Gemini 2.0 Flash
/config set agents.defaults.model.primary aicodewith-gemini/gemini-2.0-flash-exp

# Antigravity Claude Opus（最强）
/config set agents.defaults.model.primary aicodewith-antigravity/claude-opus-4-5-thinking

# 切换回 minimax
/config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

## 📊 查看状态

```bash
# 查看当前模型
/config get agents.defaults.model.primary

# 查看完整状态
/status

# 查看所有命令
/help
```

## 🎯 临时使用其他模型（不改变默认）

在消息前加 `@模型别名`：

```
@claude 帮我写代码
@gpt 解释这段代码
@gemini 翻译文字
@antigravity 解决复杂问题
```

## 📝 完整模型列表

### Claude 系列
- `aicodewith-claude/claude-opus-4-5-thinking` - 最强思考模型
- `aicodewith-claude/claude-opus-4-5` - 最强标准模型
- `aicodewith-claude/claude-sonnet-4-5` - 平衡性能（推荐）
- `aicodewith-claude/claude-sonnet-4` - 快速响应
- `aicodewith-claude/claude-3-5-sonnet-20241022` - 稳定版本
- `aicodewith-claude/claude-3-5-haiku-20241022` - 最快速度

### OpenAI 系列
- `aicodewith-openai/o1` - 最强推理
- `aicodewith-openai/o1-mini` - 快速推理
- `aicodewith-openai/o3-mini` - 新一代推理
- `aicodewith-openai/gpt-4o` - 多模态（推荐）
- `aicodewith-openai/gpt-4o-mini` - 快速多模态

### Gemini 系列
- `aicodewith-gemini/gemini-2.0-flash-thinking-exp-01-21` - 思考模型
- `aicodewith-gemini/gemini-2.0-flash-exp` - 最新实验版（推荐）
- `aicodewith-gemini/gemini-exp-1206` - 实验版本
- `aicodewith-gemini/gemini-1.5-pro-002` - 专业版
- `aicodewith-gemini/gemini-1.5-flash-002` - 快速版

### Antigravity 系列（Google Cloud）
- `aicodewith-antigravity/claude-opus-4-5-thinking` - 最强（推荐）
- `aicodewith-antigravity/claude-opus-4-5`
- `aicodewith-antigravity/claude-sonnet-4-5`
- `aicodewith-antigravity/claude-sonnet-4`
- `aicodewith-antigravity/gemini-2.0-flash-thinking-exp-01-21`
- `aicodewith-antigravity/gemini-2.0-flash-exp`
- `aicodewith-antigravity/gemini-exp-1206`

## 💡 提示

1. **配置后立即生效**：通过 `/config set` 命令修改后立即生效，无需重启
2. **保留 minimax**：你的 minimax 配置完全保留，随时可以切换回去
3. **使用别名更方便**：`@claude`、`@gpt`、`@gemini`、`@antigravity` 都可以使用
4. **查看帮助**：发送 `/help` 查看所有可用命令
