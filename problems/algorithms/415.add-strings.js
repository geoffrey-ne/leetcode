/**
 * [简单]415. 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 * 
 * 
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。

提示：

num1 和num2 的长度都小于 5100
num1 和num2 都只包含数字 0-9
num1 和num2 都不包含任何前导零
你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式

*/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const maxLength = Math.max(num1.length, num2.length)
  num1 = padding(num1, maxLength)
  num2 = padding(num2, maxLength)
  let isJinWei = false
  let res = ''
  for (let i = maxLength - 1; i >= 0; i--) {
    const n1 = Number(num1[i])
    const n2 = Number(num2[i])
    let sum = n1 + n2 + (isJinWei ? 1 : 0)
    if (sum < 10) {
      isJinWei = false
    } else {
      isJinWei = true
      sum = sum - 10
    }
    res = String(sum) + res
  }
  if (isJinWei) {
    res = '1' + res
  }
  return res
}

function padding(num, maxLength) {
  let count = maxLength - num.length
  const prefix = new Array(count).fill('0').join('')
  return prefix + num
}

write('algorithms: 415. 字符串相加', 'title')

write(addStrings('123', '456')) // 579

// tag: 字符串；运算
