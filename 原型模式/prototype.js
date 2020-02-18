// class Dog {
//   constructor(name ,age) {
//    this.name = name
//    this.age = age
//   }
  
//   eat() {
//     console.log('肉骨头真好吃')
//   }
// }

// const d1 = new Dog('doggy', 1)
// d1.eat()

function Dog(name, age) {
  this.name = name
  this.age = age
}

Dog.prototype.eat = function() {
  console.log('肉骨头真好吃')
}

const d2 = new Dog('doggy', 2)
d2.eat()
