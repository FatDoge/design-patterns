const arr = [1, 2, 3]
// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]()

// 对迭代器对象执行next，就能逐个访问集合的成员
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

// 编写一个迭代器生成函数
function *iteratorGenerator() {
  yield '1号选手'
  yield '2号选手'
  yield '3号选手'
}

const iterator1 = iteratorGenerator()

console.log(iterator1.next())
console.log(iterator1.next())
console.log(iterator1.next())