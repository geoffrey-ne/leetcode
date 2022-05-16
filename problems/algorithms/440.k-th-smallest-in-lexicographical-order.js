/**
 * [困难]440. 字典序的第K小数字
 * https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/
 * 
 * 
给定整数 n 和 k，返回  [1, n] 中字典序第 k 小的数字。

 

示例 1:

输入: n = 13, k = 2
输出: 10
解释: 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
示例 2:

输入: n = 1, k = 1
输出: 1
 

提示:

1 <= k <= n <= 109

*/

var findKthNumber = function (n, k) {
  let getCount = (prefix, n) => {
    let count = 0
    for (let cur = prefix, next = prefix + 1; cur <= n; cur *= 10, next *= 10)
      count += Math.min(next, n + 1) - cur
    return count
  }
  let p = 1
  let prefix = 1
  while (p < k) {
    let count = getCount(prefix, n)
    if (p + count > k) {
      prefix *= 10
      p++
    } else if (p + count <= k) {
      prefix++
      p += count
    }
  }
  return prefix
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
  let p = 1
  let curr = 1
  while (p < k) {
    const count = helper(curr, n)
    if (p + count > k) {
      curr *= 10
      p++
    } else {
      curr++
      p += count
    }
  }
  return curr
}

function helper(curr, n) {
  let steps = 0
  let first = curr
  let last = curr
  while (first <= n) {
    steps += Math.min(last, n) - first + 1
    first = first * 10
    last = last * 10 + 9
  }
  return steps
}

write('algorithms: 440. 字典序的第K小数字', 'title')

write(findKthNumber(13, 2)) // 10
write(findKthNumber(1, 1)) // 1

// tag: 树；字典树
