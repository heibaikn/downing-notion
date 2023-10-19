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