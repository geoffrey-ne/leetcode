/**
 * 目标和：https://leetcode-cn.com/explore/learn/card/queue-stack/219/stack-and-dfs/885/
 */

/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  if (nums.length === 0) {
    return 0
  }
  if (nums.length === 1) {
    let res = 0
    if (S + nums[0] === 0) {
      res++
    }
    if (S - nums[0] === 0) {
      res++
    }
    return res
  }

  const sum = nums.reduce((pre, cur) => pre + cur)

  if (sum < S) {
    return 0
  }

  const cur = nums[0]
  const nextNums = nums.slice(1)
  return findTargetSumWays(nextNums, S + cur) + findTargetSumWays(nextNums, S - cur)
}

write('queueAndStack 10. findTargetSumWays', 'title')

write(findTargetSumWays([1, 1, 1, 1, 1], 3)) // 5
write(findTargetSumWays([1, 0], 1)) // 2
