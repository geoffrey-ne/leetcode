/**
 * [中等]516. 最长回文子序列
 * https://leetcode-cn.com/problems/longest-palindromic-subsequence/
 * 
 * 
给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。

示例 1:
输入:

"bbbab"
输出:
4
一个可能的最长回文子序列为 "bbbb"。

示例 2:
输入:

"cbbd"
输出:
2
一个可能的最长回文子序列为 "bb"。

提示：

1 <= s.length <= 1000
s 只包含小写英文字母

 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dp = new Array(s.length).fill(0).map(() => new Array(s.length).fill(0))
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1
  }
  // 遍历方向决定循环方式
  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[0][s.length - 1]
}

write('algorithms: 516. 最长回文子序列', 'title')

write(longestPalindromeSubseq('bbbab')) // 4
write(longestPalindromeSubseq('cbbd')) // 2

// tag: 字符串；dp
