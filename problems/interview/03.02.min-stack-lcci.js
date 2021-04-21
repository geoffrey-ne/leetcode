/**
 * [简单]面试题 03.02. 栈的最小值
 * https://leetcode-cn.com/problems/min-stack-lcci/
 * 
 * 
请设计一个栈，除了常规栈支持的pop与push函数以外，还支持min函数，该函数返回栈元素中的最小值。执行push、pop和min操作的时间复杂度必须为O(1)。

示例：

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.

*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  const { stack, minStack } = this
  stack.push(x)
  if (minStack.length === 0) {
    minStack.push(x)
  } else {
    minStack.push(Math.min(minStack[minStack.length - 1], x))
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const res = this.stack.pop()
  this.minStack.pop()
  return res
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 */

write('algorithms: 面试题 03.02. 栈的最小值', 'title')

var minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
write(minStack.getMin()) // -3
write(minStack.pop()) // -3
write(minStack.top()) // 0
write(minStack.getMin()) // -2

// tag: 栈；数据结构
