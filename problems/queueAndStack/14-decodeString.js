/**
 * 字符串解码：https://leetcode-cn.com/explore/learn/card/queue-stack/220/conclusion/890/
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ']') {
      if (s[i] === '[') {
        stack.push(s[i])
      } else {
        let cur = ''
        if (/\d/.test(s[i])) {
          while (/\d/.test(s[i]) && i < s.length) {
            cur += s[i++]
          }
        } else {
          while (/[a-z]/i.test(s[i]) && i < s.length) {
            cur += s[i++]
          }
        }
        i--
        stack.push(cur)
      }
    } else {
      let curStr = ''
      while (stack.length && stack[stack.length - 1] !== '[') {
        curStr = stack.pop() + curStr
      }
      // pop [
      stack.pop()
      const num = parseInt(stack.pop())

      stack.push(new Array(num).fill(curStr).join(''))
    }
  }
  return stack.join('')
}

var decodeString2 = function(s) {
  const stack = []
  let multi = 0
  let res = ''
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (cur === '[') {
      stack.push([multi, res])
      res = ''
      multi = 0
    } else if (cur === ']') {
      const [curMulti, lastRes] = stack.pop()
      res = lastRes + new Array(curMulti).fill(res).join('')
    } else if (cur >= '0' && cur <= '9') {
      multi = multi * 10 + parseInt(cur)
    } else {
      res += cur
    }
  }
  return res
}

write('queueAndStack 14. decodeString', 'title')

/**
 * 给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

s = "3[a]2[bc]", 返回 "aaabcbc".
s = "3[a2[c]]", 返回 "accaccacc".
s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
 */

write(decodeString('3[a]2[bc]')) // "aaabcbc"
write(decodeString('3[a10[c]]')) // "accaccacc"
write(decodeString('2[abc]3[cd]ef')) // "abcabccdcdcdef"
write(decodeString('3[a]2[b4[F]c]')) // "aaabFFFFcbFFFFc"
