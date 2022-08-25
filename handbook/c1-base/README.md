# 基础知识

## 为什么需要 ts

- 静态类型检查，防止 js 一些不必要的错误

```js
const message = 'hello'
message.toLowerCase()

message() // 这里 js 里不会报错
```

- 非异常故障
  - 使用对象上没有的方法
  - 一些不必要的判断，如 Math.random < 1，函数和数字不能比较
  - 一些基本的逻辑错误，如 `if(a !== true) else if(a === false)`

- 编辑器中的属性提示

正是因为能知道变量的类型，所以才能实现上面的功能。


## tsc, TypeScript 编译器

1、安装 typescript 后，会有一个可执行命令 tsc

```sh
npm i -g typescript
```

2、执行 tsc 时，默认会生成一个 .js 文件

```sh
tsc hello.ts
```

3、即使 ts 文件中有错误，tsc 打包也不会中断执行，因为不能让用户原先的 js 代码迁移到 ts 后不能使用。这可以在编译器选项中设置。 `noEmitOnError`开启时，ts 有错误将会阻止生成 js 文件。

```sh
tsc --noEmitOnError hello.ts
```


## 类型推断

即使我们不显示的声明类型，ts 也可以帮助推断出类型，所以哦最好不要添加注释。

```js
let msg = 'hello' // ts 推断出 msg: string

msg = 2 // error!
```

## 擦除类型

ts 要在浏览器上运行，肯定是需要转成 js 的，在这过程中，会删除掉类型声明。

类型批注永远不会改变程序的运行时行为。

## 降级

ts 编译时，会自动转换为 ES3。可以通过 `target` 选项来设置。

```sh
tsc --target es2015 hello.ts
```

目前 es2015 已经支持的非常好了，推荐使用。

## 严格模式

`tsconfig.json` 中可以设置 `strict` 严格标识。要知道的是 `noImplictAny` 和 `strictedNullChecks` 选项。


- `noImplictAny`: 使用 any 后 ts 不会尝试推断类型，而是会回退到最宽松模式，即普通 js 模式，这样就使用失去了 ts 的意义。开启后，当有变量是 any 类型时将会报错。
- `strictedNullChecks`: 默认情况下，null 和 undefined 是不会区别对待的，开启后，将严格判断 null 值。
