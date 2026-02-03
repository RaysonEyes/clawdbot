# Clawdbot 启动指南

## ✅ 当前状态

你的 Clawdbot 系统已经在运行！

- ✅ Gateway 正在运行（端口 18789）
- ✅ WhatsApp 已连接
- ✅ Mac 应用正在运行
- ✅ AICodewith 插件已启用

## 🚀 如何使用

### 方式 1：通过 WhatsApp（推荐）

直接在 WhatsApp 中与 Clawdbot 对话：

1. 打开 WhatsApp
2. 找到你的 Clawdbot 对话（号码：+61499208999）
3. 发送消息即可开始对话

**常用命令：**
```
/status                    # 查看状态
/help                      # 查看帮助
/commands                  # 查看所有命令
```

**切换模型：**
```
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5
```

### 方式 2：通过 Mac 应用

点击菜单栏的 Clawdbot 图标，可以：
- 查看状态
- 修改设置
- 重启 gateway

### 方式 3：通过 Web UI

在浏览器中打开：
```
http://127.0.0.1:18789/__clawdbot__/canvas/
```

### 方式 4：通过终端命令

```bash
# 发送消息
pnpm clawdbot message send --target whatsapp:+61499208999 "你好"

# 查看状态
pnpm clawdbot channels status --probe

# 查看模型列表
pnpm clawdbot models list
```

## 🔄 如何重启

### 重启 Gateway

如果需要重启 gateway（例如修改配置后）：

```bash
# 停止 gateway
pkill -9 -f clawdbot-gateway

# 启动 gateway
pnpm clawdbot gateway run --bind loopback --port 18789 --force > /tmp/clawdbot-gateway.log 2>&1 &
```

或者使用脚本：
```bash
./scripts/restart-mac.sh
```

### 通过 Mac 应用重启

1. 点击菜单栏的 Clawdbot 图标
2. 选择 "Restart Gateway" 或类似选项

## 📊 检查状态

### 检查 Gateway 是否运行

```bash
lsof -i :18789
```

如果看到输出，说明 gateway 正在运行。

### 检查 WhatsApp 连接状态

```bash
pnpm clawdbot channels status --probe
```

应该看到：
```
Gateway reachable.
- WhatsApp default: enabled, configured, linked, running, connected
```

### 查看日志

```bash
tail -f /tmp/clawdbot-gateway.log
```

或者查看历史日志：
```bash
ls -la /tmp/clawdbot/
cat /tmp/clawdbot/clawdbot-2026-01-30.log
```

## 🛠️ 常见问题

### Gateway 没有运行

启动 gateway：
```bash
pnpm clawdbot gateway run --bind loopback --port 18789 --force > /tmp/clawdbot-gateway.log 2>&1 &
```

### WhatsApp 未连接

重新链接 WhatsApp：
```bash
pnpm clawdbot channels login --channel whatsapp --account default
```

扫描二维码后即可连接。

### 端口被占用

检查是否有其他进程占用端口：
```bash
lsof -i :18789
```

如果有，停止旧进程：
```bash
pkill -9 -f clawdbot-gateway
```

### 配置 AICodewith

如果还没有配置 AICodewith，运行：
```bash
pnpm clawdbot models auth login --provider aicodewith-claude
```

输入你的 AICodewith API Key。

## 📱 快速测试

在 WhatsApp 中发送：
```
你好，请介绍一下你自己
```

如果收到回复，说明一切正常！

## 🔧 完整启动流程（从零开始）

如果系统完全停止，按以下步骤启动：

### 1. 启动 Gateway

```bash
cd /Users/oscargogogo/Documents/GitHub/clawdbot
pnpm clawdbot gateway run --bind loopback --port 18789 --force > /tmp/clawdbot-gateway.log 2>&1 &
```

### 2. 等待启动完成（约 5 秒）

```bash
sleep 5
lsof -i :18789
```

### 3. 检查状态

```bash
pnpm clawdbot channels status --probe
```

### 4. 如果 WhatsApp 未连接，重新链接

```bash
pnpm clawdbot channels login --channel whatsapp --account default
```

### 5. 开始使用

在 WhatsApp 中发送消息即可！

## 📚 相关文档

- 快速参考：`extensions/clawdbot-aicodewith-auth/QUICK_REFERENCE.md`
- 切换指南：`extensions/clawdbot-aicodewith-auth/SWITCHING_GUIDE.md`
- 使用说明：`extensions/clawdbot-aicodewith-auth/USAGE.md`

## 💡 提示

1. **保持 Gateway 运行**：Gateway 必须一直运行才能接收和发送消息
2. **Mac 应用自动启动**：如果配置了开机启动，Mac 应用会自动启动 Gateway
3. **查看日志排查问题**：遇到问题时，先查看日志文件
4. **使用 WhatsApp 最方便**：推荐通过 WhatsApp 与 Clawdbot 交互

## 🎯 现在就开始！

你的系统已经在运行，直接在 WhatsApp 中发送消息即可开始使用！

试试发送：
```
/status
```

查看当前状态。
