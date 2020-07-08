/**
 * [中等]43. 字符串相乘
 * https://leetcode-cn.com/problems/multiply-strings/
 * 
 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"
说明：

num1 和 num2 的长度小于110。
num1 和 num2 只包含数字 0-9。
num1 和 num2 均不以零开头，除非是数字 0 本身。
不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
通过次数71,567提交次数168,351

 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  if (num1 === '1') {
    return num2
  } else if (num2 === '1') {
    return num1
  }

  const resArr = []
  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      const mul = (num1[i] - '0') * (num2[j] - '0')
      addRes(resArr, num1.length - 1 - i + num2.length - 1 - j, mul)
    }
  }
  return arrToString(resArr)
}

function addRes(resArr, index, num) {
  if (num < 10) {
    addResLess10(resArr, index, num)
  } else {
    addResLess10(resArr, index, num % 10)
    addResLess10(resArr, index + 1, Math.floor(num / 10))
  }
}

function addResLess10(resArr, index, num) {
  if (typeof resArr[index] === 'undefined') {
    resArr[index] = [num]
  } else {
    resArr[index].push(num)
  }
}

function arrToString(arr) {
  let jinwei = 0
  let res = ''
  arr.forEach((list) => {
    let sum = 0
    list.forEach((num) => {
      sum += num
    })
    sum += jinwei
    res = `${sum % 10}${res}`
    jinwei = Math.floor(sum / 10)
  })
  if (jinwei !== 0) {
    res = `${jinwei}${res}`
  }
  return res
}

write('algorithms: 43. 字符串相乘', 'title')

write(multiply('123456789', '987654321')) // '121932631112635269'
write(multiply('123', '456')) // '56088'
write(multiply('123', '321')) // '39483'
write(multiply('999', '999')) // '998001'

// tag: 字符串；数学计算
