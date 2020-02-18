/**
 * ! 对拓展开放，对修改封闭
 */
// 手机抽象工厂
class MobilePhoneFactory {
  // 提供操作系统的接口
  createOS(){
      throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
  // 提供硬件的接口
  createHardWare(){
      throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
}

// OS抽象工厂
class OSFactory {
  controlHardware() {
    throw new Error("抽象工厂方法不允许直接调用， 你需要将我重写！");
  }
}

class AndroidOS extends OSFactory {
  controlHardware() {
    console.log("我会用安卓的方式操作硬件！");
  }
}

class AppleOS extends OSFactory {
  controlHardware() {
    console.log("我会用苹果的方式操作硬件！");
  }
}

//硬件抽象工厂
class HardWare {
  operateByOrder() {
    throw new Error("抽象工厂方法不允许直接调用，你需要将我重写！");
  }
}

class QualcommHardWare extends HardWare {
  operateByOrder() {
    console.log("我会用高通的方式去运转！");
  }
}

class A13HardWare extends HardWare {
  operateByOrder() {
    console.log("我会用A13的方式去运转")
  }
}

// 开始造小米🍚
class MiPhoneFactory extends MobilePhoneFactory {
  createOS() {
    // 提供安卓系统实例
    return new AndroidOS()
  }

  createHardWare() {
    // 提供高通硬件实例
    return new QualcommHardWare()
  }
}

const mi10 = new MiPhoneFactory()
const miui = mi10.createOS()
miui.controlHardware()
const qualcomm865 = mi10.createHardWare()
qualcomm865.operateByOrder()

// 开始造苹果

class IPhoneFactory extends MobilePhoneFactory {
  createOS() {
    return new AppleOS()
  }

  createHardWare() {
    return new A13HardWare()
  }
}

const iphone11 = new IPhoneFactory()
const ios = iphone11.createOS()
const a13 = iphone11.createHardWare()
ios.controlHardware()
a13.operateByOrder()