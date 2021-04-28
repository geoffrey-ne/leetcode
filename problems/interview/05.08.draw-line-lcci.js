/**
 * [中等]面试题 05.08. 绘制直线
 * https://leetcode-cn.com/problems/draw-line-lcci/
 * 
 * 
绘制直线。
有个单色屏幕存储在一个一维数组中，使得32个连续像素可以存放在一个 int 里。
屏幕宽度为w，且w可被32整除（即一个 int 不会分布在两行上），
屏幕高度可由数组长度及屏幕宽度推算得出。
请实现一个函数，绘制从点(x1, y)到点(x2, y)的水平线。

给出数组的长度 length，
宽度 w（以比特为单位）、
直线开始位置 x1（比特为单位）、
直线结束位置 x2（比特为单位）、
直线所在行数 y。
返回绘制过后的数组。

示例1:

 输入：length = 1, w = 32, x1 = 30, x2 = 31, y = 0
 输出：[3]
 说明：在第0行的第30位到第31为画一条直线，屏幕表示为[0b000000000000000000000000000000011]
示例2:

 输入：length = 3, w = 96, x1 = 0, x2 = 95, y = 0
 输出：[-1, -1, -1]

*/

/**
 * @param {number} length
 * @param {number} w
 * @param {number} x1
 * @param {number} x2
 * @param {number} y
 * @return {number[]}
 */
var drawLine = function (length, w, x1, x2, y) {
  let str = new Array(length * 32).fill(0).join('')
  str = str.substring(0, y * w + x1) + '1'.repeat(x2 - x1 + 1) + str.substring(y * w + x2 + 1)
  let result = []
  for (let i = 0; i < length * 32; i += 32) {
    let temp = str.substring(i, i + 32)
    if (temp[0] === '1') {
      temp = ~(parseInt(temp, 2) - 1)
      temp *= -1
    } else {
      temp = parseInt(temp, 2)
    }
    result.push(temp)
  }
  return result
}

write('algorithms: 面试题 05.08. 绘制直线', 'title')

write(drawLine(1, 32, 30, 31, 0)) // 3
write(drawLine(3, 96, 0, 95, 0)) // [-1, -1, -1]

// tag: 位运算
// 这题我看不懂，直接放弃了
