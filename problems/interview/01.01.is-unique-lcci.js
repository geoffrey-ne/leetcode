/**
 * [简单]面试题 01.01. 判定字符是否唯一
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * 
 * 
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false 
示例 2：

输入: s = "abc"
输出: true
限制：

0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。

*/

/**
 * 位运算
 *
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let mask = 0
  for (let i = 0; i < astr.length; i++) {
    const res = 1 << (astr.charCodeAt(i) - 32)
    if (mask & res) {
      return false
    }
    mask |= res
  }
  return true
}

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique1 = function (astr) {
  const hashMap = {}
  for (let i = 0; i < astr.length; i++) {
    if (typeof hashMap[astr[i]] !== 'undefined') {
      return false
    }
    hashMap[astr[i]] = true
  }
  return true
}

write('algorithms: 面试题 01.01. 判定字符是否唯一', 'title')

write(isUnique('leetcode')) // false
write(isUnique('abc')) // true
write(isUnique('abcdefghijkghijk')) // false

// tag: 字符串；位运算
