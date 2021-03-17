/**
 * [困难]115. 不同的子序列
 * https://leetcode-cn.com/problems/distinct-subsequences/
 * 
 * 
给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。

字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）

题目数据保证答案符合 32 位带符号整数范围。

示例 1：

输入：s = "rabbbit", t = "rabbit"
输出：3
解释：
如下图所示, 有 3 种可以从 s 中得到 "rabbit" 的方案。
(上箭头符号 ^ 表示选取的字母)
rabbbit
^^^^ ^^
rabbbit
^^ ^^^^
rabbbit
^^^ ^^^
示例 2：

输入：s = "babgbag", t = "bag"
输出：5
解释：
如下图所示, 有 5 种可以从 s 中得到 "bag" 的方案。 
(上箭头符号 ^ 表示选取的字母)
babgbag
^^ ^
babgbag
^^    ^
babgbag
^    ^^
babgbag
  ^  ^^
babgbag
    ^^^
 

提示：

0 <= s.length, t.length <= 1000
s 和 t 由英文字母组成

*/

/**
 * DP解法
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
  const m = s.length,
    n = t.length
  if (m < n) {
    return 0
  }
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 0; i <= m; i++) {
    dp[i][n] = 1
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (s[i] == t[j]) {
        dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j]
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }
  return dp[0][0]
}

/**
 * 递归解法
 *
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct1 = function (s, t) {
  if (t.length === 0) {
    return 0
  }
  return helper(s, t)
}

function helper(s, t) {
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < t.length) {
      break
    } else if (s.length - i === t.length) {
      num += s.slice(i) === t ? 1 : 0
      break
    }
    if (s[i] !== t[0]) {
      continue
    }
    if (t.length === 1) {
      num++
    } else {
      num += helper(s.slice(i + 1), t.slice(1))
    }
  }
  return num
}

write('algorithms: 115. 不同的子序列', 'title')

write(numDistinct('rabbbit', 'rabbit')) // 3
write(numDistinct('babgbag', 'bag')) // 5

// tag: 递归；dp
