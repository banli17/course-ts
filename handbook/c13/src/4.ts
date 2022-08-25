/**
 * any 和 unknown 的区别
 */


// any
// any 是任何类型的父类或子类
let price: any = 'hello'
let total: number = price

// any 后，写代码没有属性提示了，但是可以写属性
let o1:any = {name: 'zs'}
o1.name // 不报错

// unknown 可以作为其它类型的子类
let s1: unknown = 'zs'
let s2: number = s1 // unknown 不能赋值给 number 类型

// 可以将其他类型赋值给 unknown
let s4:number = 1
let s5:unknown = s4
s5 = 'hi' // 没有用类型推断了，可以改类型，不报错

// unknown 上没有任何属性，会报错
let s3: unknown = {name: 'zs'}
s3.name // 报错




// 解决
// 无法重新声明块范围变量“price”。ts(2451)
// 133.ts(2, 5): 此处也声明了 "price"。
// 是因为在 Commonjs 规范里，没有像 ESModule 能形成闭包的「模块」概念，所有的模块在引用时都默认被抛至全局，因此当再次声明某个模块时，TypeScript 会认为重复声明了两次相同的变量进而抛错。
// 有了 export 关键字，表示这是一个模块
// https://www.cnblogs.com/libinfs/p/11857187.html
// https://zhuanlan.zhihu.com/p/148081795
export {}