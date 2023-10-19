# 0912 node fs/promises

Node.js的**`fs/promises`**模块提供了许多常用的文件系统操作方法，这些方法都返回Promise对象，因此可以使用async/await来进行异步文件操作。以下是一些常用的**`fs/promises`**方法：

## 状态

1. **`fs/promises.stat(path)`**：
    - 用于异步获取文件或目录的状态信息，例如大小、创建时间、修改时间等。
2. **`fs/promises.symlink(target, path[, type])`**：
    - 用于异步创建符号链接。
3. **`fs/promises.chmod(path, mode)`**
    - 用于异步修改文件或目录的权限。

## 文件

1. **`fs/promises.readFile(path[, options])`**：
    - 用于异步读取文件的内容，并返回一个包含文件内容的Buffer或字符串（根据指定的编码）。
2. **`fs/promises.writeFile(file, data[, options])`**：
    - 用于异步写入数据到文件中，可以创建新文件或覆盖现有文件。
3. **`fs/promises.appendFile(file, data[, options])`**：
    - 用于异步向文件中追加数据，如果文件不存在则会创建文件。
4. **`fs/promises.unlink(path)`**：
    - 用于异步删除文件。
5. **`fs/promises.rename(oldPath, newPath)`**：
    - 用于异步重命名文件或移动文件。
6. **`fs/promises.copyFile(src, dest[, flags])`**：
    - 用于异步复制文件。

## 目录

1. **`fs/promises.readdir(path[, options])`**：
    - 用于异步读取目录的内容，返回一个包含目录项名称的数组。
2. **`fs/promises.mkdir(path[, options])`**：
    - 用于异步创建目录。
3. **`fs/promises.rmdir(path[, options])`**：
    - 用于异步删除目录。
4. 

[File System | Node.js v10.24.1 Documentation](https://nodejs.org/dist/latest-v10.x/docs/api/fs.html)