/**
 * 一个常见的错误，可能之前版本有这个问题，目前没有这个问题了
 */

// 将一个变量作为属性时
let obj = { username: "wangwu", age: 23 }
let username = "username"
obj[username]  // 之前版本 let username，是无法确认属性名 'username'
// 这里 obj 会找推断里 Object 的 username 属性，没有找到
// 解决办法是将 let username 改成 const 


// 增加了 :object 后
let obj2: object = { username: "wangwu", age: 23 }
const username2 = "username"
let result = obj2[username2] // (obj2 as any)[username2]

export {}