function deepClone(obj) {
  // 如果是 值类型 或 null，则直接return
  if(typeof obj !== 'object' || obj === null) {
      return obj
  }
  
  // 定义结果对象
  let copy = {}
  
  // 如果对象是数组，则定义结果数组
  if(obj.constructor === Array) {
      copy = []
  }
  
  // 遍历对象的key
  for(let key in obj) {
      // 如果key是对象的自有属性
      if(obj.hasOwnProperty(key)) {
          // 递归调用深拷贝方法
          copy[key] = deepClone(obj[key])
      }
  }
  
  return copy
} 

const metaData = [[1,2,3],{id: 1},4,5]
const pData = deepClone(metaData)
console.log(metaData[0] === pData[0])
console.log(metaData[1] === pData[1])
console.log(pData === metaData)