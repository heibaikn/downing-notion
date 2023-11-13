# npm link

`pnpm link` 是 pnpm 包管理工具的一个命令，用于将本地包链接到全局包目录，以便在本地项目中使用它。它不是用来替换远程包的工具，而是用于本地开发和测试包。

如果你想将远程包替换为本地包，通常有几种方法，具体取决于你的需求和项目的结构：

1. **使用本地文件路径**：你可以将本地包作为依赖添加到你的项目中，然后在 `package.json` 中使用本地文件路径指向你的本地包。这样，你的项目将使用本地包而不是远程包。示例：
    
    ```json
    "dependencies": {
      "my-package": "file:../path/to/your/local/package"
    }
    
    ```
    
    这会将项目中的依赖指向本地包的目录。
    
2. **使用 npm link**：如果你使用 npm 作为包管理工具，你可以使用 `npm link` 命令将本地包链接到全局包目录，然后在你的项目中使用它。示例：
    
    ```bash
    # 在本地包目录中执行
    cd /path/to/your/local/package
    npm link
    
    # 在项目目录中执行
    npm link your-local-package-name
    
    ```
    
    这将链接本地包到项目中。
    
3. **使用 yarn link**：如果你使用 yarn 作为包管理工具，可以使用 `yarn link` 命令来链接本地包。示例：
    
    ```bash
    # 在本地包目录中执行
    cd /path/to/your/local/package
    yarn link
    
    # 在项目目录中执行
    yarn link your-local-package-name
    
    ```
    
    这将链接本地包到项目中。
    

这些方法允许你在项目中使用本地包而不是远程包。确保在项目中删除对远程包的依赖，以便不再使用它。