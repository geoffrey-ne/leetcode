/**
 * [简单]1758. 生成交替二进制字符串的最少操作数
 * https://leetcode-cn.com/problems/minimum-changes-to-make-alternating-binary-string/
 * 
给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。

交替字符串 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 "010" 是交替字符串，而字符串 "0100" 不是。

返回使 s 变成 交替字符串 所需的 最少 操作数。

示例 1：

输入：s = "0100"
输出：1
解释：如果将最后一个字符变为 '1' ，s 就变成 "0101" ，即符合交替字符串定义。
示例 2：

输入：s = "10"
输出：0
解释：s 已经是交替字符串。
示例 3：

输入：s = "1111"
输出：2
解释：需要 2 步操作得到 "0101" 或 "1010" 。
 


提示：

1 <= s.length <= 104
s[i] 是 '0' 或 '1'

*/

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s) {
  let num1 = 0
  let num2 = 0
  let isOdd = false
  let cur = s[0]
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[i - 1]) {
      cur += s[i]
    } else {
      if (isOdd) {
        num1 += cur.length
      } else {
        num2 += cur.length
      }
      isOdd = !isOdd
      cur = s[i]
    }
  }
  if (isOdd) {
    num1 += cur.length
  } else {
    num2 += cur.length
  }
  return Math.min(num1, num2)
}

var minOperations1 = function (s) {
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c !== String.fromCharCode('0'.charCodeAt() + (i % 2))) {
      cnt++
    }
  }
  return Math.min(cnt, s.length - cnt)
}

write('algorithms: 1758. 生成交替二进制字符串的最少操作数', 'title')

write(minOperations('0100')) // 1
write(minOperations('10')) // 0
write(minOperations('1111')) // 2
write(minOperations('100101010')) // 2
write(minOperations('10001010')) // 1

// tags: 字符串
