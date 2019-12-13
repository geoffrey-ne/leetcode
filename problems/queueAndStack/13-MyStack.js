/**
 * 用队列实现栈：https://leetcode-cn.com/explore/learn/card/queue-stack/220/conclusion/889/
 */

const isEmpty = function(queue) {
  return queue.length === 0
}

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.pushQueue = []
  this.helpQueue = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.pushQueue.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  if (isEmpty(this.pushQueue)) {
    this.pushQueue = this.helpQueue
    this.helpQueue = []
  }
  let last = null
  do {
    last = this.pushQueue.shift()
    if (!isEmpty(this.pushQueue)) {
      this.helpQueue.push(last)
    }
  } while (!isEmpty(this.pushQueue))

  return last
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  if (isEmpty(this.pushQueue)) {
    this.pushQueue = this.helpQueue
    this.helpQueue = []
  }

  const last = this.pop()
  this.pushQueue.push(last)
  return last
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.pushQueue.length === 0 && this.helpQueue.length === 0
}

write('queueAndStack 13. MyStack', 'title')

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

var stack = new MyStack()
stack.push(1)
stack.push(2)

write(stack.top()) // 2
write(stack.pop()) // 2
write(stack.pop()) // 1
write(stack.empty()) // true
