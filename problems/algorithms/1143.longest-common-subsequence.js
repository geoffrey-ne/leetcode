/**
 * [中等]1143. 最长公共子序列
 * https://leetcode-cn.com/problems/longest-common-subsequence/
 * 
 * 
给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。

一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。

例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。

示例 1：

输入：text1 = "abcde", text2 = "ace" 
输出：3  
解释：最长公共子序列是 "ace" ，它的长度为 3 。
示例 2：

输入：text1 = "abc", text2 = "abc"
输出：3
解释：最长公共子序列是 "abc" ，它的长度为 3 。
示例 3：

输入：text1 = "abc", text2 = "def"
输出：0
解释：两个字符串没有公共子序列，返回 0 。

提示：

1 <= text1.length, text2.length <= 1000
text1 和 text2 仅由小写英文字符组成。

   ''   a   b   c    d   e
'' 0    0   0   0    0   0
a  0    1   1   1    1   1
c  0    1   1   2    2   2
e  0    1   1   2    2   3

dp[i][j] = dp[i - 1][j]

*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  if (text1.length === 0 || text2.length === 0) {
    return 0
  }
  let dp = new Array(text1.length + 1).fill(0)
  for (let i = 1; i <= text2.length; i++) {
    const newDp = new Array(text1.length + 1).fill(0)
    for (let j = 1; j <= text1.length; j++) {
      if (text2[i - 1] === text1[j - 1]) {
        newDp[j] = dp[j - 1] + 1
      } else {
        newDp[j] = Math.max(newDp[j - 1], dp[j])
      }
    }
    dp = newDp
  }
  return dp[dp.length - 1]
}

write('algorithms: 1143. 最长公共子序列', 'title')

write(longestCommonSubsequence('abcde', 'ace')) // 3
write(longestCommonSubsequence('abc', 'abc')) // 3
write(longestCommonSubsequence('abc', 'def')) // 0

// tag: 递归；dp
