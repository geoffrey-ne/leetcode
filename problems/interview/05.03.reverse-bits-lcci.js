/**
 * [简单]面试题 05.03. 翻转数位
 * https://leetcode-cn.com/problems/reverse-bits-lcci/
 * 
 * 
给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。

示例 1：

输入: num = 1775(11011101111)
输出: 8
示例 2：

输入: num = 7(0111)
输出: 4

*/

/**
 * @param {number} num
 * @return {number}
 */
var reverseBits = function (num) {
  const str = (num >>> 0).toString(2)
  let cur = 0
  let pre = 0
  let res = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '1') {
      cur += 1
    } else {
      res = Math.max(res, pre + cur + 1)
      pre = cur
      cur = 0
    }
  }
  return Math.min(Math.max(res, pre + cur + 1), 32)
}

write('algorithms: 面试题 05.03. 翻转数位', 'title')

write(reverseBits(1775)) // 8
write(reverseBits(7)) // 4
// 1111111111111111111101111111110
write(reverseBits(2147482622)) // 30
write(reverseBits(-1)) // 32
write(reverseBits(-2)) // 32
write(reverseBits(-4)) // 31

// tag: 位运算
