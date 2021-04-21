/**
 * [中等]面试题 03.03. 堆盘子
 * https://leetcode-cn.com/problems/stack-of-plates-lcci/
 * 
 * 
堆盘子。设想有一堆盘子，堆太高可能会倒下来。因此，在现实生活中，盘子堆到一定高度时，我们就会另外堆一堆盘子。
请实现数据结构SetOfStacks，模拟这种行为。
SetOfStacks应该由多个栈组成，并且在前一个栈填满时新建一个栈。
此外，SetOfStacks.push()和SetOfStacks.pop()应该与普通栈的操作方法相同（也就是说，pop()返回的值，应该跟只有一个栈时的情况一样）。 

进阶：实现一个popAt(int index)方法，根据指定的子栈，执行pop操作。

当某个栈为空时，应当删除该栈。当栈中没有元素或不存在该栈时，pop，popAt 应返回 -1.

示例1:

 输入：
["StackOfPlates", "push", "push", "popAt", "pop", "pop"]
[[1], [1], [2], [1], [], []]
 输出：
[null, null, null, 2, 1, -1]
示例2:

 输入：
["StackOfPlates", "push", "push", "push", "popAt", "popAt", "popAt"]
[[2], [1], [2], [3], [0], [0], [0]]
 输出：
[null, null, null, null, 2, 1, 3]

*/

/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
  this.cap = cap
  this.stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function (val) {
  const lastIndex = this.stack.length - 1
  if (lastIndex === -1 || this.stack[lastIndex].length === this.cap) {
    this.stack.push([val])
  } else {
    this.stack[lastIndex].push(val)
  }
}

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function () {
  const lastIndex = this.stack.length - 1
  if (lastIndex === -1 || this.cap === 0) {
    return -1
  }
  const res = this.stack[lastIndex].pop()
  if (this.stack[lastIndex].length === 0) {
    this.stack.pop()
  }
  return res
}

/**
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function (index) {
  const plates = this.stack[index] || []
  if (plates.length === 0 || this.cap === 0) {
    return -1
  }
  const res = plates.pop()
  if (plates.length === 0) {
    this.stack.splice(index, 1)
  }
  return res
}

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */

/**
 * Your MinStack object will be instantiated and called as such:
 */

write('algorithms: 面试题 03.03. 堆盘子', 'title')

var obj1 = new StackOfPlates(2)
obj1.push(1)
obj1.push(2)
obj1.push(3)

write(obj1.popAt(0)) // 2
write(obj1.popAt(0)) // 1
write(obj1.popAt(0)) // 3

// tag: 栈；数据结构
