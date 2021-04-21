/**
 * [中等]面试题 03.05. 栈排序
 * https://leetcode-cn.com/problems/sort-of-stacks-lcci/
 * 
 * 
栈排序。 编写程序，对栈进行排序使最小元素位于栈顶。最多只能使用一个其他的临时栈存放数据，但不得将元素复制到别的数据结构（如数组）中。
该栈支持如下操作：push、pop、peek 和 isEmpty。当栈为空时，peek 返回 -1。

示例1:

 输入：
["SortedStack", "push", "push", "peek", "pop", "peek"]
[[], [1], [2], [], [], []]
 输出：
[null,null,null,1,null,2]
示例2:

 输入： 
["SortedStack", "pop", "pop", "push", "pop", "isEmpty"]
[[], [], [], [1], [], []]
 输出：
[null,null,null,null,null,true]
说明:

栈中的元素数目在[0, 5000]范围内。

*/

var SortedStack = function () {
  this.stack = []
}

/**
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
  const tempStack = []
  while (this.stack.length > 0 && this.peek() < val) {
    tempStack.push(this.stack.pop())
  }
  this.stack.push(val)
  while (tempStack.length > 0) {
    this.stack.push(tempStack.pop())
  }
}

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
  this.stack.pop()
}

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
  return this.stack[this.stack.length - 1] || -1
}

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
  return this.stack.length === 0
}

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */

write('algorithms: 面试题 03.05. 栈排序', 'title')

const stack1 = new SortedStack()

stack1.push(1)
stack1.push(2)

write(stack1.peek()) // 1
write(stack1.pop()) // null
write(stack1.peek()) // 2

// tag: 栈；
