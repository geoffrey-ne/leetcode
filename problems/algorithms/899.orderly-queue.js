/**
 * [困难]899. 有序队列
 * https://leetcode-cn.com/problems/orderly-queue/
 * 
 * 
给定一个字符串 s 和一个整数 k 。你可以从 s 的前 k 个字母中选择一个，并把它加到字符串的末尾。

返回 在应用上述步骤的任意数量的移动后，字典上最小的字符串 。

示例 1：

输入：s = "cba", k = 1
输出："acb"
解释：
在第一步中，我们将第一个字符（“c”）移动到最后，获得字符串 “bac”。
在第二步中，我们将第一个字符（“b”）移动到最后，获得最终结果 “acb”。
示例 2：

输入：s = "baaca", k = 3
输出："aaabc"
解释：
在第一步中，我们将第一个字符（“b”）移动到最后，获得字符串 “aacab”。
在第二步中，我们将第三个字符（“c”）移动到最后，获得最终结果 “aaabc”。


提示：

1 <= k <= S.length <= 1000
s 只由小写字母组成。

*/

/**
 * k > 1时永远可以找到最小的，所以只要比较k=1时的内容就行了
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  if (k === 1) {
    let ans = s
    for (let i = 0; i < s.length - 1; ++i) {
      const n = s.length
      s = s.substring(1, n) + s[0]
      ans = ans < s ? ans : s
    }
    return ans
  }
  return [...s].sort().join('')
}

write('algorithms: 899. 有序队列', 'title')

write(orderlyQueue('cba', 1)) // 'acb'
write(orderlyQueue('baaca', 3)) // 'aaabc'

// tag: 队列；最小表示法；WIP
