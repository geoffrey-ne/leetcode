/**
 * [中等]1016. 子串能表示从 1 到 N 数字的二进制串
 * https://leetcode-cn.com/problems/binary-string-with-substrings-representing-1-to-n/
 * 
 * 
给定一个二进制字符串 s 和一个正整数 n，如果对于 [1, n] 范围内的每个整数，其二进制表示都是 s 的 子字符串 ，就返回 true，否则返回 false 。

子字符串 是字符串中连续的字符序列。

示例 1：

100

1
10
11
100
101
110

1 1     1
2 10    10
3 11    110
4 100   1100
5 101   101100
6 110   101100
7 111   11101100
8 1000  111011000
9 1001  100111011000
10 1010 

11


1111 15
1110


输入：s = "0110", n = 3
输出：true
示例 2：

输入：s = "0110", n = 4
输出：false
 

提示：

1 <= s.length <= 1000
s[i] 不是 '0' 就是 '1'
1 <= n <= 109

*/

/**
 * 暴力解法
 *
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString1 = function (s, n) {
  for (let i = 0; i < n; i++) {
    if (!s.includes((i + 1).toString(2))) {
      return false
    }
  }
  return true
}

/**
 * 计算s的所有子串的二进制数，如果该数字再[1, n]内，则存入hash表，判断最终hash表的长度是否等于n
 *
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function (s, n) {
  const hashMap = {}
  let count = 0
  for (let i = 0, m = s.length; i < m; i++) {
    let x = s[i] - '0'
    if (x === 0) {
      continue
    }
    for (let j = i + 1; x <= n; j++) {
      if (!hashMap[x]) {
        hashMap[x] = true
        count++
      }
      if (j === m) {
        break
      }
      x = (x << 1) | (s[j] - '0') // 子串 [i, j]的二进制数
    }
  }

  return count === n
}

write('algorithms: 1016. 子串能表示从 1 到 N 数字的二进制串', 'title')

write(queryString('0110', 3)) // true
write(queryString('0110', 4)) // false

// tag:
