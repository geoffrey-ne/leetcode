/**
 * [简单]面试题 01.02. 判定是否互为字符重排
 * https://leetcode-cn.com/problems/check-permutation-lcci/
 * 
 * 
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100

*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var CheckPermutation = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  const map = {}
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = typeof map[s1[i]] === 'undefined' ? 1 : map[s1[i]] + 1
    map[s2[i]] = typeof map[s2[i]] === 'undefined' ? -1 : map[s2[i]] - 1
  }
  return Object.keys(map).every((char) => map[char] === 0)
}

write('algorithms: 面试题 01.02. 判定是否互为字符重排', 'title')

write(CheckPermutation('abc', 'bca')) // true
write(CheckPermutation('abc', 'bad')) // false

// tag: 字符串；
