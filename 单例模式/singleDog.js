class SingleDog {
  show() {
    console.log("我是一个单例对象")
  }

  static getInstance() {
    if(!SingleDog.instance) {
      SingleDog.instance = new SingleDog()
    }
    return SingleDog.instance
  }
}

const s1 = SingleDog.getInstance()
const s2 = SingleDog.getInstance()
console.log(s1 === s2)

// 或者直接在构造函数中进行处理,调用时更为自然
class SingleObject {
  constructor() {
    if(!SingleObject.instance) {
      SingleObject.instance = this
    }
    return SingleObject.instance
  }

  show() {
    console.log("Single all the day!")
  }
}

const s3 = new SingleObject()
const s4 = new SingleObject()
console.log(s3 === s4)