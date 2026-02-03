# ✅ AICodewith 模型配置已更新（正确版本）

## 🎉 问题已解决

根据你的 AICodewith API 支持的模型，已更新为正确的模型 ID。

## 📋 可用的模型（已更新）

| 模型名称 | 模型 ID | 特点 |
|---------|---------|------|
| Claude Sonnet 4.5 | `aicodewith-claude/claude-sonnet-4-5-20250929` | 平衡性能，推荐 ⭐ |
| Claude Opus 4.5 | `aicodewith-claude/claude-opus-4-5-20251101` | 最强模型 |
| Claude Opus 4.1 | `aicodewith-claude/claude-opus-4-1-20251101` | 强大模型 |
| Claude Haiku 4.5 | `aicodewith-claude/claude-haiku-4-5-20251001` | 快速响应 |
| minimax | `minimax/MiniMax-M2.1` | 中文友好 |

## 🎯 当前状态

- ✅ Gateway 正在运行
- ✅ WhatsApp 已连接
- ✅ **默认模型已切换到：`aicodewith-claude/claude-sonnet-4-5-20250929`**

## 📱 WhatsApp 切换命令（更新）

### 切换到不同的 Claude 模型

```bash
# Claude Sonnet 4.5（当前默认）⭐
/config set agents.defaults.model.primary=aicodewith-claude/claude-sonnet-4-5-20250929

# Claude Opus 4.5（最强）
/config set agents.defaults.model.primary=aicodewith-claude/claude-opus-4-5-20251101

# Claude Opus 4.1
/config set agents.defaults.model.primary=aicodewith-claude/claude-opus-4-1-20251101

# Claude Haiku 4.5（最快）
/config set agents.defaults.model.primary=aicodewith-claude/claude-haiku-4-5-20251001

# 切换回 minimax
/config set agents.defaults.model.primary=minimax/MiniMax-M2.1
```

### 临时使用（推荐）

```bash
# 临时用 Claude（使用别名）
@claude 你的问题

# 临时用 minimax
@minimax 你的问题
```

## 🎯 现在就测试

### 方式 1：直接发送消息（使用默认的 Claude）

在 WhatsApp 中发送：

```
你好，请用中文介绍一下你自己
```

现在会使用 Claude Sonnet 4.5 回复！

### 方式 2：临时切换到 minimax

```
@minimax 你好，请介绍一下你自己
```

### 方式 3：查看当前模型

```
/config get agents.defaults.model.primary
```

应该返回：`aicodewith-claude/claude-sonnet-4-5-20250929`

## 💻 终端命令（更新）

```bash
# 切换到 Claude Sonnet 4.5
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5-20250929

# 切换到 Claude Opus 4.5
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-opus-4-5-20251101

# 切换回 minimax
pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1

# 查看当前模型
pnpm clawdbot config get agents.defaults.model.primary

# 查看所有可用模型
pnpm clawdbot models list
```

## 📊 模型对比

| 模型 | 速度 | 能力 | 适用场景 |
|------|------|------|---------|
| Claude Opus 4.5 | ⭐⭐ | ⭐⭐⭐⭐⭐ | 复杂推理、深度分析 |
| Claude Sonnet 4.5 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 日常编程、平衡使用 ⭐ |
| Claude Haiku 4.5 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | 快速响应、简单任务 |
| minimax | ⭐⭐⭐ | ⭐⭐⭐ | 中文对话 |

## 💡 使用建议

### 场景 1：重度编程（当前配置）
- **默认**：Claude Sonnet 4.5 ✅
- **复杂任务**：`@opus` 或切换到 Opus 4.5
- **中文聊天**：`@minimax`

### 场景 2：切换回 minimax 为默认
```
/config set agents.defaults.model.primary=minimax/MiniMax-M2.1
```
然后需要时：`@claude 写代码`

## ⚠️ 重要提示

1. **模型 ID 已更新**：使用正确的日期版本（如 `20250929`）
2. **别名仍然有效**：`@claude` 会使用 Claude Sonnet 4.5
3. **命令格式**：使用 `=` 连接，如 `path=value`

## 🎉 现在可以正常使用了！

在 WhatsApp 中发送任何消息，都会使用 Claude Sonnet 4.5 回复！

试试：
```
你好，请用中文介绍一下你自己
```

或者临时切换：
```
@minimax 你好
```

---

**一切就绪！享受使用 AICodewith 的强大模型吧！** 🚀
