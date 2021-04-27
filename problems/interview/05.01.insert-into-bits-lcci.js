/**
 * [简单]面试题 05.01. 插入
 * https://leetcode-cn.com/problems/insert-into-bits-lcci/
 * 
 * 
给定两个整型数字 N 与 M，以及表示比特位置的 i 与 j（i <= j，且从 0 位开始计算）。

编写一种方法，使 M 对应的二进制数字插入 N 对应的二进制数字的第 i ~ j 位区域，不足之处用 0 补齐。具体插入过程如图所示。

题目保证从 i 位到 j 位足以容纳 M， 例如： M = 10011，则 i～j 区域至少可容纳 5 位。

示例1:

 输入：N = 1024(10000000000), M = 19(10011), i = 2, j = 6
 输出：N = 1100(10001001100)
 
示例2:

 输入： N = 0, M = 31(11111), i = 0, j = 4
 输出：N = 31(11111)

*/

/**
 * 字符串运算
 *
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits1 = function (N, M, i, j) {
  let Nstr = N.toString(2).split('').reverse()
  const Mstr = M.toString(2).split('').reverse()

  for (let a = i; a <= j; a++) {
    Nstr[a] = typeof Mstr[a - i] === 'undefined' ? '0' : Mstr[a - i]
  }
  return parseInt(Nstr.reverse().join(''), 2)
}

/**
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function (N, M, i, j) {
  // 将i到j之间的数字置0
  for (let k = i; k <= j; k++) {
    if (N & (1 << k)) {
      N -= 1 << k
    }
  }
  // 然后加上M左移i位后的结果
  return (M << i) + N
}

write('algorithms: 面试题 05.01. 插入', 'title')

write(insertBits(1024, 19, 2, 6)) // 1100
write(insertBits(0, 31, 0, 4)) // 31
// // 1 111001 001000011001001101101001
write(insertBits(2032243561, 10, 24, 29)) // 1243714409
//  10001000010001111110 11000001101
// 11111000010011001001
write(insertBits(1143207437, 1017033, 11, 31)) // 2082885133

// tag: 位运算
