/**
 * [简单]]67. 二进制求和
 * https://leetcode-cn.com/problems/add-binary/
 * 
 * 
给你两个二进制字符串，返回它们的和（用二进制表示）。

输入为 非空 字符串且只包含数字 1 和 0。

示例 1:

输入: a = "11", b = "1"
输出: "100"
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
 
提示：

每个字符串仅由字符 '0' 或 '1' 组成。
1 <= a.length, b.length <= 10^4
字符串如果不是 "0" ，就都不含前导零。

 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let res = ''
  let jinwei = '0'
  let indexA = a.length - 1
  let indexB = b.length - 1
  while (indexA >= 0 || indexB >= 0) {
    const curA = a[indexA] || '0'
    const curB = b[indexB] || '0'
    let curRes = ''
    if (curA === '1' && curB === '1') {
      curRes = jinwei
      jinwei = '1'
    } else if (curA === '0' && curB === '0') {
      curRes = jinwei
      jinwei = '0'
    } else if (jinwei === '1') {
      curRes = '0'
    } else {
      curRes = '1'
    }
    res = curRes + res
    indexA--
    indexB--
  }
  return jinwei === '1' ? `1${res}` : res
}

write('algorithms: 67. 二进制求和', 'title')

write(addBinary('11', '1')) // 100
write(addBinary('1010', '1011')) // 10101

// tag: 二进制;位运算
