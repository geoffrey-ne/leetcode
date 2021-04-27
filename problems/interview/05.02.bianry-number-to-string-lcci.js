/**
 * [中等]面试题 05.02. 二进制数转字符串
 * https://leetcode-cn.com/problems/bianry-number-to-string-lcci/
 * 
 * 
二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字无法精确地用32位以内的二进制表示，则打印“ERROR”。

示例1:

 输入：0.625(5/8)
 输出："0.101"

示例2:

 输入：0.1
 输出："ERROR"
 提示：0.1无法被二进制准确表示

提示：

32位包括输出中的"0."这两位。


0.1011

0.5 0.25 0.125 0.0625

*/

/**
 * @param {number} num
 * @return {string}
 */
var printBin = function (num) {
  let res = '0.'
  while (num.toFixed(0) !== String(num)) {
    const cur = num * 2
    if (String(cur).length === String(num).length) {
      return 'ERROR'
    } else {
      if (cur >= 1) {
        res += '1'
        num = cur - 1
      } else {
        res += '0'
        num = cur
      }
    }
  }

  return res
}

write('algorithms: 面试题 05.02. 二进制数转字符串', 'title')

write(printBin(0.625)) // "0.101"
write(printBin(0.1)) // "ERROR"
write(printBin(0.15)) // "ERROR"
write(printBin(0.5)) // "0.1"
write(printBin(0.105)) // "ERROR"
write(printBin(0.0625)) // "0.0001"

// tag: 位运算
