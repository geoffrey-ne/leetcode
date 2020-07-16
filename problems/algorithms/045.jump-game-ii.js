/**
 * [困难]45. 跳跃游戏 II
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 
给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

示例:

输入: [2,3,1,1,4]
输出: 2
解释: 跳到最后一个位置的最小跳跃数是 2。
     从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
说明:

假设你总是可以到达数组的最后一个位置。

0 - 0
1 - 0
2 - 0, 1
3 - 1, 2
4 - 1, 3

dp[0] = 0
arr[1] = [0]
arr[2] = [0]

dp[1] = Math.min(arr[1]) + 1 // -> min(0) + 1 -> 1, [0, 1]

arr[2] = [0, 1]
arr[3] = [1]
arr[4] = [1]

dp[2] = Math.min(arr[2]) + 1  // -> min(0, 1) + 1 -> 1, [0, 2]

arr[3] = [1, 2]
arr[4] = [1]

dp[3] = Math.min(arr[3]) + 1  // -> min(1, 1) + 1 -> 2, [0, 1, 3] | [0, 2, 3]
arr[4] = [1, 3]

dp[4] = Math.min(arr[4]) + 1  // -> min(1, 2) + 1 -> 2, [0, 1, 4]

return dp[4]

 */

/**
 * 贪心算法
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) {
    return 0
  }
  let step = 0
  for (let i = 0; i < nums.length; ) {
    const maxIndex = getMaxIndex(nums, i, i + nums[i])
    if (maxIndex + nums[maxIndex] >= nums.length - 1) {
      return step + (maxIndex === i ? 1 : 2)
    } else {
      i = maxIndex
      step++
    }
  }
  return step
}

function getMaxIndex(nums, start, end) {
  let max = 0
  let maxIndex = 0
  for (let i = start; i <= end; i++) {
    if (nums[i] + i > max) {
      max = nums[i] + i
      maxIndex = i
    }
  }
  return maxIndex
}

/**
 * dp
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump1 = function (nums) {
  const dp = new Array(nums.length)
  dp[0] = 0
  for (let i = 1; i < dp.length; i++) {
    dp[i] = Number.MAX_SAFE_INTEGER
  }

  for (let i = 0; i < nums.length; i++) {
    let value = nums[i]
    let j = 1
    while (j <= value && j + i < nums.length) {
      dp[j + i] = Math.min(dp[j + i], dp[i] + 1)
      j++
    }
  }
  return dp[nums.length - 1]
}

/**
 * 超时
 *
 * @param {number[]} nums
 * @return {number}
 */
var jump2 = function (nums) {
  const dp = [0]
  const reachArr = new Array(nums.length) // 能到达当前位置的上一个位置
  for (let i = 0; i < reachArr.length; i++) {
    reachArr[i] = []
  }
  fillReachArr(reachArr, 0, nums[0])
  for (let i = 1; i < nums.length; i++) {
    dp[i] = getMinStep(reachArr[i], dp)
    fillReachArr(reachArr, i, nums[i])
  }
  return dp[nums.length - 1]
}

function fillReachArr(reachArr, curIndex, value) {
  let index = curIndex
  while (value > 0 && ++index < reachArr.length) {
    reachArr[index].push(curIndex)
    value--
  }
}

function getMinStep(curReachArr, dp) {
  let min = Number.MAX_SAFE_INTEGER
  curReachArr.forEach((index) => {
    min = Math.min(dp[index], min)
  })
  return min + 1
}

write('algorithms: 45. 跳跃游戏 II', 'title')

write(jump([1, 2])) // 1
write(jump([2, 3, 1, 1, 4])) // 2
write(jump([2, 3, 1, 2, 4, 2, 3])) // 3

// tag: 数组;dp;贪心算法

// class Solution {
//   public int jump(int[] nums) {
//       int length = nums.length;
//       int end = 0;
//       int maxPosition = 0;
//       int steps = 0;
//       for (int i = 0; i < length - 1; i++) {
//           maxPosition = Math.max(maxPosition, i + nums[i]);
//           if (i == end) {
//               end = maxPosition;
//               steps++;
//           }
//       }
//       return steps;
//   }
// 」
