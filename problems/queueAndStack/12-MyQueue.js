/**
 * 用栈实现队列：https://leetcode-cn.com/explore/learn/card/queue-stack/220/conclusion/888/
 */

/**
 * Initialize your data structure here.
 *
 * push to top, peek/pop from top, size, 和 is empty
 */
var MyQueue = function() {
  this.pushStack = []
  this.popStack = []
}

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.pushStack.push(x)
}

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.popStack.length === 0) {
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop())
    }
  }

  return this.popStack.pop()
}

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.popStack.length === 0) {
    while (this.pushStack.length > 0) {
      this.popStack.push(this.pushStack.pop())
    }
  }
  return this.popStack[this.popStack.length - 1]
}

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.pushStack.length === 0 && this.popStack.length === 0
}

write('queueAndStack 12. MyQueue', 'title')

/**
 * Your MyQueue object will be instantiated and called as such:
 */

var queue = new MyQueue()
queue.push(1)
queue.push(2)

write(queue.peek()) // 1

queue.push(3)

write(queue.peek()) // 1
write(queue.empty()) // false
