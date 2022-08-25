/**
 * 类型注解与类型推断
 */

// 类型注解
let a: number = 3

type PersonType = { name: string, age: number }

// 不匹配会报错，多了属性也会报错
// let p1:PersonType = {name: 'zs', age: 12, sex: 1} // 报错
let p1: PersonType = { name: 'zs', age: 12 }


// 类型推断
let num = 1 // 一旦推断成 number 后，类型就不能修改了, 否则报错
// a = 'hi' 报错

num = null // 可以赋值给 null , undefined

let nul = null
nul = 2
