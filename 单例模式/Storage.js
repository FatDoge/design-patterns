class Storage {
  constructor() {
    if(!Storage.instance) {
      Storage.instance = this
    }
    return Storage.instance
  }

  mapObj = {}

  getItem(key) {
    return this.mapObj[key]
  }

  setItem(key, name) {
    this.mapObj[key] = name
  }
}

const s1 = new Storage()
s1.setItem('name', 'fatdoge')
console.log(s1.getItem('name'))
const s2 = new Storage()
console.log(s1.getItem('name'))
console.log(s2.getItem('name'))
console.log(s1 === s2)