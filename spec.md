# MIDI Jar i18n (国际化) Specification

## 1. Overview

为 MIDI Jar 添加多语言支持（i18n），使用 JSON 格式语言文件实现国际化，将 UI 文本与核心代码库分离。首期提供英文（en）和简体中文（zh-CN）两种语言。

## 2. Technology Choice

### i18n Library: `react-i18next` + `i18next`

选择理由：
- React 生态中最流行、维护最活跃的 i18n 方案
- 原生支持 JSON 翻译文件
- 支持插值（interpolation）、复数、嵌套键
- 优秀的 TypeScript 支持
- 轻量级，适合 Electron 应用
- 与 React Hooks 完美集成（`useTranslation` hook）

### 不选择其他方案的理由：
- `react-intl` (FormatJS)：更重量级，API 更复杂，对本项目来说过度设计
- 自定义 Context + JSON：需要自行实现插值、语言切换、回退等功能，维护成本高

## 3. File Structure

```
src/
├── locales/
│   ├── i18n.ts              # i18next 初始化配置
│   ├── en.json              # 英文翻译（默认/回退语言）
│   └── zh-CN.json           # 简体中文翻译
├── renderer/
│   ├── contexts/
│   │   └── ...              # 现有 contexts
│   └── ...
├── main/
│   └── ...
└── overlay/
    └── ...
```

## 4. JSON Translation File Structure

翻译文件使用嵌套结构，按模块/页面组织，便于维护：

```json
{
  "common": {
    "cancel": "Cancel",
    "add": "Add",
    "delete": "Delete",
    "resetToDefaults": "Reset to Defaults",
    "settings": "Settings",
    "close": "Close",
    "error": "Error"
  },
  "nav": {
    "chordDisplay": "Chord Display",
    "circleOfFifths": "Circle of Fifths",
    "chordQuiz": "Chord Quiz",
    "chordDictionary": "Chord Dictionary",
    "routing": "Routing",
    "debugger": "Debugger"
  },
  "home": { ... },
  "chordDisplay": { ... },
  "chordQuiz": { ... },
  "chordDictionary": { ... },
  "circleOfFifths": { ... },
  "settings": {
    "general": { ... },
    "routing": { ... },
    "notation": { ... },
    "chordDictionary": { ... },
    "chordDisplay": { ... },
    "circleOfFifths": { ... },
    "chordQuiz": { ... },
    "debugger": { ... },
    "about": { ... },
    "licenses": { ... }
  },
  "layout": { ... },
  "overlay": { ... }
}
```

## 5. Settings Integration

### 新增语言设置

在 `GeneralSettings` 类型中添加 `language` 字段：

```typescript
export type GeneralSettings = {
  launchAtStartup: boolean;
  startMinimized: boolean;
  language: 'en' | 'zh-CN';
};
```

默认值：`'en'`（首次启动时可通过系统语言检测自动设置）

### 语言选择器

在 General Settings 页面添加语言选择下拉框，位于 "Startup" 字段组之前或之后。

### 语言持久化

语言偏好通过 `electron-store` 持久化存储，与现有设置管理机制一致。

### 系统语言检测

首次启动时（无已保存的语言设置），自动检测系统语言：
- 如果系统语言为中文（zh-CN, zh-Hans, zh-Hans-CN 等），默认使用 zh-CN
- 其他情况默认使用 en

## 6. i18n Initialization

### Renderer Process

在 `App.tsx` 中，在 `ThemeProvider` 之前初始化 i18next：

```typescript
import './locales/i18n';
```

`i18n.ts` 配置：
- 默认语言：从 settings 读取，回退到 `'en'`
- 回退语言：`'en'`
- 插值格式：`{{ variable }}`
- 命名空间：默认 `'translation'`
- 资源：直接 import JSON 文件（webpack 原生支持）

### Overlay Process

同样在 `overlay/App.tsx` 中初始化 i18next。Overlay 通过 WebSocket 接收设置，语言应与主应用同步。

### Main Process (Electron Menu)

主进程的菜单（`menu.ts`）和托盘（`main.ts`）中的字符串也需要国际化。方案：
- 主进程通过 IPC 从 renderer 获取当前语言设置
- 或在主进程中独立初始化 i18next（使用相同的 JSON 文件）
- 选择方案：在主进程中独立初始化 i18next，通过 IPC 同步语言变更

## 7. Migration Strategy

### 渐进式重构

按模块逐步替换硬编码字符串，确保每个模块替换后功能正常：

1. **Phase 1 - 基础设施**：安装依赖、创建 i18n 配置、创建 JSON 文件骨架
2. **Phase 2 - 核心导航**：路由、布局、首页、设置导航
3. **Phase 3 - 设置页面**：所有设置子页面
4. **Phase 4 - 功能模块**：Chord Display、Chord Quiz、Circle of Fifths、Chord Dictionary
5. **Phase 5 - 主进程**：Electron 菜单、托盘
6. **Phase 6 - Overlay**：覆盖层页面
7. **Phase 7 - 中文翻译**：完整翻译 zh-CN.json

## 8. Translation Guidelines (zh-CN)

### 音乐理论术语标准

| English | 中文 | 说明 |
|---------|------|------|
| Chord | 和弦 | |
| Interval | 音程 | |
| Mode | 调式 | |
| Scale | 音阶 | |
| Key | 调 | 如 "Key of C" = "C调" |
| Note | 音符 | |
| Pitch | 音高 | |
| Octave | 八度 | |
| Major | 大调/大和弦 | 视上下文 |
| Minor | 小调/小和弦 | 视上下文 |
| Dominant | 属 | 如 Dominant 7th = 属七 |
| Diminished | 减 | 如 Diminished 5th = 减五度 |
| Augmented | 增 | 如 Augmented 5th = 增五度 |
| Suspended | 挂留 | 如 Sus4 = 挂留四度 |
| Inversion | 转位 | |
| Tonic | 主音 | |
| Supertonic | 上主音 | |
| Mediant | 中音 | |
| Subdominant | 下属音 | |
| Dominant (degree) | 属音 | |
| Submediant | 下中音 | |
| Leading Tone | 导音 | |
| Ionian | 伊奥尼亚调式 | |
| Dorian | 多利亚调式 | |
| Phrygian | 弗里几亚调式 | |
| Lydian | 利底亚调式 | |
| Mixolydian | 混合利底亚调式 | |
| Aeolian | 伊奥利亚调式 | |
| Locrian | 洛克里亚调式 | |
| Circle of Fifths | 五度圈 | |
| Notation | 记谱法 | |
| Clef | 谱号 | |
| Staff | 谱表 | |
| Sharp | 升号 | ♯ |
| Flat | 降号 | ♭ |

### 难度等级翻译

| English | 中文 |
|---------|------|
| Very Easy | 非常简单 |
| Easy | 简单 |
| Medium | 中等 |
| Hard | 困难 |
| Very Hard | 非常困难 |
| All chords | 所有和弦 |

### Quiz 反应翻译

反应文本应保持趣味性和自然感，同时符合中文表达习惯。

## 9. Scope

### In Scope
- 所有 renderer 进程中的 UI 文本
- 主进程 Electron 菜单和托盘文本
- Overlay 进程中的 UI 文本
- 音乐理论术语的中文翻译
- 语言设置持久化
- 系统语言自动检测

### Out of Scope
- 繁体中文（zh-TW）翻译（可后续添加）
- 第三方库（@la-jarre-a-son/ui）的内部文本
- 调试器中的 MIDI 命令/CC 名称（这些是 MIDI 协议标准术语，通常不翻译）
- 音符名称（C, D, E...）和和弦符号（这些是国际通用记号）
- 代码注释
- 开发者错误消息（throw new Error 中的消息）

## 10. Dependencies to Install

```bash
npm install i18next react-i18next
```

无需安装 i18next-browser-languagedetector，因为语言检测将通过 electron-store 设置和 `app.getLocale()` 实现。

## 11. Key Implementation Patterns

### 使用 useTranslation Hook

```typescript
import { useTranslation } from 'react-i18next';

const MyComponent: React.FC = () => {
  const { t } = useTranslation();
  return <h1>{t('nav.chordDisplay')}</h1>;
};
```

### 带插值的翻译

```typescript
// en.json: { "chordDisplay": "Chord Display ({{moduleId}})" }
// zh-CN.json: { "chordDisplay": "和弦显示 ({{moduleId}})" }
t('nav.chordDisplayWithId', { moduleId: params.moduleId })
```

### 语言切换

```typescript
import i18n from './locales/i18n';

i18n.changeLanguage('zh-CN');
```

### 在非 React 代码中使用

```typescript
import i18n from './locales/i18n';

const label = i18n.t('common.settings');
```
