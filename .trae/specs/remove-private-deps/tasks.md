# Tasks

- [ ] Task 1: 替换 @la-jarre-a-son/conf 为公共 conf 包
  - [ ] SubTask 1.1: 修改 package.json，将 `"conf": "npm:@la-jarre-a-son/conf@10.3.0"` 改为 `"conf": "^10.3.0"`
  - [ ] SubTask 1.2: 移除 package.json 中 overrides 的 `"conf": "npm:@la-jarre-a-son/conf@10.3.0"`
  - [ ] SubTask 1.3: 验证 src/main/store/migrations.ts 中 Migrations 和 Conf 类型导入与公共 conf 包兼容
  - [ ] SubTask 1.4: 运行 npm install 验证安装成功

- [ ] Task 2: 替换 @la-jarre-a-son/nlf 为公共 nlf 包
  - [ ] SubTask 2.1: 修改 package.json，将 `"nlf": "npm:@la-jarre-a-son/nlf@3.0.0"` 改为 `"nlf": "^3.0.0"`
  - [ ] SubTask 2.2: 验证 .erb/scripts/licenses.js 中 nlf.find() API 兼容性
  - [ ] SubTask 2.3: 运行 npm run licenses 验证 ThirdPartyLicenses.json 生成正常

- [ ] Task 3: 内联 @la-jarre-a-son/ui 源码到项目
  - [ ] SubTask 3.1: 将 node_modules/@la-jarre-a-son/ui 的源码复制到 src/shared/ui/ 目录
  - [ ] SubTask 3.2: 修改 src/shared/ui/package.json，移除 @la-jarre-a-son 作用域
  - [ ] SubTask 3.3: 配置 webpack/TypeScript 别名，将 `@la-jarre-a-son/ui` 解析到 `src/shared/ui`
  - [ ] SubTask 3.4: 移除 package.json 中 `@la-jarre-a-son/ui` 依赖
  - [ ] SubTask 3.5: 验证所有 34+ 文件的 UI 组件导入正常工作
  - [ ] SubTask 3.6: 验证 overlay 进程的 UI 组件导入正常工作
  - [ ] SubTask 3.7: 验证 jar-ui-overrides.ts 中的组件补丁正常工作
  - [ ] SubTask 3.8: 验证 ThemeProvider 正常工作

- [ ] Task 4: 清理 GitHub Packages 配置
  - [ ] SubTask 4.1: 移除 .npmrc 中的 `@la-jarre-a-son:registry` 配置行
  - [ ] SubTask 4.2: 删除 node_modules 并重新运行 npm install，验证无需认证
  - [ ] SubTask 4.3: 确认 npm install 无依赖冲突或安装错误

- [ ] Task 5: 构建与类型检查验证
  - [ ] SubTask 5.1: 运行 npx tsc --noEmit 验证 TypeScript 编译无错误
  - [ ] SubTask 5.2: 运行 npm run build 验证构建成功
  - [ ] SubTask 5.3: 运行 ESLint 检查无新增错误

- [ ] Task 6: 运行时验证
  - [ ] SubTask 6.1: 启动开发服务器（npm start），验证应用正常启动
  - [ ] SubTask 6.2: 检查控制台无与依赖替换相关的错误或警告
  - [ ] SubTask 6.3: 验证核心功能（设置页面、和弦显示、和弦词典、和弦测验、五度圈、路由、调试器）正常工作

# Task Dependencies
- [Task 1] 和 [Task 2] 可并行执行
- [Task 3] 独立于 Task 1/2，可并行执行
- [Task 4] 依赖 [Task 1] [Task 2] [Task 3] 全部完成
- [Task 5] 依赖 [Task 4] 完成
- [Task 6] 依赖 [Task 5] 完成
