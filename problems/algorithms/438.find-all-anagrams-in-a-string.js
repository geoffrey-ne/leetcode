/**
 * [中等]438. 找到字符串中所有字母异位词
 * https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/
 * 
 * 
给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。

字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。

说明：

字母异位词指字母相同，但排列不同的字符串。
不考虑答案输出的顺序。
示例 1:

输入:
s: "cbaebabacd" p: "abc"

输出:
[0, 6]

解释:
起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 示例 2:

输入:
s: "abab" p: "ab"

输出:
[0, 1, 2]

解释:
起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。

*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const res = []
  const pMap = {}
  const keys = []
  for (let i = 0; i < p.length; i++) {
    const char = p[i]
    if (typeof pMap[char] === 'undefined') {
      pMap[char] = 1
      keys.push(char)
    } else {
      pMap[char]++
    }
  }

  let sMap = { ...pMap }
  let cur = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    // 不存在时重置
    if (typeof sMap[char] === 'undefined') {
      cur = ''
      sMap = { ...pMap }
      continue
    }
    // 存在时减去需要的数量
    cur += char
    sMap[char]--

    if (cur.length === p.length) {
      // 全是0代表相同
      if (keys.every((key) => sMap[key] === 0)) {
        res.push(i - cur.length + 1)
      }
      // pop first
      sMap[cur[0]]++
      cur = cur.slice(1)
    }
  }
  return res
}

write('algorithms: 438. 找到字符串中所有字母异位词', 'title')

write(findAnagrams('cbaebabacd', 'abc')) // [0, 6]
write(findAnagrams('abab', 'ab')) // [0, 1, 2]

// tag: 字符串；滑动窗口
