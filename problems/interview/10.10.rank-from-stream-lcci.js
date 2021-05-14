/**
 * [中等]面试题 10.10. 数字流的秩
 * https://leetcode-cn.com/problems/rank-from-stream-lcci/
 * 
假设你正在读取一串整数。每隔一段时间，你希望能找出数字 x 的秩(小于或等于 x 的值的个数)。请实现数据结构和算法来支持这些操作，也就是说：

实现 track(int x) 方法，每读入一个数字都会调用该方法；

实现 getRankOfNumber(int x) 方法，返回小于或等于 x 的值的个数。

注意：本题相对原题稍作改动

示例:

输入:
["StreamRank", "getRankOfNumber", "track", "getRankOfNumber"]
[[], [1], [0], [0]]
输出:
[null,0,null,1]
提示：

x <= 50000
track 和 getRankOfNumber 方法的调用次数均不超过 2000 次

*/

var StreamRank = function () {
  this.arr = []
  this.sum = []
}

/**
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function (x) {
  this.arr[x] = (this.arr[x] || 0) + 1
}

/**
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function (x) {
  let res = 0
  const keys = Object.keys(this.arr)
  for (let i = 0; i < keys.length; i++) {
    const index = Number(keys[i])
    if (index <= x) {
      res += this.arr[index]
    } else {
      break
    }
  }
  return res
}

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */

write('algorithms: 面试题 10.10. 数字流的秩', 'title')

var obj = new StreamRank()
obj.track(4)
obj.track(3)
obj.track(5)
write(obj.getRankOfNumber(8)) // 3
obj.track(3)
write(obj.getRankOfNumber(2)) // 0
obj.track(1)
obj.track(5)
write(obj.getRankOfNumber(3)) // 3
write(obj.getRankOfNumber(5)) // 6
obj.track(1)
write(obj.getRankOfNumber(9)) // 7
obj.track(6)
write(obj.getRankOfNumber(3)) // 4
obj.track(4)
obj.track(1)
write(obj.getRankOfNumber(7)) // 10
obj.track(9)
obj.track(2)
obj.track(9)

// tag: 数据结构；
