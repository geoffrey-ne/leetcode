/**
 * [中等]89. 格雷编码
 * https://leetcode-cn.com/problems/gray-code/
 * 
 * 
格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

格雷编码序列必须以 0 开头。

示例 1:

输入: 2
输出: [0,1,3,2]
解释:
00 - 0
01 - 1
11 - 3
10 - 2

对于给定的 n，其格雷编码序列并不唯一。
例如，[0,2,3,1] 也是一个有效的格雷编码序列。

00 - 0
10 - 2
11 - 3
01 - 1
示例 2:

输入: 0
输出: [0]
解释: 我们定义格雷编码序列必须以 0 开头。
     给定编码总位数为 n 的格雷编码序列，其长度为 2n。当 n = 0 时，长度为 20 = 1。
     因此，当 n = 0 时，其格雷编码序列为 [0]。


3

000 - 0
001 - 1
011 - 3
010 - 2
110 - 6
111 - 7
101 - 5
100 - 4

4

0000 - 0
0001 - 1
0011 - 3
0010 - 2
0110 - 6
0111 - 7
0101 - 5
0100 - 4
1100 - 12
1101 - 13
1111 - 15
1110 - 14
1010 - 10
1011 - 11
1001 - 9
1000 - 8

 */

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  if (n === 0) {
    return [0]
  } else if (n === 1) {
    return [0, 1]
  }
  let res = [0, 1]
  for (let i = 2; i <= n; i++) {
    const prefix = Math.pow(2, i - 1)
    for (let start = res.length - 1; start >= 0; start--) {
      res.push(prefix + res[start])
    }
  }
  return res
}

write('algorithms: 89. 格雷编码', 'title')

write(grayCode(0)) // [0]
write(grayCode(1)) // [0, 1]
write(grayCode(2)) // [0,1,3,2]
write(grayCode(3))
write(grayCode(4))
write(grayCode(5))

// tag: 二进制
