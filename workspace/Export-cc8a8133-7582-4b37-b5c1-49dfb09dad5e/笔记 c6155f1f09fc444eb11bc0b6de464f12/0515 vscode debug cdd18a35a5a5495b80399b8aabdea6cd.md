# 0515 vscode debug

## node-terminal

```jsx
{
    "type": "node-terminal",
    "request": "launch",
    "name": "Launch Program",
    "command": "npm run start"
}
```

```jsx
{
    "type": "node-terminal",
    "request": "launch",
    "name": "Launch Program",
    "command": "node",
    "args": [
        "${workspaceFolder}/app.js"
    ]
}
```

以ts执行当前文件

```jsx
{
      "type": "node",
      "request": "launch",
      "name": "ts debugger",
      "program": "${file}",
      "runtimeArgs": ["-r", "ts-node/register"]
    },
```

```jsx
{
      "type": "node",
      "request": "launch",
      "name": "Launch file",
      "preLaunchTask": "tsc: build - tsconfig.json",
      "program": "${file}"
    },
```