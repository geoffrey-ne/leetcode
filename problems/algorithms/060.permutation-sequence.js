/**
 * [中等]60. 第k个排列
 * https://leetcode-cn.com/problems/permutation-sequence/
 * 
 * 
给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。

按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：

"123"
"132"
"213"
"231"
"312"
"321"
给定 n 和 k，返回第 k 个排列。

说明：

给定 n 的范围是 [1, 9]。
给定 k 的范围是[1,  n!]。
示例 1:

输入: n = 3, k = 3
输出: "213"

1 123 0 0
2 132 0 1
3 213 1 0
4 231 1 1
5 312 2 0
6 321 2 1

k / (n - 1)!

2 + getPermutation(3, 3)


示例 2:

输入: n = 4, k = 9
输出: "2314"

 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
  let i = 1
  const jieCheng = [1]
  while (i <= n) {
    jieCheng.push(jieCheng[jieCheng.length - 1] * i)
    i++
  }
  return helper(n, k, jieCheng)
}

function helper(n, k, jieCheng) {
  if (k > jieCheng[n]) {
    return ''
  }
  if (k === jieCheng[n]) {
    return getReverse(n)
  }
  if (k === 1) {
    return getSort(n)
  }
  if (n === 1) {
    return '1'
  }

  let nextK = k % jieCheng[n - 1]
  let cur
  if (nextK === 0) {
    cur = k / jieCheng[n - 1]
    nextK = jieCheng[n - 1]
  } else {
    cur = Math.floor(k / jieCheng[n - 1]) + 1
    nextK = k % jieCheng[n - 1]
  }

  const nextResStr = helper(n - 1, nextK, jieCheng)
  const nextRes = nextResStr
    .split('')
    .map((numStr) => (numStr >= cur ? `${Number(numStr) + 1}` : numStr))
    .join('')
  return `${cur}${nextRes}`
}

function getSort(n) {
  let res = ''
  let i = 1
  while (i <= n) {
    res += i
    i++
  }
  return res
}

function getReverse(n) {
  let res = ''
  while (n > 0) {
    res += n
    n--
  }
  return res
}

write('algorithms: 60. 第k个排列', 'title')

write(getPermutation(3, 2)) // '132'
write(getPermutation(3, 3)) // '213'
write(getPermutation(4, 9)) // '2314'

// tag: 数组;递归
