# ✅ /config 命令已启用！

## 🎉 现在可以使用了

### 在 WhatsApp 中切换模型

```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 切换回 minimax

```
/config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

### 查看当前模型

```
/config get agents.defaults.model.primary
```

## 📱 WhatsApp 可用命令

### 配置命令

```bash
# 设置配置
/config set <路径> <值>

# 获取配置
/config get <路径>

# 删除配置
/config unset <路径>
```

### 状态命令

```bash
# 查看状态
/status

# 查看帮助
/help

# 查看所有命令
/commands

# 查看身份
/whoami
```

### 模型切换

```bash
# 切换到 Claude Sonnet 4.5
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 Claude Opus (最强)
/config set agents.defaults.model.primary aicodewith-claude/claude-opus-4-5-thinking

# 切换到 Claude Sonnet 4
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4

# 切换回 minimax
/config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

## 💡 临时使用模型（推荐）

如果你不想改变默认模型，可以临时使用：

```bash
# 临时用 Claude
@claude 帮我写代码

# 临时用 minimax
@minimax 用中文聊天

# 下一条消息用默认模型
继续聊天
```

## 🎯 现在就试试！

在 WhatsApp 中发送以下任意一条：

### 方式 1：临时使用 Claude（推荐）

```
@claude 你好，请用中文介绍一下你自己
```

### 方式 2：永久切换到 Claude

```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

然后发送：

```
你好，请用中文介绍一下你自己
```

### 方式 3：查看当前状态

```
/status
```

## 📊 验证切换

发送以下命令查看当前使用的模型：

```
/config get agents.defaults.model.primary
```

应该返回：
- `minimax/MiniMax-M2.1` （如果是 minimax）
- `aicodewith-claude/claude-sonnet-4-5` （如果是 Claude）

## ⚠️ 注意事项

1. **命令立即生效**：发送 `/config set` 后，下一条消息就会使用新模型
2. **无需重启**：配置会自动保存并应用
3. **临时使用更灵活**：推荐使用 `@claude` 或 `@minimax` 临时切换

## 🔧 如果命令不工作

如果 `/config` 命令仍然不工作，可以通过终端切换：

```bash
# 切换到 Claude
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换回 minimax
pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

---

**现在一切就绪！在 WhatsApp 中试试吧！** 🚀
