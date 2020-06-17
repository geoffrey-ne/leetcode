/**
 * [中等]6. Z 字形变换
 * https://leetcode-cn.com/problems/zigzag-conversion/
 * 
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：

L   C   I   R
E T O E S I I G
E   D   H   N
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
示例 1:

输入: s = "LEETCODEISHIRING", numRows = 3
输出: "LCIRETOESIIGEDHN"
示例 2:

输入: s = "LEETCODEISHIRING", numRows = 4
输出: "LDREOEIIECIHNTSG"
解释:

3
L   C   I   R
E T O E S I I G
E   D   H   N

4
L     D     R
E   O E   I I
E C   I H   N
T     S     G

5
L     I
E   E S    G
E  D  H   N
T O   I I
C     R


 */

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1 || s.length <= numRows) {
    return s
  }
  let res = ''
  for (let i = 0; i < numRows; i++) {
    res += s[i]
    let j = i
    let isReverse = false
    while (j < s.length) {
      const step = !isReverse ? (numRows - i - 1) * 2 : i * 2
      isReverse = !isReverse
      j += step
      if (j < s.length && step > 0) {
        res += s[j]
      }
    }
  }
  return res
}

write('algorithms: 6. Z 字形变换', 'title')

write(convert('A', 2)) // A
write(convert('LEETCODEISHIRING', 3)) // LCIRETOESIIGEDHN
write(convert('LEETCODEISHIRING', 4)) // LDREOEIIECIHNTSG
write(convert('LEETCODEISHIRING', 5)) // LIEESGEDHNTOIICR
