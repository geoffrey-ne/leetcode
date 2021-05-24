/**
 * [简单]面试题 16.07. 最大数值
 * https://leetcode-cn.com/problems/contiguous-sequence-lcci/
 * 
给定一个整数数组，找出总和最大的连续数列，并返回总和。

示例：

输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
进阶：

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  let max = dp[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] > 0) {
      dp[i] = dp[i - 1] + nums[i]
    } else {
      dp[i] = nums[i]
    }
    max = Math.max(max, dp[i])
  }
  return max
}

write('algorithms: 面试题 16.07. 最大数值', 'title')

write(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6

// tag: dp
