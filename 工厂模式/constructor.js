/**
 * ? 使用工厂模式时，我们要做的就是去抽象不同构造函数（类）之间的变与不变。
 **/ 

/**
 * ! 构造不同种类实例的构造器处于变化中
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 */
function User(name , age, career) {
  this.name = name
  this.age = age
  this.career = career 
}

const user = new User('fatdoge', 24, 'coder')

function Coder(name , age) {
  this.name = name
  this.age = age
  this.career = 'coder' 
  this.work = ['写代码','写系分', '修Bug']
}

const coder = new Coder('fatdoge', 24)
console.log(coder)

function ProductManager(name, age) {
  this.name = name 
  this.age = age
  this.career = 'product manager'
  this.work = ['订会议室', '写PRD', '催更']
}

const productmanager = new ProductManager('fatdoge', 24)
console.log(productmanager)