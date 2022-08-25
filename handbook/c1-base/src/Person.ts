class Person {

  private name: string = ''
  private age: number = 0
  private sex: string = ''

  constructor() {
    console.log('Person constructor ');
  }

  // 默认会返回 void
  public eat(): void {
    console.log('eat')
  }
}

export default Person
