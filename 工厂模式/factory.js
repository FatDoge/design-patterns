function User(name , age, career, work) {
  this.name = name
  this.age = age
  this.career = career 
  this.work = work
}

/**
 * ! 抽象出不变的
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 */
function Factory(name, age, career) {
  const WORK_MAP = {
    'coder': ['敲代码', '摸鱼'],
    'boss': ['喝茶'],
    'product manager': ['监督']
  }

  return new User(name, age, career, WORK_MAP[career])
}

const fatdoge = Factory('fatdoge', 24, 'coder')
console.log(fatdoge)

const boss = Factory('boss', 24, 'boss')
console.log(boss)

const nana = Factory('nana', 25, 'product manager')
console.log(nana)