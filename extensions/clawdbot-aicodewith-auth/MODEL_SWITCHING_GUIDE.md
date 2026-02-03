# 🔄 模型切换完整指南

## 📱 方式 1：通过 WhatsApp 切换（最方便）⭐

### 永久切换默认模型

```bash
# 切换到 AICodewith Claude Sonnet 4.5
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 AICodewith Claude Opus (最强思考模型)
/config set agents.defaults.model.primary aicodewith-claude/claude-opus-4-5-thinking

# 切换到 AICodewith Claude Sonnet 4
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4

# 切换回 minimax
/config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

### 临时使用其他模型（不改变默认设置）

在消息前加 `@模型别名`：

```bash
# 使用 Claude（临时）
@claude 帮我写一个 Python 函数

# 使用 minimax（临时）
@minimax 解释这段代码

# 使用完整模型名
@aicodewith-claude/claude-opus-4-5-thinking 解决这个复杂问题
```

### 查看当前默认模型

```bash
/config get agents.defaults.model.primary
```

或者：

```bash
/status
```

## 💻 方式 2：通过终端命令切换

### 永久切换

```bash
# 切换到 Claude Sonnet 4.5
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 Claude Opus (最强)
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-opus-4-5-thinking

# 切换回 minimax
pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

### 查看当前模型

```bash
pnpm clawdbot config get agents.defaults.model.primary
```

### 查看所有可用模型

```bash
pnpm clawdbot models list
```

## 📝 方式 3：直接编辑配置文件

编辑 `~/.clawdbot/clawdbot.json`：

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "aicodewith-claude/claude-sonnet-4-5"
      }
    }
  }
}
```

保存后重启 gateway：

```bash
pkill -9 -f clawdbot-gateway
pnpm clawdbot gateway run --bind loopback --port 18789 --force > /tmp/clawdbot-gateway.log 2>&1 &
```

## 🎯 快速切换命令速查表

### WhatsApp 命令

| 目标模型 | 命令 |
|---------|------|
| Claude Sonnet 4.5 | `/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5` |
| Claude Opus (最强) | `/config set agents.defaults.model.primary aicodewith-claude/claude-opus-4-5-thinking` |
| Claude Sonnet 4 | `/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4` |
| minimax | `/config set agents.defaults.model.primary minimax/MiniMax-M2.1` |

### 临时使用（不改变默认）

| 模型 | 使用方式 |
|------|---------|
| Claude | `@claude 你的问题` |
| minimax | `@minimax 你的问题` |
| 完整名称 | `@aicodewith-claude/claude-sonnet-4-5 你的问题` |

## 💡 使用技巧

### 1. 根据任务选择模型

```bash
# 复杂推理任务 → Claude Opus Thinking
@aicodewith-claude/claude-opus-4-5-thinking 分析这个复杂的算法

# 日常编程任务 → Claude Sonnet 4.5（推荐）
@claude 帮我写一个函数

# 快速响应 → Claude Sonnet 4
@aicodewith-claude/claude-sonnet-4 快速回答这个问题

# 中文对话 → minimax（可能更好）
@minimax 用中文聊天
```

### 2. 混合使用多个模型

你可以在同一个对话中使用不同的模型：

```
# 第一条消息用 Claude
@claude 帮我设计一个算法

# 第二条消息用 minimax
@minimax 用中文解释一下这个算法

# 第三条消息用默认模型（不加前缀）
继续优化这个算法
```

### 3. 查看模型别名

```bash
pnpm clawdbot models list
```

输出中的 `alias:` 列显示了可用的别名：
- `alias:claude` → 可以用 `@claude`
- `alias:minimax` → 可以用 `@minimax`（如果配置了）

## 🔍 验证切换是否成功

### 方法 1：查看配置

```bash
# WhatsApp
/config get agents.defaults.model.primary

# 终端
pnpm clawdbot config get agents.defaults.model.primary
```

### 方法 2：查看 gateway 日志

```bash
tail -f /tmp/clawdbot-gateway.log | grep "agent model"
```

输出示例：
```
[gateway] agent model: aicodewith-claude/claude-sonnet-4-5
```

### 方法 3：发送测试消息

在 WhatsApp 中发送：
```
你好，请告诉我你是什么模型
```

## ⚠️ 注意事项

1. **切换后立即生效**：通过 `/config set` 命令切换后，下一条消息就会使用新模型

2. **临时使用不影响默认**：使用 `@模型名` 只影响当前消息，不改变默认设置

3. **重启 gateway 后保持**：配置会保存到文件，重启后仍然有效

4. **模型别名**：
   - `@claude` = `@aicodewith-claude/claude-sonnet-4-5`
   - 使用别名更方便

## 📊 当前可用模型

```bash
pnpm clawdbot models list
```

输出：
```
Model                                      Input      Ctx      Local Auth  Tags
minimax/MiniMax-M2.1                       text       195k     no    yes   default,configured
aicodewith-claude/claude-sonnet-4-5        text+image 195k     no    yes   configured,alias:claude
aicodewith-claude/claude-opus-4-5-thinking text+image 195k     no    yes   configured
aicodewith-claude/claude-sonnet-4          text+image 195k     no    yes   configured
```

## 🎯 推荐使用场景

### 日常使用（推荐）

保持 minimax 为默认，需要时临时使用 Claude：

```bash
# 默认使用 minimax
你好

# 需要强大能力时临时用 Claude
@claude 帮我写一个复杂的算法
```

### 重度编程（推荐）

切换到 Claude 作为默认：

```bash
# WhatsApp
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 之后所有消息都用 Claude
帮我写代码

# 偶尔需要 minimax 时
@minimax 用中文聊天
```

## 🔄 快速切换脚本

创建快速切换脚本（可选）：

```bash
# 切换到 Claude
alias use-claude='pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5'

# 切换到 minimax
alias use-minimax='pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1'

# 使用
use-claude
use-minimax
```

## 📚 相关文档

- [快速参考](./QUICK_REFERENCE.md) - 常用命令
- [配置指南](./CONFIGURATION_GUIDE.md) - 详细配置
- [启动指南](./STARTUP_GUIDE.md) - 系统启动

---

**💡 提示**：推荐使用 WhatsApp 的 `/config set` 命令切换，最方便且立即生效！
