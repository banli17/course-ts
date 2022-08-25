// const max = Number.MAX_SAFE_INTEGER;
// console.log(max)
// const maxBigOne = max + 1
// console.log(maxBigOne)
// const maxBigtwo = max + 2
// console.log(maxBigtwo)

// console.log(maxBigOne === maxBigtwo)


// const max = BigInt(Number.MAX_SAFE_INTEGER);
// console.log(max)
// const maxBigOne = max + BigInt(1)
// console.log(maxBigOne)
// const maxBigtwo = max + BigInt(2)
// console.log(maxBigtwo)

// console.log(maxBigOne === maxBigtwo)

// 使用 BigInt 需要将 lib 里增加 ES2020
// 简写时需要将 tsconfig 里的 target 改成 ES2020 才行
const max = BigInt(Number.MAX_SAFE_INTEGER);
console.log(max)
const maxBigOne = max + 1n
console.log(maxBigOne)
const maxBigtwo = max + 2n
console.log(maxBigtwo)

console.log(maxBigOne === maxBigtwo)



export { }