# Clawdbot Linux Desktop Launcher

Clawdbot 的 Linux 桌面启动器配置，支持通过应用菜单快速启动。

## 文件说明

- **`clawdbot.desktop`** - FreeDesktop 标准的桌面启动器配置文件
- **`clawdbot.desktop.example`** - 示例配置文件（包含完整注释）
- **`scripts/install-linux-desktop.sh`** - 自动安装脚本

## 快速安装

```bash
# 从仓库根目录运行安装脚本
./scripts/install-linux-desktop.sh
```

安装后，Clawdbot 将出现在您的应用程序菜单中（通常在"网络"或"开发"分类下）。

## 手动安装

如果您想手动安装：

```bash
# 1. 复制 desktop 文件
mkdir -p ~/.local/share/applications
cp clawdbot.desktop ~/.local/share/applications/
chmod +x ~/.local/share/applications/clawdbot.desktop

# 2. 安装图标（PNG 和 SVG）
mkdir -p ~/.local/share/icons/hicolor/512x512/apps
mkdir -p ~/.local/share/icons/hicolor/scalable/apps

cp apps/macos/Icon.icon/Assets/clawdbot-mac.png \
   ~/.local/share/icons/hicolor/512x512/apps/clawdbot.png

cp docs/assets/pixel-lobster.svg \
   ~/.local/share/icons/hicolor/scalable/apps/clawdbot.svg

# 3. 更新缓存
update-desktop-database ~/.local/share/applications
gtk-update-icon-cache -f -t ~/.local/share/icons/hicolor
```

## 功能特性

启动器提供以下快捷操作（右键菜单）：

1. **Open Dashboard** - 打开 Clawdbot 仪表板（默认操作）
2. **Start Gateway** - 在终端中启动网关服务
3. **Open CLI** - 在终端中打开 Clawdbot CLI
4. **Check Status** - 检查所有频道状态

## 系统要求

- Linux 桌面环境（GNOME、KDE、XFCE、Cinnamon 等）
- Node.js 22+ 和 npm/pnpm（用于运行 `npx clawdbot`）
- 支持 FreeDesktop 标准的桌面环境

## 配置说明

### 原始文件问题

您提供的原始 `.desktop` 文件存在以下问题：

```desktop
[Desktop Entry]
Type=Application
Name=MoltBot                    # ❌ 旧名称
Comment=Open MoltBot            # ❌ 旧名称
Exec=npx clawdbot dashboard     # ⚠️  缺少 bash -c 和工作目录
Terminal=false
Icon=/home/admin/.npm-global/lib/node_modules/clawdbot/docs/assets/pixel-lobster.svg  # ❌ 硬编码绝对路径
```

### 修复后的版本

```desktop
[Desktop Entry]
Version=1.0
Type=Application
Name=Clawdbot                   # ✓ 正确的品牌名称
GenericName=AI Agent Dashboard
Comment=Open Clawdbot Dashboard - Multi-channel AI agent platform
Exec=bash -c "cd ~ && npx clawdbot dashboard"  # ✓ 使用 bash -c 确保环境正确
Terminal=false
Icon=clawdbot                   # ✓ 使用图标名称而非绝对路径
Categories=Network;Chat;Utility;Development;
Keywords=ai;agent;chat;automation;dashboard;clawdbot;moltbot;
StartupNotify=true
StartupWMClass=clawdbot-dashboard
```

### 关键改进

1. **品牌名称**：从 `MoltBot` 更新为 `Clawdbot`
2. **执行命令**：使用 `bash -c "cd ~ && npx clawdbot dashboard"` 确保：
   - 在用户主目录执行（避免权限问题）
   - 正确加载 npm 环境变量
3. **图标路径**：使用 `Icon=clawdbot` 而非硬编码路径：
   - 系统会自动在标准图标目录中查找
   - 支持多种尺寸和格式（PNG、SVG）
   - 避免路径失效问题
4. **添加元数据**：分类、关键词、启动通知等

## 卸载

```bash
rm ~/.local/share/applications/clawdbot.desktop
rm ~/.local/share/icons/hicolor/512x512/apps/clawdbot.png
rm ~/.local/share/icons/hicolor/scalable/apps/clawdbot.svg
update-desktop-database ~/.local/share/applications
gtk-update-icon-cache -f -t ~/.local/share/icons/hicolor
```

## 故障排除

### 启动器不显示

1. 确认文件已复制到正确位置：
   ```bash
   ls -la ~/.local/share/applications/clawdbot.desktop
   ```

2. 检查文件权限：
   ```bash
   chmod +x ~/.local/share/applications/clawdbot.desktop
   ```

3. 更新桌面数据库：
   ```bash
   update-desktop-database ~/.local/share/applications
   ```

4. 注销并重新登录，或重启桌面环境

### 图标不显示

1. 确认图标文件存在：
   ```bash
   ls -la ~/.local/share/icons/hicolor/512x512/apps/clawdbot.png
   ls -la ~/.local/share/icons/hicolor/scalable/apps/clawdbot.svg
   ```

2. 更新图标缓存：
   ```bash
   gtk-update-icon-cache -f -t ~/.local/share/icons/hicolor
   ```

3. 如果仍然不显示，尝试使用绝对路径：
   ```bash
   # 编辑 ~/.local/share/applications/clawdbot.desktop
   # 将 Icon=clawdbot 改为：
   Icon=/home/YOUR_USERNAME/.local/share/icons/hicolor/512x512/apps/clawdbot.png
   ```

### Dashboard 无法启动

1. 检查 Node.js 和 npm 是否已安装：
   ```bash
   node --version
   npm --version
   npx --version
   ```

2. 测试命令是否能在终端中运行：
   ```bash
   cd ~ && npx clawdbot dashboard
   ```

3. 检查 PATH 环境变量：
   ```bash
   echo $PATH | grep -o "[^:]*npm[^:]*"
   ```

4. 如果使用全局安装的 clawdbot，修改 Exec 行：
   ```desktop
   Exec=bash -c "cd ~ && clawdbot dashboard"
   ```

### npx 命令未找到

如果系统找不到 `npx`，有以下解决方案：

1. **全局安装 clawdbot**：
   ```bash
   npm install -g clawdbot
   # 或
   pnpm install -g clawdbot
   ```

2. **修改 desktop 文件使用完整路径**：
   ```bash
   # 找到 npx 的完整路径
   which npx
   
   # 编辑 desktop 文件，使用完整路径
   Exec=bash -c "cd ~ && /usr/bin/npx clawdbot dashboard"
   ```

3. **使用 Node.js 直接运行**：
   ```bash
   # 如果已全局安装
   Exec=bash -c "cd ~ && clawdbot dashboard"
   ```

### 权限问题

如果遇到权限错误：

```bash
# 确保配置目录存在且有正确权限
mkdir -p ~/.clawdbot
chmod 755 ~/.clawdbot

# 检查 npm 全局目录权限
npm config get prefix
ls -la $(npm config get prefix)
```

## 自定义

您可以编辑 `~/.local/share/applications/clawdbot.desktop` 文件来自定义：

### 修改启动命令

```desktop
# 使用全局安装的 clawdbot
Exec=bash -c "cd ~ && clawdbot dashboard"

# 使用特定端口
Exec=bash -c "cd ~ && npx clawdbot dashboard --port 3001"

# 使用特定配置文件
Exec=bash -c "cd ~ && npx clawdbot dashboard --config /path/to/config.json"
```

### 修改图标

```desktop
# 使用系统图标
Icon=clawdbot

# 使用绝对路径
Icon=/home/username/.local/share/icons/hicolor/512x512/apps/clawdbot.png

# 使用其他系统图标
Icon=robot
Icon=applications-internet
```

### 修改分类

```desktop
# 仅显示在网络分类
Categories=Network;

# 显示在开发工具分类
Categories=Development;Utility;

# 显示在多个分类
Categories=Network;Chat;Development;Utility;
```

### 添加自定义操作

```desktop
[Desktop Action MyAction]
Name=My Custom Action
Exec=bash -c "npx clawdbot my-command"
```

### 完整示例

参考 `clawdbot.desktop.example` 文件查看完整的配置示例。

## 高级配置

### 使用特定 Node.js 版本

如果您使用 nvm 或其他 Node.js 版本管理器：

```desktop
Exec=bash -c "source ~/.nvm/nvm.sh && nvm use 22 && cd ~ && npx clawdbot dashboard"
```

### 设置环境变量

```desktop
Exec=bash -c "export NODE_ENV=production && cd ~ && npx clawdbot dashboard"
```

### 启用调试日志

```desktop
Exec=bash -c "cd ~ && DEBUG=clawdbot:* npx clawdbot dashboard 2>&1 | tee ~/clawdbot-debug.log"
```

## 相关文档

- [Clawdbot 安装指南](https://docs.clawd.bot/install)
- [配置文档](https://docs.clawd.bot/configuration)
- [FreeDesktop Desktop Entry 规范](https://specifications.freedesktop.org/desktop-entry-spec/latest/)

## 贡献

如果您发现问题或有改进建议，请在 GitHub 上提交 Issue 或 Pull Request：
https://github.com/clawdbot/clawdbot
