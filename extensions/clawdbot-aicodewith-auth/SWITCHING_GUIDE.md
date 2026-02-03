# 切换 Provider 的多种方式

你可以通过以下几种方式切换 AI 模型提供商，不仅限于终端命令。

## 方式 1：通过 Mac 应用（最简单）

1. 打开 Clawdbot Mac 应用（菜单栏图标）
2. 点击菜单栏图标 → Settings/Preferences
3. 在设置界面中找到 "Model" 或 "AI Provider" 选项
4. 从下拉菜单中选择你想要的模型

## 方式 2：通过 Web UI

1. 在浏览器中打开：`http://127.0.0.1:18789/__clawdbot__/canvas/`
2. 查找设置或配置选项
3. 选择你想要的模型提供商

## 方式 3：通过 WhatsApp 消息（最方便）⭐

由于你已经配置了 WhatsApp 频道，可以直接发送命令：

### 查看当前状态
```
/status
```

### 使用 /config 命令切换模型
```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 查看当前模型
```
/config get agents.defaults.model.primary
```

### 查看所有可用命令
```
/help
```
或
```
/commands
```

## 方式 4：通过终端命令

```bash
# 切换到 Claude
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 GPT
pnpm clawdbot config set agents.defaults.model.primary aicodewith-openai/gpt-4o

# 切换到 Gemini
pnpm clawdbot config set agents.defaults.model.primary aicodewith-gemini/gemini-2.0-flash-exp

# 切换到 Antigravity
pnpm clawdbot config set agents.defaults.model.primary aicodewith-antigravity/claude-opus-4-5-thinking

# 切换回 minimax
pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

## 方式 5：直接编辑配置文件

编辑 `~/.clawdbot/clawdbot.json` 文件：

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

## 方式 6：通过 Telegram（如果配置了）

如果你配置了 Telegram 频道，可以发送：

```
/model set aicodewith-claude/claude-sonnet-4-5
```

## 推荐方式 ⭐

**最方便的方式是通过 WhatsApp 发送 `/config` 命令**，因为你已经配置好了 WhatsApp 频道：

### 快速切换模型

1. 打开与 Clawdbot 的 WhatsApp 对话
2. 发送以下命令切换模型：

```
# 切换到 Claude Sonnet 4.5
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 GPT-4o
/config set agents.defaults.model.primary aicodewith-openai/gpt-4o

# 切换到 Gemini
/config set agents.defaults.model.primary aicodewith-gemini/gemini-2.0-flash-exp

# 切换到 Antigravity
/config set agents.defaults.model.primary aicodewith-antigravity/claude-opus-4-5-thinking

# 切换回 minimax
/config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

### 查看当前使用的模型

通过 WhatsApp 发送：
```
/status
```

或者查看具体配置：
```
/config get agents.defaults.model.primary
```

或者终端命令：
```bash
pnpm clawdbot config get agents.defaults.model.primary
```

## 临时使用不同的模型（不改变默认设置）

在 WhatsApp 中，你可以在消息前加上 `@模型名称` 来临时使用指定模型：

```
@claude-sonnet-4-5 帮我写一个 Python 函数
```

或者：

```
@gpt-4o 解释一下这段代码
```

或者使用别名：

```
@claude 帮我分析这段代码
@gpt 写一个排序算法
@gemini 翻译这段文字
@antigravity 解决这个复杂问题
```

这样就不需要改变默认模型，只是临时使用指定的模型。

## 注意事项

1. **配置后需要重启 gateway**：如果通过编辑配置文件修改，需要重启 gateway 才能生效
2. **通过命令或 UI 修改**：通常会自动生效，不需要手动重启
3. **WhatsApp 命令最方便**：推荐使用 WhatsApp 命令，实时生效且无需重启
