# AICodewith 插件使用指南

## 插件已成功创建并启用！

插件位置：`extensions/clawdbot-aicodewith-auth/`

## 当前状态

✅ 插件已启用
✅ Gateway 正在运行
✅ 默认模型保持为 minimax/MiniMax-M2.1

## 使用方法

### 1. 配置 AICodewith Claude 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-claude
```

输入你的 AICodewith API Key 后，Claude 模型将被添加到配置中。

### 2. 配置 AICodewith OpenAI 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-openai
```

### 3. 配置 AICodewith Gemini 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-gemini
```

### 4. 配置 AICodewith Antigravity 模型

```bash
pnpm clawdbot models auth login --provider aicodewith-antigravity
```

## 切换模型

配置完成后，你可以随时切换模型：

```bash
# 切换到 Claude Sonnet 4.5
pnpm clawdbot config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换到 GPT-4o
pnpm clawdbot config set agents.defaults.model.primary aicodewith-openai/gpt-4o

# 切换到 Gemini 2.0 Flash
pnpm clawdbot config set agents.defaults.model.primary aicodewith-gemini/gemini-2.0-flash-exp

# 切换到 Antigravity Claude Opus
pnpm clawdbot config set agents.defaults.model.primary aicodewith-antigravity/claude-opus-4-5-thinking

# 切换回 minimax
pnpm clawdbot config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

## 查看可用模型

```bash
pnpm clawdbot models list | grep aicodewith
```

## 支持的所有模型

### AICodewith Claude
- aicodewith-claude/claude-opus-4-5-thinking
- aicodewith-claude/claude-opus-4-5
- aicodewith-claude/claude-sonnet-4-5
- aicodewith-claude/claude-sonnet-4
- aicodewith-claude/claude-3-5-sonnet-20241022
- aicodewith-claude/claude-3-5-haiku-20241022

### AICodewith OpenAI
- aicodewith-openai/o1
- aicodewith-openai/o1-mini
- aicodewith-openai/o3-mini
- aicodewith-openai/gpt-4o
- aicodewith-openai/gpt-4o-mini

### AICodewith Gemini
- aicodewith-gemini/gemini-2.0-flash-thinking-exp-01-21
- aicodewith-gemini/gemini-2.0-flash-exp
- aicodewith-gemini/gemini-exp-1206
- aicodewith-gemini/gemini-1.5-pro-002
- aicodewith-gemini/gemini-1.5-flash-002

### AICodewith Antigravity
- aicodewith-antigravity/claude-opus-4-5-thinking
- aicodewith-antigravity/claude-opus-4-5
- aicodewith-antigravity/claude-sonnet-4-5
- aicodewith-antigravity/claude-sonnet-4
- aicodewith-antigravity/gemini-2.0-flash-thinking-exp-01-21
- aicodewith-antigravity/gemini-2.0-flash-exp
- aicodewith-antigravity/gemini-exp-1206

## 注意事项

1. **默认模型不会改变**：配置 AICodewith 后，你的默认模型（minimax）会保持不变，需要手动切换。

2. **API Key**：所有 AICodewith 提供商使用相同的 API Key。

3. **重启 Gateway**：配置完成后，如果 gateway 正在运行，建议重启以确保配置生效：
   ```bash
   pkill -9 -f clawdbot-gateway
   pnpm clawdbot gateway run --bind loopback --port 18789 --force > /tmp/clawdbot-gateway.log 2>&1 &
   ```

## 相关链接

- AICodewith 官网: https://aicodewith.com
- 文档: https://docs.aicodewith.com/docs/openclaw
