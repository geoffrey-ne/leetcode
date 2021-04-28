/**
 * [中等]面试题 05.04. 下一个数
 * https://leetcode-cn.com/problems/closed-number-lcci/
 * 
 * 
下一个数。给定一个正整数，找出与其二进制表达式中1的个数相同且大小最接近的那两个数（一个略大，一个略小）。

示例1:

 输入：num = 2（或者0b10）
 输出：[4, 1] 或者（[0b100, 0b1]）
示例2:

 输入：num = 1
 输出：[2, -1]
提示:

num的范围在[1, 2147483647]之间；
如果找不到前一个或者后一个满足条件的正数，那么输出 -1。
10100 20
11000 24
10010 18

*/

/**
 * @param {number} num
 * @return {number[]}
 */
var findClosedNumbers = function (num) {
  let tmp = num
  let firstPosOf01 = -1
  let firstPosOf10 = -1
  let index = 0
  while (tmp && (firstPosOf01 === -1 || firstPosOf10 === -1)) {
    // firstPosOf01
    if (tmp & 1 && !(tmp & 2) && firstPosOf01 === -1) {
      firstPosOf01 = index
    }
    // firstPosOf10
    if (!(tmp & 1) && tmp & 2 && firstPosOf10 === -1) {
      firstPosOf10 = index
    }
    tmp >>= 1
    index++
  }
  let max = -1
  let min = -1
  const arr = num.toString(2).split('').reverse()
  if (firstPosOf01 > -1 && firstPosOf01 < 30) {
    const tmp = arr.slice(0)
    tmp[firstPosOf01] = '0'
    tmp[firstPosOf01 + 1] = '1'
    // 还得继续
    let left = 0
    let right = firstPosOf01
    while (left < right) {
      while (left < right && tmp[right] === '0') {
        right--
      }
      while (left < right && tmp[left] === '1') {
        left++
      }
      if (left < right) {
        tmp[right] = '0'
        tmp[left] = '1'
      }
    }
    max = parseInt(tmp.reverse().join(''), 2)
  }
  if (firstPosOf10 > -1) {
    arr[firstPosOf10] = '1'
    arr[firstPosOf10 + 1] = '0'
    // 还得继续
    let left = 0
    let right = firstPosOf10
    while (left < right) {
      while (left < right && arr[right] === '1') {
        right--
      }
      while (left < right && arr[left] === '0') {
        left++
      }
      if (left < right) {
        arr[right] = '1'
        arr[left] = '0'
      }
    }
    min = parseInt(arr.reverse().join(''), 2)
  }
  return [max, min]
}

write('algorithms: 面试题 05.04. 下一个数', 'title')

write(findClosedNumbers(2147483647)) // [-1,-1]
write(findClosedNumbers(124)) // [143,122]
write(findClosedNumbers(67)) // [69,56]
// 1010
write(findClosedNumbers(10)) // [12, 9]
// 10
write(findClosedNumbers(2)) // [4, 1]
// 01
write(findClosedNumbers(1)) // [2, -1]

// tag: 位运算
