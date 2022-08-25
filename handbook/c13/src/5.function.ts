/**
 * function 的定义
 */


function info1(name: string, age: number) {
    console.log("name:", name, " age:", age);
    return 3
}

info1("wangwu", 23)


let info2 = function (name: string, age: number) {
    console.log("name:", name, " age:", age);
    return 3
}

info2("wangwu", 23)

// 直接在变量名后定义类型
let info3: (name: string, age: number) => number =
    function (name, age) {
        console.log("name:", name, " age:", age);
        return 3
    }

info3("wangwu", 23)
type TypInfoFun = (name: string, age: number) => number
let info4: TypInfoFun =
    function (name, age) {
        console.log("name:", name, " age:", age);
        return 3
    }

info4("wangwu", 23)

// rest参数
function info5(name: string, age: number, ...rest: any) {
    console.log("name:", name, " age:", age, " rest:", rest);
    return rest
}

info5("wangwu", 23, "1111", "beijing", 23,)

/**
 * 函数类型升级，勇敢单独对象进行传参数
 */
type TypStuobj = { username: string, age: number, phone: string }

function info(stuObj: TypStuobj) {
  console.log("name:", stuObj.username, " age:", stuObj.age);
  return 3
}

let stuObj: TypStuobj = { username: "wangwu", age: 23, phone: "111" }
info(stuObj)

// 函数解构

function subInfo({ username, phone }: TypStuobj) {
  console.log("name:", username, " phone:", phone);
  return 3
}

subInfo({ username: "lisi", age: 33, phone: "222" })

