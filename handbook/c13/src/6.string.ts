/**
 * string 和 String 的区别
 * 
 * https://stackoverflow.com/questions/14727044/what-is-the-difference-between-types-string-and-string
 * String 是 js 的类型，表示一个 String 包装对象，可以 new String，但是没有人会这样用。永远不要使用类型Number、String、Boolean、Symbol或Object这些类型指的是在 JavaScript 代码中几乎从未正确使用过的非原始装箱对象。
 * string 是 ts 的类型
 */

let a: String = 'hi'

// a. 会从 String 上读取属性

let b: string = 'hello'

b = a // 报错, String 表示包装对象
// Type 'String' is not assignable to type 'string'.
//   'string' is a primitive, but 'String' is a wrapper object.
//      Prefer using 'string' when possible.
a = b // ok
export { }