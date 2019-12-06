/**
 * 有效的括号：https://leetcode-cn.com/explore/learn/card/queue-stack/218/stack-last-in-first-out-data-structure/878/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = []
  const pair = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i = 0; i < s.length; i++) {
    const cur = s[i]
    if (/\(|\[|\{/.test(cur)) {
      stack.push(cur)
    } else {
      if (stack[stack.length - 1] === pair[cur] && pair[cur] !== undefined) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

write('queueAndStack 5. isValid', 'title')

write(isValid('()')) // true
write(isValid('()[]{}')) // true
write(isValid('(]')) // false
write(isValid('([)]')) // false
write(isValid('{[]}')) // true
