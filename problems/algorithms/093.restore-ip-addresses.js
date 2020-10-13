/**
 * [中等]93. 复原IP地址
 * https://leetcode-cn.com/problems/restore-ip-addresses/
 * 
 * 
给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。

有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效的 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效的 IP 地址。

 

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]
示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
示例 3：

输入：s = "1111"
输出：["1.1.1.1"]
示例 4：

输入：s = "010010"
输出：["0.10.0.10","0.100.1.0"]
示例 5：

输入：s = "101023"
输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
 

提示：

0 <= s.length <= 3000
s 仅由数字组成

 */

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const resList = []
  helper(s, [], resList)
  return resList
}

function helper(s, res, resList) {
  for (let i = 0; i < s.length && i < 3; i++) {
    const curNum = Number(s.slice(0, i + 1))
    // 当前数字合理
    if (curNum <= 255 && curNum.toString() === s.slice(0, i + 1)) {
      const subS = s.slice(i + 1)
      res.push(curNum)
      if (res.length === 4 && subS.length === 0) {
        resList.push(res.join('.'))
      } else if (isValidLen(subS, res)) {
        helper(subS, res, resList)
      }
      res.pop()
    }
  }
}

// 剩下的字符足够剩余的ip位数
// 剩下的字符未超过剩余ip最大位数
function isValidLen(s, res) {
  if (s.length >= 4 - res.length && s.length <= (4 - res.length) * 3 && res.length < 4) {
    return true
  }
  return false
}

write('algorithms: 93. 复原IP地址', 'title')

write(restoreIpAddresses('25525511135')) // ["255.255.11.135","255.255.111.35"]
write(restoreIpAddresses('0000')) // ["0.0.0.0"]
write(restoreIpAddresses('1111')) // ["1.1.1.1"]
write(restoreIpAddresses('010010')) // ["0.10.0.10","0.100.1.0"]
write(restoreIpAddresses('101023')) // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// tag: 回溯剪枝
