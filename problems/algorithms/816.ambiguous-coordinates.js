/**
 * [中等]816. 模糊坐标
 * https://leetcode-cn.com/problems/ambiguous-coordinates/
 * 
 * 
我们有一些二维坐标，如 "(1, 3)" 或 "(2, 0.5)"，然后我们移除所有逗号，小数点和空格，得到一个字符串S。
返回所有可能的原始字符串到一个列表中。

原始的坐标表示法不会存在多余的零，所以不会出现类似于"00", "0.0", "0.00", "1.0", "001", 
"00.01"或一些其他更小的数来表示坐标。此外，一个小数点前至少存在一个数，所以也不会出现“.1”形式的数字。

最后返回的列表可以是任意顺序的。而且注意返回的两个数字中间（逗号之后）都有一个空格。

1 23

111111

111 111

1.11 1.11


11 1111

12 3

0 0011
00 011
0001 1

示例 1:
输入: "(123)"
输出: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
示例 2:
输入: "(00011)"
输出:  ["(0.001, 1)", "(0, 0.011)"]
解释: 
0.0, 00, 0001 或 00.01 是不被允许的。
示例 3:
输入: "(0123)"
输出: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
示例 4:
输入: "(100)"
输出: [(10, 0)]
解释: 
1.0 是不被允许的。
 
提示:

4 <= S.length <= 12.
S[0] = "(", S[S.length - 1] = ")", 且字符串 S 中的其他元素都是数字。

 */

/**
 * @param {string} s
 * @return {string[]}
 */
var ambiguousCoordinates = function (s) {
  const n = s.length - 2
  const res = []
  s = s.slice(1, s.length - 1)
  for (let l = 1; l < n; ++l) {
    const lt = getPos(s.slice(0, l))
    if (lt.length === 0) {
      continue
    }
    const rt = getPos(s.slice(l))
    if (rt.length === 0) {
      continue
    }
    for (const i of lt) {
      for (const j of rt) {
        res.push('(' + i + ', ' + j + ')')
      }
    }
  }
  return res
}

const getPos = (s) => {
  const pos = []
  if (s[0] !== '0' || '0' === s) {
    pos.push(s)
  }
  for (let p = 1; p < s.length; ++p) {
    if ((p !== 1 && s[0] === '0') || s[s.length - 1] === '0') {
      continue
    }
    pos.push(s.slice(0, p) + '.' + s.slice(p))
  }
  return pos
}

write('algorithms: 816. 模糊坐标', 'title')

write(ambiguousCoordinates('(123)')) // ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
write(ambiguousCoordinates('(00011)')) // ["(0.001, 1)", "(0, 0.011)"]
write(ambiguousCoordinates('(0123)')) // ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
write(ambiguousCoordinates('(100)')) // [(10, 0)]

// tag: 枚举
