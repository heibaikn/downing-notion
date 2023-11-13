# 1025 使用 Changeset/CLI 发布npm包

当使用 `changeset/cli` 来发布 npm 包时，以下是详细的技术文档，包括安装 `changeset/cli`，管理版本和生成 changelog，以及解决常见问题。

# 使用 Changeset/CLI 发布 npm 包

在 Node.js 生态系统中，使用 Changeset/CLI 工具可以更轻松地管理版本发布，生成 changelog 并支持私有包和组织的发布。这篇文档将介绍如何使用 Changeset/CLI 来发布 npm 包，同时解决可能出现的一些常见问题。

## 安装 Changeset/CLI并初始化

首先，你需要安装 `changeset/cli` 工具。

```bash
npnpm install @changesets/cli -wD

pnpm changeset init
```

这时候会在根目录生成`.changeset` 文件夹，里面有`confi.json`配置文件。

## 使用 `changeset add` 和 `changeset version` 管理版本和生成 Changelog

Changeset 允许你更轻松地管理版本和生成 changelog。下面是使用 `changeset` 命令的基本流程：

### 步骤 1: 添加新更改集

运行以下命令来创建一个新更改集：

```bash
npx changeset add

```

此命令将引导你选择要包括在更改集中的包、类型（例如 `feat`、`fix` 等）以及更改的描述。这将生成一个新的更改集文件，以便进行版本化和生成 changelog。

### 步骤 2: 版本化更改集

使用以下命令来版本化更改集：

```bash
npx changeset version

```

这将根据更改集内容自动更新包的版本号，并生成 changelog。更改集文件将被更新以包含版本化信息。

## 使用 `changeset publish` 发布 npm 包

一旦你的更改集版本化完成，你可以使用 `changeset publish` 命令将包发布到 npm。运行以下命令：

```bash
npx changeset publish

```

这将发布包到 npm，并确保 changelog 包含最新的更改信息。

## 解决常见问题

在使用 Changeset/CLI 过程中，你可能会遇到一些常见问题。以下是解决这些问题的步骤：

### 问题 1: 忽略私有包的发布

如果你有私有包不希望被发布，可以在包的 `package.json` 文件中设置 `private: true` 属性。这将阻止该包被发布到 npm。

```json
{
  "name": "my-private-package",
  "version": "1.0.0",
  "private": true
}

```

### 问题 2: 将包发送到 npm 作为共有包 fix:402

如果你想将包作为共有包发送到 npm，可以在包的 `package.json` 文件中设置 `publishConfig.access` 属性为 `public`。这将确保包是公开可访问的。

![Untitled](1025%20%E4%BD%BF%E7%94%A8%20Changeset%20CLI%20%E5%8F%91%E5%B8%83npm%E5%8C%85%2014a69c61da444c55bc29bfb0831a9505/Untitled.png)

```json
{
  "name": "my-public-package",
  "version": "1.0.0",
  "publishConfig": {
    "access": "public"
  }
}

```

### 问题 3: 使用组织发布 fix:404

![Untitled](1025%20%E4%BD%BF%E7%94%A8%20Changeset%20CLI%20%E5%8F%91%E5%B8%83npm%E5%8C%85%2014a69c61da444c55bc29bfb0831a9505/Untitled%201.png)

如果你想以 `@scope` 包的形式发布到 npm，首先需要在 npm 中创建一个组织。在创建组织后，你可以将包发布到该组织下。

在 npm 中创建组织：

1. 登录到 npm 帐户。
2. 访问 "npm Organizations" 页面。
3. 创建一个新组织，为组织分配一个名称。

一旦组织创建完成，你可以将包发布到该组织，例如：

```json
{
  "name": "@myorg/my-package",
  "version": "1.0.0"
}

```

这将使包发布到 `@myorg` 组织下，以支持 `@scope` 包的形式发布。

使用 Changeset/CLI 结合这些解决方案，你可以更灵活地管理包的发布和版本控制，同时处理私有包、共有包和组织发布。这些步骤将帮助你有效地使用 Changeset/CLI 工具来发布 npm 包。