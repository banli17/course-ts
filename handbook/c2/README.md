# ts

生成 tsconfig.json 文件

```sh
tsc --init
```

rootDir
outDir

ts-node 让 node 能直接运行 ts 代码，无需使用 tsc 将 ts 代码编译成 js 代码

```sh
ts-node 1.ts
```

nodemon

```json
{
  "scrips": {
    "dev": "nodemon --watch src/ -e ts --exec ts-node ./src/app.ts"
  }
}
```

- `--watch src` 监听 src 目录
- `-e ts` 监听的是 ts 后缀的文件
- `--exec ts-node ./src/app.ts` 有变化后重新执行命令

新建的文件没有执行权限

```sh
chmod -R 755 src/index.ts
```

parcel 打包支持浏览器运行 ts 文件

1、安装 parcel-bundler: `npm i parcel-bundler`

2、package.json 中添加脚本命令

```json
{
  "scrips": {
    "dev": "parcel ./index.html"
  }
}
```

## 类

类是抽象的模具，里面有属性和方法。

构造函数赋值的简写

```js
class Person {
  // 相当于下面两步
  // public age: string
  // this.age = age
  constructor(public age:string) {}
}
```

如果一个成员变量没有赋值(构造函数外和里面都没有赋值)，会报错。

```js
// ts4 之前需要加 undefind，但是如果有方法用到了age ，可能就会报错
public age: number | undefind

// 因为这里 age 可能是 undefined，不允许加 10，所以会报错
return this.age + 10

// ts4 之后，加 ! 可以防止上面的相加报错提示
public age!:string
```
