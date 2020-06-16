/**
 * [中等]5. 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindromic-substring/
 * 
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length
  if (len === 0 || len === 1) {
    return s
  }
  let res = ''
  let curRes = ''
  for (let i = 0; i < len - 1; i++) {
    curRes = s[i]
    if (i + 1 < len && s[i] === s[i + 1]) {
      curRes = ''
      let start = i
      let end = i + 1
      while (start >= 0 && end < len && s[start] === s[end]) {
        curRes = s[start] + curRes + s[end]
        start--
        end++
      }
      if (curRes.length > res.length) {
        res = curRes
      }
    }
    if (i - 1 >= 0 && i + 1 < len) {
      curRes = s[i]
      let start = i - 1
      let end = i + 1
      while (start >= 0 && end < len && s[start] === s[end]) {
        curRes = s[start] + curRes + s[end]
        start--
        end++
      }
      if (curRes.length > res.length) {
        res = curRes
      }
    }
  }
  return curRes.length > res.length ? curRes : res
}

write('algorithms: 5. 最长回文子串', 'title')
write(longestPalindrome('cbbd')) // cbbd
write(longestPalindrome('ccc')) // ccc
write(longestPalindrome('ac')) // a
write(longestPalindrome('babad')) // bab
write(longestPalindrome('cbbd')) //bb
