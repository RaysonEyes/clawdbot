# 🚀 模型切换速查卡

## 最常用的命令（WhatsApp）

### 永久切换

```bash
# 切换到 Claude（推荐用于编程）
/config set agents.defaults.model.primary aicodewith-claude/claude-sonnet-4-5

# 切换回 minimax
/config set agents.defaults.model.primary minimax/MiniMax-M2.1
```

### 临时使用（不改变默认）

```bash
# 临时用 Claude
@claude 你的问题

# 临时用 minimax
@minimax 你的问题
```

### 查看当前模型

```bash
/status
```

或

```bash
/config get agents.defaults.model.primary
```

---

## 📋 所有可用模型

| 模型名称 | 别名 | 特点 |
|---------|------|------|
| `aicodewith-claude/claude-sonnet-4-5` | `@claude` | 平衡性能，推荐 ⭐ |
| `aicodewith-claude/claude-opus-4-5-thinking` | - | 最强思考模型 |
| `aicodewith-claude/claude-sonnet-4` | - | 快速响应 |
| `minimax/MiniMax-M2.1` | `@minimax` | 中文友好 |

---

## 💡 使用建议

### 场景 1：日常使用
- **默认**：minimax
- **编程时**：`@claude 写代码`

### 场景 2：重度编程
- **默认**：claude-sonnet-4-5
- **中文聊天时**：`@minimax 聊天`

---

## 🔍 验证切换

发送消息后查看回复，或者：

```bash
/config get agents.defaults.model.primary
```

---

**完整文档**：`MODEL_SWITCHING_GUIDE.md`
