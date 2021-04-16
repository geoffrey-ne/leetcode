/**
 * [简单]面试题 01.05. 一次编辑
 * https://leetcode-cn.com/problems/one-away-lcci/
 * 
 * 
字符串有三种编辑操作:插入一个字符、删除一个字符或者替换一个字符。 给定两个字符串，编写一个函数判定它们是否只需要一次(或者零次)编辑。

 

示例 1:

输入: 
first = "pale"
second = "ple"
输出: True
 

示例 2:

输入: 
first = "pales"
second = "pal"
输出: False

*/

/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
  if (Math.abs(first.length - second.length) > 1) {
    return false
  }
  let isChange = false
  let f = 0
  let s = 0
  while (f < first.length && s < second.length) {
    if (first[f] === second[s]) {
      f++
      s++
      continue
    }
    if (isChange) {
      return false
    }
    isChange = true
    if (first.length > second.length) {
      f++
    } else if (first.length < second.length) {
      s++
    } else {
      f++
      s++
    }
  }
  return true
}

write('algorithms: 面试题 01.05. 一次编辑', 'title')

write(oneEditAway('intention', 'execution')) // false
write(oneEditAway('park', 'spake')) // false
write(oneEditAway('park', 'spark')) // true
write(oneEditAway('pale', 'ple')) // true
write(oneEditAway('pales', 'pal')) // false

// tag: 字符串；
