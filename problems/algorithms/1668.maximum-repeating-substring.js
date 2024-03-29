/**
 * [简单]1668. 最大重复子字符串
 * https://leetcode-cn.com/problems/maximum-repeating-substring/
 * 
 * 
给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，
那么单词 word 的 重复值为 k 。
单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。
如果 word 不是 sequence 的子串，那么重复值 k 为 0 。

给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。

示例 1：

输入：sequence = "ababc", word = "ab"
输出：2
解释："abab" 是 "ababc" 的子字符串。
示例 2：

输入：sequence = "ababc", word = "ba"
输出：1
解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
示例 3：

输入：sequence = "ababc", word = "ac"
输出：0
解释："ac" 不是 "ababc" 的子字符串。
 

提示：

1 <= sequence.length <= 100
1 <= word.length <= 100
sequence 和 word 都只包含小写英文字母。

*/

/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  const n = sequence.length,
    m = word.length
  if (n < m) {
    return 0
  }

  const f = new Array(n).fill(0)
  for (let i = m - 1; i < n; ++i) {
    let valid = true
    for (let j = 0; j < m; ++j) {
      if (sequence[i - m + j + 1] !== word[j]) {
        valid = false
        break
      }
    }
    if (valid) {
      f[i] = (i === m - 1 ? 0 : f[i - m]) + 1
    }
  }

  return _.max(f)
}

// KMP
var maxRepeating = function (sequence, word) {
  const n = sequence.length,
    m = word.length
  if (n < m) {
    return 0
  }

  const fail = new Array(n).fill(-1)
  for (let i = 1; i < m; ++i) {
    let j = fail[i - 1]
    while (j !== -1 && word[j + 1] !== word[i]) {
      j = fail[j]
    }
    if (word[j + 1] === word[i]) {
      fail[i] = j + 1
    }
  }

  const f = new Array(n).fill(0)
  let j = -1
  for (let i = 0; i < n; ++i) {
    while (j !== -1 && word[j + 1] !== sequence[i]) {
      j = fail[j]
    }
    if (word[j + 1] === sequence[i]) {
      ++j
      if (j === m - 1) {
        f[i] = (i >= m ? f[i - m] : 0) + 1
        j = fail[j]
      }
    }
  }

  return _.max(f)
}

write('algorithms: 1668. 最大重复子字符串', 'title')

write(maxRepeating('ababc', 'ab')) // 2
write(maxRepeating('ababc', 'ba')) // 1
write(maxRepeating('ababc', 'ac')) // 0
write(maxRepeating('ababaababababa', 'ab')) // 4

// tags: 序列DP；线性DP；KMP算法
