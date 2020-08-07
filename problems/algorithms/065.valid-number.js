/**
 * [困难]65. 有效数字
 * https://leetcode-cn.com/problems/valid-number/
 * 
 * 
验证给定的字符串是否可以解释为十进制数字。

例如:

"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false

说明: 我们有意将问题陈述地比较模糊。在实现代码之前，你应当事先思考所有可能的情况。这里给出一份可能存在于有效十进制数字中的字符列表：

数字 0-9
指数 - "e"
正/负号 - "+"/"-"
小数点 - "."
当然，在输入中，这些字符的上下文也很重要。

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim()
  const arr = s.split('e')
  if (arr.length === 1) {
    return isNumberWithoutE(arr[0])
  } else if (arr.length === 2) {
    return isNumberWithoutE(arr[0]) && isNumberWithoutE(arr[1], false)
  } else {
    return false
  }
}

function isNumberWithoutE(s, allowFloat) {
  if (s.length === 0) {
    return false
  }

  return isFuhao(s[0]) ? helper(s.slice(1), allowFloat) : helper(s, allowFloat)
}

function isFuhao(s) {
  return s === '+' || s === '-'
}

function helper(s, allowFloat = true) {
  if (s.length === 0) {
    return false
  }
  let maxOfDian = allowFloat ? 1 : 0
  for (let i = 0; i < s.length; i++) {
    const curS = s[i]
    if (curS === '.') {
      if (maxOfDian === 0) {
        return false
      } else if (i === 0) {
        if (!/[0-9]/.test(s[i + 1])) {
          return false
        }
      } else if (i === s.length - 1) {
        if (!/[0-9]/.test(s[i - 1])) {
          return false
        }
      }
      maxOfDian--
    } else if (!/[0-9]/.test(curS)) {
      return false
    }
  }
  return true
}

write('algorithms: 65. 有效数字', 'title')

write(isNumber('+.8')) // true
write(isNumber('4e+')) // false
write(isNumber('   ')) // false
write(isNumber('.1')) // true
write(isNumber('3.')) // true
write(isNumber('.')) // false
write(isNumber('.e1')) // false
write(isNumber('0')) // true
write(isNumber('0.1')) // true
write(isNumber('abc')) // false
write(isNumber('1 a')) // false
write(isNumber('1 2')) // false
write(isNumber('2e10')) // true
write(isNumber(' -90e3   ')) // true
write(isNumber(' 1e')) // false
write(isNumber('e3')) // false
write(isNumber(' 6e-1')) // true
write(isNumber(' 99e2.5 ')) // false
write(isNumber('53.5e93')) // true
write(isNumber(' --6 ')) // false
write(isNumber('-+3')) // false
write(isNumber('95a54e53')) // false

// tag: DFA
