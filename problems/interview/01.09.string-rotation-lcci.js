/**
 * [简单]面试题 01.09. 字符串轮转
 * https://leetcode-cn.com/problems/string-rotation-lcci/
 * 
 * 
字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。

示例1:

 输入：s1 = "waterbottle", s2 = "erbottlewat"
 输出：True
示例2:

 输入：s1 = "aa", s2 = "aba"
 输出：False
提示：

字符串长度在[0, 100000]范围内。
说明:

你能只调用一次检查子串的方法吗？
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function (s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  if ((s2 + s2).indexOf(s1) >= 0) {
    return true
  }
  return false
}

write('algorithms: 面试题 01.09. 字符串轮转', 'title')

write(isFlipedString('waterbottle', 'erbottlewat')) // true
write(isFlipedString('waterbottle', 'erbottlawat')) // false
write(isFlipedString('aa', 'aba')) // false

// tag: 字符串
