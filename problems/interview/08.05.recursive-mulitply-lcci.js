/**
 * [中等]面试题 08.05. 递归乘法
 * https://leetcode-cn.com/problems/recursive-mulitply-lcci/
 * 
递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。

示例1:

 输入：A = 1, B = 10
 输出：10
示例2:

 输入：A = 3, B = 4
 输出：12
提示:

保证乘法范围不会溢出

*/

/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
  debugger
  let big = A
  let small = B
  if (A < B) {
    big = B
    small = A
  }
  const lefts = []
  while (small > 1) {
    if (small & 1) {
      lefts.push(big)
      small--
    }
    // 可以被2整除的话，不知道能不能使用%运算，就没用
    while (small > 1 && !(small & 1)) {
      small >>= 1
      big <<= 1
    }
  }
  for (let i = 0; i < lefts.length; i++) {
    big += lefts[i]
  }
  return big
}

write('algorithms: 面试题 08.05. 递归乘法', 'title')

write(multiply(1, 10)) // 10
write(multiply(13, 30)) // 390
write(multiply(3, 4)) // 12

// tag: 运算符

30 * 12 + 30

60 * 6 + 30
120 * 3 + 30
240 + 120 + 30

3 * 13

3 * (2 * 2 * 3) + 3
