/**
 * [简单]]14. 最长公共前缀
 * https://leetcode-cn.com/problems/longest-common-prefix/
 * 
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

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || strs.length === 0) {
    return ''
  }

  if (strs.length === 1) {
    return strs[0]
  }

  let res = strs[0]
  let lastIndex = res.length - 1

  if (lastIndex < 0) {
    return ''
  }

  for (let i = 1; i < strs.length; i++) {
    if (res.length === 0) {
      return ''
    }
    let j = 0
    const curStr = strs[i]
    while (j < res.length && j < curStr.length) {
      if (res[j] !== curStr[j]) {
        break
      }
      j++
    }
    res = res.slice(0, j)
  }
  return res
}

write('algorithms: 14. 最长公共前缀', 'title')

write(longestCommonPrefix(['flower', 'flow', 'flight'])) // 'fl'
write(longestCommonPrefix(['dog', 'racecar', 'car'])) // ''
