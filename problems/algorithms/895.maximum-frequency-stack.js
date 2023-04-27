/**
 * [困难]895. 最大频率栈
 * https://leetcode.cn/problems/maximum-frequency-stack/
 * 
设计一个类似堆栈的数据结构，将元素推入堆栈，并从堆栈中弹出出现频率最高的元素。

实现 FreqStack 类:

FreqStack() 构造一个空的堆栈。
void push(int val) 将一个整数 val 压入栈顶。
int pop() 删除并返回堆栈中出现频率最高的元素。
如果出现频率最高的元素不只一个，则移除并返回最接近栈顶的元素。
 
示例 1：

输入：
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
输出：[null,null,null,null,null,null,null,5,7,5,4]
解释：
FreqStack = new FreqStack();
freqStack.push (5);//堆栈为 [5]
freqStack.push (7);//堆栈是 [5,7]
freqStack.push (5);//堆栈是 [5,7,5]
freqStack.push (7);//堆栈是 [5,7,5,7]
freqStack.push (4);//堆栈是 [5,7,5,7,4]
freqStack.push (5);//堆栈是 [5,7,5,7,4,5]
freqStack.pop ();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,5,7,4]。
freqStack.pop ();//返回 7 ，因为 5 和 7 出现频率最高，但7最接近顶部。堆栈变成 [5,7,5,4]。
freqStack.pop ();//返回 5 ，因为 5 出现频率最高。堆栈变成 [5,7,4]。
freqStack.pop ();//返回 4 ，因为 4, 5 和 7 出现频率最高，但 4 是最接近顶部的。堆栈变成 [5,7]。
 
提示：

0 <= val <= 109
push 和 pop 的操作数不大于 2 * 104。
输入保证在调用 pop 之前堆栈中至少有一个元素。

 */

var FreqStack = function () {
  this.freq = new Map()
  this.group = new Map()
  this.max = 0
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  const freq = (this.freq.get(val) || 0) + 1
  this.freq.set(val, freq)
  if (!this.group.get(freq)) {
    this.group.set(freq, [])
  }
  this.group.get(freq).push(val)
  this.max = Math.max(freq, this.max)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const res = this.group.get(this.max).pop()
  if (this.group.get(this.max).length === 0) {
    this.max--
  }
  this.freq.set(res, this.freq.get(res) - 1)
  return res
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = Object.create(FreqStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

write('algorithms: 895. Maximum Frequency Stack', 'title')

write('test1: [5, 7, 5, 7, 4, 5]')
var obj = new FreqStack()
obj.push(5)
obj.push(7)
obj.push(5)
obj.push(7)
obj.push(4)
obj.push(5)
write(obj.pop()) // 5
write(obj.pop()) // 7
write(obj.pop()) // 5
write(obj.pop()) // 4
write(obj.pop()) // 7
write(obj.pop()) // 5

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

// tag: 栈
