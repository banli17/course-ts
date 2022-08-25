/**
 * 之前传统的写法，是用个对象取值进行处理，但是传入的 status 是简单的 number 或 string 类型
 */
const Status = {
  MANAGER_ADUIT_FAIL: -1,
  NO_ADUIT: 0,
  MANAGER_ADUIT_SUCCESS: 1,
  FINAL_ADUIT_SUCCESS: 2
}
// 审核类
class MyAduit {

  getAduitStatus(status: number): void {

    if (status === Status.NO_ADUIT) {
      console.log("没有审核");
    } else if (status === Status.MANAGER_ADUIT_SUCCESS) {
      console.log("经理审核通过");
    } else if (status === Status.FINAL_ADUIT_SUCCESS) {
      console.log("财务审核通过");
    }
  }
}

const aduit = new MyAduit();
aduit.getAduitStatus(Status.NO_ADUIT)
export { }