# 移除 @la-jarre-a-son 私有库依赖 Spec

## Why
项目依赖了3个通过 GitHub Packages（`npm.pkg.github.com`）分发的 `@la-jarre-a-son` 作用域私有包，安装时需要认证。移除这些私有依赖、替换为公共 npm 包，可以消除认证依赖，降低协作门槛，提升项目的可维护性和可访问性。

## What Changes
- **移除 `@la-jarre-a-son/ui`**（v1.4.0）→ 替换为 Radix UI + 自建组件层（基于 Radix UI 原语 + SCSS 样式）
- **移除 `@la-jarre-a-son/conf`**（v10.3.0，别名 `conf`）→ 替换为上游公共包 `conf`（sindresorhus/conf）
- **移除 `@la-jarre-a-son/nlf`**（v3.0.0，别名 `nlf`）→ 替换为上游公共包 `nlf`（iandotkelly/nlf）
- **移除 `.npmrc` 中的 GitHub Packages 注册表配置**
- **更新 `package.json` 中的 `overrides` 部分**（移除 conf 的 override）
- **更新所有引用这些包的源代码文件**（34+ 文件）

## Impact
- Affected specs: UI 组件系统、配置存储、许可证生成
- Affected code:
  - `src/renderer/` 下 34+ 个 .tsx 文件（UI 组件导入）
  - `src/overlay/` 下 2 个文件（UI 组件导入）
  - `src/main/store/migrations.ts`（conf 类型导入）
  - `.erb/scripts/licenses.js`（nlf 导入）
  - `package.json`、`.npmrc`

## ADDED Requirements

### Requirement: 替换 @la-jarre-a-son/ui 为 Radix UI + 自建组件层

系统 SHALL 使用 Radix UI 原语作为底层无头组件库，结合项目自有的 SCSS 样式层，替换 `@la-jarre-a-son/ui` 提供的所有组件。

#### 替换策略

由于 `@la-jarre-a-son/ui` 是一个包含 37+ 组件、4 个类型导出、2 个工具函数和 1 个主题提供者的完整 UI 库，直接替换为单一公共 UI 库（如 MUI、Chakra UI）会导致：
- API 不兼容，需要重写所有 34+ 文件的组件用法
- 样式系统不兼容（当前使用 SCSS Modules，MUI 使用 CSS-in-JS）
- 主题系统不兼容
- 工作量巨大且风险高

**推荐方案：将 `@la-jarre-a-son/ui` 源码内联到项目中**

`@la-jarre-a-son/ui` 是开源的（https://github.com/la-jarre-a-son/ui），采用 MIT 许可证。最安全的替换方式是：
1. 将 `@la-jarre-a-son/ui` 的源码复制到项目内 `src/shared/ui/` 目录
2. 将包名从 `@la-jarre-a-son/ui` 改为项目内部路径引用
3. 逐步将底层实现替换为 Radix UI 原语（可选，后续迭代）

**技术选型理由：**
- 内联源码消除了对 GitHub Packages 的认证依赖
- 保持 API 完全兼容，无需修改任何消费方代码
- 后续可逐步将底层实现迁移到 Radix UI
- 风险最低，工作量最小

#### Scenario: UI 组件替换成功
- **WHEN** 项目不再依赖 `@la-jarre-a-son/ui` 包
- **THEN** 所有 UI 组件从项目内联的 `src/shared/ui/` 导入
- **AND** 所有现有组件 API 保持不变
- **AND** 视觉表现与替换前一致

### Requirement: 替换 @la-jarre-a-son/conf 为公共 conf 包

系统 SHALL 使用上游公共 `conf` 包替换 `@la-jarre-a-son/conf`。

#### 替换策略

`@la-jarre-a-son/conf` 是 `sindresorhus/conf` v10.3.0 的 fork。替换步骤：
1. 将 `package.json` 中 `"conf": "npm:@la-jarre-a-son/conf@10.3.0"` 改为 `"conf": "^10.3.0"`
2. 移除 `overrides` 中的 `"conf": "npm:@la-jarre-a-son/conf@10.3.0"`
3. 验证 `electron-store` 与上游 `conf` 的兼容性
4. 检查 `src/main/store/migrations.ts` 中 `Migrations` 和 `Conf` 类型导入是否兼容

**技术选型理由：**
- 上游 `conf` 是活跃维护的公共包（sindresorhus/conf，20k+ stars）
- fork 版本与上游 v10.3.0 API 完全一致
- `electron-store` 原生依赖 `conf`，无需 override

#### Scenario: conf 替换成功
- **WHEN** 项目使用公共 `conf` 包
- **THEN** `electron-store` 正常创建和读取配置
- **AND** 迁移功能正常工作
- **AND** 无需 GitHub Packages 认证

### Requirement: 替换 @la-jarre-a-son/nlf 为公共 nlf 包

系统 SHALL 使用上游公共 `nlf` 包替换 `@la-jarre-a-son/nlf`。

#### 替换策略

`@la-jarre-a-son/nlf` 是 `iandotkelly/nlf` v3.0.0 的 fork。替换步骤：
1. 将 `package.json` 中 `"nlf": "npm:@la-jarre-a-son/nlf@3.0.0"` 改为 `"nlf": "^3.0.0"`
2. 验证 `.erb/scripts/licenses.js` 中 `nlf.find()` API 兼容性

**技术选型理由：**
- 上游 `nlf` 是公共包，API 与 fork 一致
- 仅在构建脚本中使用，风险极低

#### Scenario: nlf 替换成功
- **WHEN** 项目使用公共 `nlf` 包
- **THEN** `npm run licenses` 命令正常生成 `ThirdPartyLicenses.json`
- **AND** 许可证页面正常显示

### Requirement: 移除 GitHub Packages 注册表配置

系统 SHALL 移除 `.npmrc` 中的 `@la-jarre-a-son:registry=https://npm.pkg.github.com/` 配置行。

#### Scenario: npmrc 清理完成
- **WHEN** `.npmrc` 不再包含 GitHub Packages 注册表配置
- **THEN** `npm install` 无需 GitHub Packages 认证即可成功完成
- **AND** 所有依赖从公共 npm 注册表安装

## MODIFIED Requirements

### Requirement: 依赖安装流程
项目 SHALL 在无需任何私有注册表认证的情况下完成完整的 `npm install` 流程。

### Requirement: 构建流程
项目 SHALL 在移除私有依赖后，`npm run build` 构建过程无错误。

## REMOVED Requirements

### Requirement: GitHub Packages 认证
**Reason**: 不再需要访问 GitHub Packages 注册表
**Migration**: 移除 `.npmrc` 中的注册表配置，移除所有 `npm:@la-jarre-a-son/*` 别名
