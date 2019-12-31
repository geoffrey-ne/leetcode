/**
 * 反转字符串中的单词 III：https://leetcode-cn.com/explore/learn/card/array-and-string/202/conclusion/794/
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(/\s/)
    .map(item =>
      item === ''
        ? ''
        : item
            .split('')
            .reverse()
            .join('')
    )
    .join(' ')
}

function reverse(s, start, end) {
  while (start < end) {
    const temp = s[start]
    s[start++] = s[end]
    s[end--] = temp
  }
}

/**
  给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

  示例 1:

  输入: "Let's take LeetCode contest"
  输出: "s'teL ekat edoCteeL tsetnoc" 
  注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */

write('arrayAndString 19. reverseWords', 'title')

write(reverseWords('')) // ""
write(reverseWords('a')) // "a"
write(reverseWords("Let's take LeetCode contest")) // "s'teL ekat edoCteeL tsetnoc"
write(reverseWords('  hello world!  ')) // "  olleh !dlrow  "
write(reverseWords('  hello    world!  ')) // "  olleh    !dlrow  "
