/**
 * 最长公共前缀：https://leetcode-cn.com/explore/learn/card/array-and-string/200/introduction-to-string/781/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return ''
  }
  if (strs.length === 1) {
    return strs[0]
  }
  let sameIndex = 0
  const minLength = strs.reduce((prev, cur) => {
    return Math.min(prev, cur.length)
  }, strs[0].length)
  while (sameIndex < minLength && strs.every(item => item[sameIndex] == strs[0][sameIndex])) {
    sameIndex++
  }
  return strs[0].slice(0, sameIndex)
}

/**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。
 */

write('arrayAndString 9. longestCommonPrefix', 'title')

write(longestCommonPrefix(['flower', 'flow', 'flight'])) // "fl"
write(longestCommonPrefix(['dog', 'racecar', 'car'])) // ""
write(longestCommonPrefix(['', '', ''])) // ""
