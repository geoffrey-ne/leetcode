/**
 * [中等]44. 通配符匹配
 * https://leetcode-cn.com/problems/wildcard-matching/
 * 
给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。

'?' 可以匹配任何单个字符。
'*' 可以匹配任意字符串（包括空字符串）。
两个字符串完全匹配才算匹配成功。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。
示例 2:

输入:
s = "aa"
p = "*"
输出: true
解释: '*' 可以匹配任意字符串。
示例 3:

输入:
s = "cb"
p = "?a"
输出: false
解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
示例 4:

输入:
s = "adceb"
p = "*a*b"
输出: true
解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
示例 5:

输入:
s = "acdcb"
p = "a*c?b"
输出: false

 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let minLen = 0
  let newP = ''
  let prev = ''
  for (let i = 0; i < p.length; i++) {
    const cur = p[i]
    if (cur !== '*') {
      newP += cur
      minLen++
      prev = cur
    } else {
      if (prev !== '*') {
        newP += cur
      }
      prev = '*'
    }
  }
  const cache = []
  return helper(s, newP, 0, 0, minLen, cache)
}

function helper(s, p, i, j, minLen, cache) {
  const c = readCache(cache, i, j)
  if (typeof c !== 'undefined') {
    return c
  }
  let res = false
  if (p.length === j) {
    res = s.length === i
  } else if (s.length === i) {
    res = p.length === j || (p.length - 1 === j && p[j] === '*')
  } else if (s.length - i < minLen) {
    res = false
  } else if (s[i] === p[j] || p[j] === '?') {
    res = helper(s, p, i + 1, j + 1, minLen - 1, cache)
  } else if (p[j] === '*') {
    res = helper(s, p, i, j + 1, minLen, cache) || helper(s, p, i + 1, j, minLen, cache)
  }
  writeCache(cache, i, j, res)
  return res
}

function readCache(cache, i, j) {
  return cache[i] && cache[i][j]
}

function writeCache(cache, i, j, value) {
  if (!cache[i]) {
    cache[i] = []
  }
  cache[i][j] = value
}

write('algorithms: 44. 通配符匹配', 'title')

write(isMatch('mississippi', 'm??*ss*?i*pi')) // false
write(isMatch('aaaa', '***a')) // true
write(isMatch('abefcdgiescdfimde', 'ab*cd?i*de')) // true
write(isMatch('aaabbbaabaaaaababaabaaabbabbbbbbbbaabababbabbbaaaaba', 'a*******b')) // false
write(isMatch('ho', 'ho**')) // true
write(isMatch('aa', 'a')) // false
write(isMatch('aa', '*')) // true
write(isMatch('cb', '?a')) // false
write(isMatch('adceb', '*a*b')) // true
write(isMatch('acdcb', 'a*c?b')) // false
write(
  isMatch(
    'abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb',
    '**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb'
  )
) // false

// tag: 正则;dp
