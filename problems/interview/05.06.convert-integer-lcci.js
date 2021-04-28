/**
 * [简单]面试题 05.06. 整数转换
 * https://leetcode-cn.com/problems/convert-integer-lcci/
 * 
 * 
整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。

示例1:

 输入：A = 29 （或者0b11101）, B = 15（或者0b01111）
 输出：2
示例2:

 输入：A = 1，B = 2
 输出：2
提示:

A，B范围在[-2147483648, 2147483647]之间
*/

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var convertInteger = function (A, B) {
  let count = 0
  while (A || B) {
    let a = A & 1
    let b = B & 1

    if (a !== b) {
      count++
    }
    A >>>= 1
    B >>>= 1
  }
  return count
}

write('algorithms: 面试题 05.06. 整数转换', 'title')

write(convertInteger(29, 15)) // 2
write(convertInteger(1, 2)) // 2

// tag: 位运算
