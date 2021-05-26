/**
 * [困难]1787. 使所有区间的异或结果为零
 * https://leetcode-cn.com/problems/make-the-xor-of-all-segments-equal-to-zero/
 * 
 * 
给你一个整数数组 nums​​​ 和一个整数 k​​​​​ 。
区间 [left, right]（left <= right）的 异或结果 是对下标位于 
left 和 right（包括 left 和 right ）之间所有元素进行 XOR 运算的结果：
nums[left] XOR nums[left+1] XOR ... XOR nums[right] 。

返回数组中 要更改的最小元素数 ，以使所有长度为 k 的区间异或结果等于零。 

示例 1：

输入：nums = [1,2,0,3,0], k = 1
输出：3
解释：将数组 [1,2,0,3,0] 修改为 [0,0,0,0,0]
示例 2：

输入：nums = [3,4,5,2,1,7,3,4,7], k = 3
输出：3
解释：将数组 [3,4,5,2,1,7,3,4,7] 修改为 [3,4,7,3,4,7,3,4,7]
示例 3：

输入：nums = [1,2,4,1,2,5,1,2,6], k = 3
输出：3
解释：将数组[1,2,4,1,2,5,1,2,6] 修改为 [1,2,3,1,2,3,1,2,3]

9 7
4
let max = nums.length - k + 1

提示：

1 <= k <= nums.length <= 2000
​​​​​​0 <= nums[i] < 210

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minChanges = function (nums, k) {
  let cnt = []
  for (let i = 0; i < k; i++) {
    cnt.push(new Array(1 << 10).fill(0))
  }
  nums.forEach((num, i) => {
    cnt[i % k][num]++
  })

  let dp0 = []
  let minCnt = 0
  for (let j = 0; j < 1 << 10; j++) {
    dp0.push(cnt[0][j])
    minCnt = Math.max(minCnt, cnt[0][j])
  }
  let keep = minCnt

  for (let i = 1; i < k; i++) {
    let maxCnt = 0
    let dp = new Array(1 << 10).fill(0)
    for (let j = 0; j < 1 << 10; j++) {
      if (cnt[i][j] === 0) {
        continue
      }
      maxCnt = Math.max(maxCnt, cnt[i][j])
      for (let k = 0; k < 1 << 10; k++) {
        dp[j ^ k] = Math.max(dp[j ^ k], dp0[k] + cnt[i][j])
      }
    }
    keep += maxCnt
    minCnt = Math.min(minCnt, maxCnt)
    dp0 = dp
  }
  keep -= minCnt

  return nums.length - Math.max(keep, dp0[0])
}

write('algorithms: 1787. 使所有区间的异或结果为零', 'title')

// write(minChanges([1, 2, 0, 3, 0], 1)) // 3
write(minChanges([3, 4, 5, 2, 1, 7, 3, 4, 7], 3)) // 3
write(minChanges([1, 2, 4, 1, 2, 5, 1, 2, 6], 3)) // 3

// tags: DP；异或；不会，直接看的答案
