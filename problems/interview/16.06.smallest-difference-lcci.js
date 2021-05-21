/**
 * [中等]面试题 16.06. 最小差
 * https://leetcode-cn.com/problems/smallest-difference-lcci/
 * 
给定两个整数数组a和b，计算具有最小差绝对值的一对数值（每个数组中取一个值），并返回该对数值的差

示例：

输入：{1, 3, 15, 11, 2}, {23, 127, 235, 19, 8}
输出：3，即数值对(11, 8)

1 2  3  11  15
8 19 23 127 235
 
提示：

1 <= a.length, b.length <= 100000
-2147483648 <= a[i], b[i] <= 2147483647
正确结果在区间 [0, 2147483647] 内

*/

/**
 * @param {number[]} a
 * @param {number[]} b
 * @return {number}
 */
var smallestDifference = function (a, b) {
  a.sort((n1, n2) => n1 - n2)
  b.sort((n1, n2) => n1 - n2)
  let res = 2147483647
  let pa = 0
  let pb = 0

  while (pa < a.length && pb < b.length) {
    if (a[pa] === b[pb]) {
      return 0
    } else if (a[pa] < b[pb]) {
      res = Math.min(res, b[pb] - a[pa])
      pa++
    } else {
      res = Math.min(res, a[pa] - b[pb])
      pb++
    }
  }
  return res
}

write('algorithms: 面试题 16.06. 最小差', 'title')

write(smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8])) // 3

// tag: 数组；数学
