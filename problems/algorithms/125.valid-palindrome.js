/**
 * [简单]125. 验证回文串
 * https://leetcode-cn.com/problems/valid-palindrome/
 * 
 * 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let start = 0
  let end = s.length - 1
  const reg = /[a-z0-9]/i
  while (start < end) {
    if (!reg.test(s[start])) {
      start++
    } else if (!reg.test(s[end])) {
      end--
    } else if (s[start].toLowerCase() !== s[end].toLowerCase()) {
      return false
    } else {
      start++
      end--
    }
  }
  return true
}

write('algorithms: 125. 验证回文串', 'title')

write(isPalindrome('A man, a plan, a canal: Panama')) // true
write(isPalindrome('race a car')) // false
