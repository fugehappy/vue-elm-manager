对数据库的理解

database 是一个大的仓库。包括许多房间
schema 就是其中的房间
table 就是房间中的床
index 是建立索引

1. 启动mongod

指定服务端口号，默认端口27017
.\mongod.exe --dbpath d:\mongod\data\elm
指定端口号
.\mongod.exe --port 28030 --dbpath d:\mongod\data\magicdict

2. node-elm后台服务启动，npm run dev

数据初始化，存入mongod指定的文件中
该项目建立的数据库名称为elm，没有设置数据库密码

3. 启动mongod可视化工具

[robomongo](https://github.com/Studio3T/robomongo)

[MongoCola](https://github.com/magicdict/MongoCola)

新建连接，主机为localhost，端口号，然后其他不用配置，就导入了已有的数据

4.数据管理

a.增删改查
MongoCola中有tree, table，json三种格式查看数据
MongoCola中选择添加空文档，追加数据
MongoCola中选中数据，删除数据
MongoCola中选中表的字段，双击修改