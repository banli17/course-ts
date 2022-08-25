/**
 * 数字枚举可以双向取值，它的 key 会根据第一个值进行累加
 */
enum Week {
  Monday = 1,
  Tuesday,
  Wensday,
  ThirsDay,
  Friday,
  Sarturday,
  Sunday
}

console.log(Week.Monday)
console.log(Week["Monday"])

console.log(Week[1])
console.log(Week[5])



//  字符串枚举，它只能单向取值
enum WeekEnd {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wensday = "Wensday",
  ThirsDay = "ThirsDay",
  Friday = "Friday",
  Sarturday = "Sarturday",
  Sunday = "Sunday"
}

console.log(WeekEnd.Monday)
console.log(WeekEnd["Monday"])

export { }