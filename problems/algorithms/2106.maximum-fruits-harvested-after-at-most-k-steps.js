/**
 * [困难]2106. 摘水果
 * https://leetcode-cn.com/problems/maximum-fruits-harvested-after-at-most-k-steps/
 * 
 * 
在一个无限的 x 坐标轴上，有许多水果分布在其中某些位置。
给你一个二维整数数组 fruits ，其中 fruits[i] = [positioni, amounti] 表示
共有 amounti 个水果放置在 positioni 上。
fruits 已经按 positioni 升序排列 ，每个 positioni 互不相同 。

另给你两个整数 startPos 和 k 。最初，你位于 startPos 。
从任何位置，你可以选择 向左或者向右 走。在 x 轴上每移动 一个单位 ，就记作 一步 。
你总共可以走 最多 k 步。你每达到一个位置，都会摘掉全部的水果，水果也将从该位置消失（不会再生）。

返回你可以摘到水果的 最大总数 。

示例 1：


输入：fruits = [[2,8],[6,3],[8,6]], startPos = 5, k = 4
输出：9
解释：
最佳路线为：
- 向右移动到位置 6 ，摘到 3 个水果
- 向右移动到位置 8 ，摘到 6 个水果
移动 3 步，共摘到 3 + 6 = 9 个水果

示例 2：
输入：fruits = [[0,9],[4,1],[5,7],[6,2],[7,4],[10,9]], startPos = 5, k = 4
输出：14
解释：
可以移动最多 k = 4 步，所以无法到达位置 0 和位置 10 。
最佳路线为：
- 在初始位置 5 ，摘到 7 个水果
- 向左移动到位置 4 ，摘到 1 个水果
- 向右移动到位置 6 ，摘到 2 个水果
- 向右移动到位置 7 ，摘到 4 个水果
移动 1 + 3 = 4 步，共摘到 7 + 1 + 2 + 4 = 14 个水果

示例 3：
输入：fruits = [[0,3],[6,4],[8,5]], startPos = 3, k = 2
输出：0
解释：
最多可以移动 k = 2 步，无法到达任一有水果的地方
 
提示：

1 <= fruits.length <= 105
fruits[i].length == 2
0 <= startPos, positioni <= 2 * 105
对于任意 i > 0 ，positioni-1 < positioni 均成立（下标从 0 开始计数）
1 <= amounti <= 104
0 <= k <= 2 * 105

*/

/**
 * 单向双指针/滑动窗口
 *
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
function maxTotalFruits(fruits, startPos, k) {
  let ans = 0
  let s = 0
  for (let i = 0, j = 0; j < fruits.length; ++j) {
    const [pj, fj] = fruits[j]
    s += fj
    while (
      i <= j &&
      pj - fruits[i][0] + Math.min(Math.abs(startPos - fruits[i][0]), Math.abs(startPos - pj)) > k
    ) {
      s -= fruits[i++][1]
    }
    ans = Math.max(ans, s)
  }
  return ans
}

/**
 * 二分查找
 *
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
var maxTotalFruits1 = function (fruits, startPos, k) {
  const n = fruits.length
  const sum = new Array(n + 1).fill(0)
  const indices = new Array(n).fill(0)
  sum[0] = 0
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + fruits[i][1]
    indices[i] = fruits[i][0]
  }
  let ans = 0
  for (let x = 0; x <= Math.floor(k / 2); x++) {
    /* 向左走 x 步，再向右走 k - x 步 */
    let y = k - 2 * x
    let left = startPos - x
    let right = startPos + y
    let start = lowerBound(indices, 0, n - 1, left)
    let end = upperBound(indices, 0, n - 1, right)
    ans = Math.max(ans, sum[end] - sum[start])
    /* 向右走 x 步，再向左走 k - x 步 */
    y = k - 2 * x
    left = startPos - y
    right = startPos + x
    start = lowerBound(indices, 0, n - 1, left)
    end = upperBound(indices, 0, n - 1, right)
    ans = Math.max(ans, sum[end] - sum[start])
  }
  return ans
}

const lowerBound = (arr, left, right, val) => {
  let res = right + 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (arr[mid] >= val) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
}

const upperBound = (arr, left, right, val) => {
  let res = right + 1
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    if (arr[mid] > val) {
      res = mid
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return res
}

write('algorithms: 2106. 摘水果', 'title')

write(
  maxTotalFruits(
    [
      [2, 8],
      [6, 3],
      [8, 6],
    ],
    5,
    4
  )
) // 9
write(
  maxTotalFruits(
    [
      [0, 9],
      [4, 1],
      [5, 7],
      [6, 2],
      [7, 4],
      [10, 9],
    ],
    5,
    4
  )
) // 14

write(
  maxTotalFruits(
    [
      [0, 3],
      [6, 4],
      [8, 5],
    ],
    3,
    2
  )
) // 0

// tags: 前缀和；二分查找；滑动窗口；
