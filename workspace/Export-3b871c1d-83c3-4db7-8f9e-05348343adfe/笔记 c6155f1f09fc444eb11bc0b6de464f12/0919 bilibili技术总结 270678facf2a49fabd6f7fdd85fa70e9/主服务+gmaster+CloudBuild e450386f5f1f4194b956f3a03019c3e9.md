# 主服务+gmaster+CloudBuild

项目采用了pnpm包管理器的模块化方式的组织代码结构，涉及到 Docker 部署、文档生成、多环境运行配置以及多个子模块的开发。有助于组织和维护大型项目。

```bash
├── CHANGELOG.md
├── Makefile
├── README.md
├── config
│   ├── config.ts
│   ├── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── typing.d.ts
├── dist
├── docker
│   ├── Dockerfile
│   └── docker-compose.yml
├── docs
│   ├── docs
│   ├── docsearch.config.json
│   ├── docusaurus.config.js
│   ├── modules
│   ├── package.json
│   ├── plugins
│   ├── src
│   ├── static
│   └── tsconfig.ui-kit.json
├── package.json
├── packages
│   ├── cloud-build
│   ├── components
│   ├── gaming-services
│   ├── gmaster
│   └── marketplace
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
```

1. **根目录：**
    - `CHANGELOG.md`：项目的变更日志，记录了每个版本的更改。
    - `Makefile`：项目构建和自动化任务的 Makefile 文件。
    - `README.md`：项目的描述、安装说明、启动指南和关键技术。
    - `config` 文件夹：项目运行(dev、uat、prod)配置文件和类型定义。
    - `docker` 文件夹：项目部署文件配置。
    - `docs` 文件夹：通过Docusaurus生成的静态文档站点，作用是用户使用文档。
    - `dist` 文件夹：包含构建后的项目文件（例如编译后的代码或构建产物）。
2. **packages ：**
    - 包含了项目的不同模块或组件，每个子文件夹都是一个独立的子项目。
    - `gaming-services` 文件夹：乾坤主服务，用于加载子服务、全局状态、用户管理和权限控制。
    - `cloud-build` 文件夹：云构建服务，为工作室提供远程打包能力。
        - 构建游戏不同的平台运行的客户端应用程序，如iOS、Android、Windows、macOS
        - 提供灵活的构建配置选项，以便开发团队可以自定义构建流程，包括编译代码、打包资源、生成可执行文件
        - 提供签名游戏客户端的功能，支持证书管理，包括证书的创建、导入和更新。
        - 记录构建历史，以便开发团队可以查看每个构建的状态和输出。提供详细的构建日志，以便排查问题
        - 允许配置通知和警报，以便在构建、签名或部署失败时及时通知开发团队
    - `gmaster` 文件夹：gm服务。
        - 通过低代码为gm开发人员提供研发、测试、发布的web应用的能力
        - 为游戏运营提供多区多环境的管理能力，例如：邮件、公告、兑换码、游戏物品、任务、活动等
        - 为游戏运营提供查看日志埋点
        - 提供丰富的统计和分析工具，用于跟踪游戏的关键性能指标（KPIs），如用户活跃度、收入、留存率等
    - `components` 文件夹：公共包，包含 monoca、虚拟化列表、file-icon、公共组件
3. **package.json、pnpm-lock.yaml** 和 **pnpm-workspace.yaml**：是使用 pnpm 包管理器的项目文件，用于管理依赖项。