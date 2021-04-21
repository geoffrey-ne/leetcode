/**
 * [简单]面试题 03.01. 三合一
 * https://leetcode-cn.com/problems/three-in-one-lcci/
 * 
 * 
三合一。描述如何只用一个数组来实现三个栈。

你应该实现push(stackNum, value)、pop(stackNum)、isEmpty(stackNum)、peek(stackNum)方法。stackNum表示栈下标，value表示压入的值。

构造函数会传入一个stackSize参数，代表每个栈的大小。

示例1:

 输入：
["TripleInOne", "push", "push", "pop", "pop", "pop", "isEmpty"]
[[1], [0, 1], [0, 2], [0], [0], [0], [0]]
 输出：
[null, null, null, 1, -1, -1, true]
说明：当栈为空时`pop, peek`返回-1，当栈满时`push`不压入元素。
示例2:

 输入：
["TripleInOne", "push", "push", "push", "pop", "pop", "pop", "peek"]
[[2], [0, 1], [0, 2], [0, 3], [0], [0], [0], [0]]
 输出：
[null, null, null, null, 2, 1, -1, -1]

*/

/**
 * @param {number} stackSize
 */
var TripleInOne = function (stackSize) {
  this.stack = []
  this.stackSize = stackSize
  this.N = 3
  for (let i = 0; i < this.N; i++) {
    this._setLen(i, 0)
  }
}

/**
 * @param {number} stackNum
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function (stackNum, value) {
  const len = this._getLen(stackNum)
  if (typeof len !== 'number' || this.stackSize === 0 || len >= this.stackSize) {
    return
  }
  const index = this._getIndex(stackNum, len)
  this.stack[index] = value
  this._setLen(stackNum, len + 1)
}

TripleInOne.prototype._getIndex = function (stackNum, len) {
  return this.stackSize * stackNum + len
}

TripleInOne.prototype._getLen = function (stackNum) {
  return this.stack[`length${stackNum}`]
}

TripleInOne.prototype._setLen = function (stackNum, num) {
  this.stack[`length${stackNum}`] = num
}

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function (stackNum) {
  const len = this._getLen(stackNum)
  if (typeof len !== 'number' || len <= 0) {
    return -1
  }
  const index = this._getIndex(stackNum, len - 1)
  const res = this.stack[index]
  delete this.stack[index]
  this._setLen(stackNum, len - 1)
  return res
}

/**
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function (stackNum) {
  const len = this._getLen(stackNum)
  if (typeof len !== 'number' || len <= 0) {
    return -1
  }
  return this.stack[this._getIndex(stackNum, len - 1)]
}

/**
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function (stackNum) {
  const len = this._getLen(stackNum)
  return len <= 0
}

write('algorithms: 面试题 03.01. 三合一', 'title')

/**
 * Your TripleInOne object will be instantiated and called as such:
 */

var obj1 = new TripleInOne(1)
obj1.push(0, 1)
obj1.push(0, 2)
write(obj1.pop(0)) // 1
write(obj1.peek(0)) // -1
write(obj1.isEmpty(0)) // true

var obj2 = new TripleInOne(2)
obj2.push(0, 1)
obj2.push(0, 2)
write(obj2.pop(0)) // 2
write(obj2.peek(0)) // 1
write(obj2.isEmpty(0)) // false
obj2.push(2, 1)
obj2.push(2, 2)
write(obj2.pop(1)) // -1
write(obj2.pop(2)) // 2
write(obj2.isEmpty(2)) // false
write(obj2.pop(2)) // 1
write(obj2.isEmpty(2)) // true
write(obj2.isEmpty(0)) // false

// tag: 栈；数据结构

// 这题最好用二维数组
