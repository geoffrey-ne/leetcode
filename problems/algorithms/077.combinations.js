/**
 * [中等]77. 组合
 * https://leetcode-cn.com/problems/combinations/
 * 
 * 
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]


*/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < k) {
    return []
  } else if (n === k) {
    const res = []
    for (let i = 1; i <= k; i++) {
      res.push(i)
    }
    return [res]
  } else if (k === 1) {
    const res = []
    for (let i = 1; i <= n; i++) {
      res.push([i])
    }
    return res
  } else {
    const withN = combine(n - 1, k - 1)
    withN.forEach((arr) => {
      arr.push(n)
    })

    const withoutN = combine(n - 1, k)
    return withN.concat(withoutN)
  }
}

write('algorithms: 77. 组合', 'title')

write(combine(4, 2))
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// tag: 递归
