/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.arr = new Array(k).fill(-1)
  this.size = k
  this.head = -1
  this.tail = -1
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isEmpty()) {
    this.head = this.tail = 0
    this.arr[0] = value
  } else if (!this.isFull()) {
    this.tail = (this.tail + 1) % this.size
    this.arr[this.tail] = value
  } else {
    return false
  }
  return true
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (!this.isEmpty()) {
    if (this.head === this.tail) {
      this.head = this.tail = -1
    } else {
      this.head = (this.head + 1) % this.size
    }
    return true
  } else {
    return false
  }
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.arr[this.head]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.arr[this.tail]
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === -1 && this.head === this.tail
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return (this.tail + 1) % this.size === this.head
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

var obj = new MyCircularQueue(5)
var param_1 = obj.enQueue(1)
var param_1 = obj.enQueue(2)
var param_1 = obj.enQueue(3)
var param_1 = obj.enQueue(4)
var param_1 = obj.enQueue(5)
console.log(obj.isFull())
console.log(obj.isEmpty())
console.log(obj.deQueue())
console.log(obj.isFull())
console.log(obj.Front())
console.log(obj.Rear())
var param_2 = obj.deQueue()
var param_3 = obj.Front()
var param_4 = obj.Rear()
var param_5 = obj.isEmpty()
var param_6 = obj.isFull()
