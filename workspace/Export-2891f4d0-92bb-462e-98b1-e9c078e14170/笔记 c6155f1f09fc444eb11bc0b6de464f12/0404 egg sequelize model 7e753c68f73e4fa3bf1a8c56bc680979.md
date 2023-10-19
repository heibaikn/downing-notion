# 0404 egg sequelize model

## tableName 自动追加s

`freezeTableName`

```jsx
const User = sequelize.define('User', {
  // attributes
}, {
  tableName: 'user', // specify the singular table name
  freezeTableName: true // disable automatic pluralization
});
```

## 常用方法

```jsx
app.model：获取模型对象，可以通过调用模型对象的方法实现增删改查等操作。
app.Sequelize：获取 Sequelize 构造函数，用于定义模型和配置数据库连接等。
model.findAll()：查询所有符合条件的数据。
model.findOne()：查询符合条件的第一条数据。
model.create()：创建一条新数据。
model.update()：更新符合条件的数据。
model.destroy()：删除符合条件的数据。
```

## **createdAt 和 updatedAt**

1. 在sequellize migrate 是需要在表中 添加 created_at 和 update_at 字段
2. 在使用 sequelize model 时，在config配置 timestamps,将字段查询出字段

## 字段转化

数据库中字段为 `created_at` 但模型实例属性为`createdAt`

```jsx
const User = sequelize.define('User', {
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE
  }
}, {
  underscored: true
});
```