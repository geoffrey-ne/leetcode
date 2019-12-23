/**
 * 二进制求和：https://leetcode-cn.com/explore/learn/card/array-and-string/200/introduction-to-string/779/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  const maxLength = Math.max(a.length, b.length)
  a = paddingZero(a, maxLength)
  b = paddingZero(b, maxLength)
  let isJinwei = false
  const res = []
  for (let i = maxLength - 1; i >= 0; i--) {
    const curA = parseInt(a[i] || '0')
    const curB = parseInt(b[i] || '0')
    const sum = curA + curB + (isJinwei ? 1 : 0)
    if (parseInt(sum / 2) == 1) {
      isJinwei = true
      res.push(sum % 2)
    } else {
      isJinwei = false
      res.push(sum)
    }
  }
  if (isJinwei) {
    res.push(1)
  }
  return res.reverse().join('')
}

function paddingZero(str, length) {
  if (str.length === length) {
    return str
  }

  return (
    Array(length - str.length)
      .fill(0)
      .join('') + str
  )
}

/**
给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 */

write('arrayAndString 7. addBinary', 'title')

write(addBinary('11', '1')) // '100'
write(addBinary('1010', '1011')) // '10101'
