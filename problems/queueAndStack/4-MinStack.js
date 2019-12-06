/**
 * 最小栈：https://leetcode-cn.com/explore/learn/card/queue-stack/218/stack-last-in-first-out-data-structure/877/
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.minStack = []
  this.stack = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.stack.push(x)
  if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] > x) {
    this.minStack.push(x)
  } else {
    this.minStack.push(this.minStack[this.minStack.length - 1])
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.stack.pop()
  this.minStack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
}

write('queueAndStack 4. MinStack', 'title')

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const minStack = new MinStack()
minStack.push(-2)
minStack.push(0)
minStack.push(-3)
write(minStack.getMin()) // -3
minStack.pop()
write(minStack.top()) // 0
write(minStack.getMin()) // -2
