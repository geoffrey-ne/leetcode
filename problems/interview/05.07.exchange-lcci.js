/**
 * [简单]面试题 05.07. 配对交换
 * https://leetcode-cn.com/problems/exchange-lcci/
 * 
 * 
配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位0与位1交换，位2与位3交换，以此类推）。

示例1:

 输入：num = 2（或者0b10）
 输出 1 (或者 0b01)
示例2:

 输入：num = 3
 输出：3
提示:

num的范围在[0, 2^30 - 1]之间，不会发生整数溢出。

*/

/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
  if (num === 0) {
    return num
  }
  let res = []
  while (num > 0) {
    const first = num & 1
    num >>= 1
    const second = num & 1
    num >>= 1
    res.unshift(first, second)
  }
  return parseInt(res.join(''), 2)
}

write('algorithms: 面试题 05.07. 配对交换', 'title')

write(exchangeBits(22)) // 41
write(exchangeBits(10)) // 5
write(exchangeBits(5)) // 10
write(exchangeBits(6)) // 9
write(exchangeBits(2)) // 1
write(exchangeBits(3)) // 3

// tag: 位运算
