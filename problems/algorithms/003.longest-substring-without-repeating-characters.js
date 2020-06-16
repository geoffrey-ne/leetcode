/**
 * [中等]3. 无重复字符的最长子串
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * 
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

示例 1:

输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length
  if (len === 0 || len === 1) {
    return len
  }
  let max = 1
  let start = 0
  let end = 1
  let curMax = 1
  const dict = new Set([s[start]])
  while (end < len) {
    if (!dict.has(s[end])) {
      curMax++
      dict.add(s[end])
    } else {
      max = Math.max(max, curMax)
      while (s[start] != s[end]) {
        dict.delete(s[start])
        start++
        curMax--
      }
      start++
    }
    end++
  }
  return Math.max(max, curMax)
}

write('algorithms: 3. 无重复字符的最长子串', 'title')
write(lengthOfLongestSubstring('au')) // 2
write(lengthOfLongestSubstring('pwwkew')) // 3
write(lengthOfLongestSubstring('abcabcbb')) // 3
