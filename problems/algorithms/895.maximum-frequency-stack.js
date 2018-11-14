/**
 * [★★★]895. Maximum Frequency Stack
 * finish: 2018-11-14
 * https://leetcode.com/problems/maximum-frequency-stack/description/
 */

class FreqStack {
  constructor() {
    this.map = new Map()
    this.array = new Array()
  }

  push(x) {
    const map = this.map,
      array = this.array

    if (map.has(x)) {
      map.set(x, map.get(x) + 1)
    } else {
      map.set(x, 1)
    }

    const index = map.get(x)

    if (typeof array[index] === 'undefined') {
      array[index] = []
    }
    array[index].push(x)
  }

  pop() {
    const map = this.map,
      array = this.array

    const lastIndex = array.length - 1,
      returnNum = array[lastIndex].pop()

    map.set(returnNum, map.get(returnNum) - 1)

    if (array[lastIndex].length === 0) {
      array.pop()
    }

    return returnNum
  }
}
/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

write('algorithms: 895. Maximum Frequency Stack', 'title');

write('test1: [5, 7, 5, 7, 4, 5]')
var obj = new FreqStack()
obj.push(5)
obj.push(7)
obj.push(5)
obj.push(7)
obj.push(4)
obj.push(5)
write(obj.pop())  // 5
write(obj.pop())  // 7
write(obj.pop())  // 5
write(obj.pop())  // 4
write(obj.pop())  // 7
write(obj.pop())  // 5

write('test2: [5, 1, 2, 5, 5, 5, 1, 6, 1, 5]')
var obj1 = new FreqStack()
obj1.push(5)
obj1.push(1)
obj1.push(2)
obj1.push(5)
obj1.push(5)
obj1.push(5)
obj1.push(1)
obj1.push(6)
obj1.push(1)
obj1.push(5)
write(obj1.pop()) // 5
write(obj1.pop()) // 5
write(obj1.pop()) // 1
write(obj1.pop()) // 5
write(obj1.pop()) // 1
write(obj1.pop()) // 5
write(obj1.pop()) // 6
write(obj1.pop()) // 2
write(obj1.pop()) // 1
write(obj1.pop()) // 5