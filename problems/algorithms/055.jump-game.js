/**
 * [中等]55. 跳跃游戏
 * https://leetcode-cn.com/problems/jump-game/
 * 

给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

判断你是否能够到达最后一个位置。

示例 1:

输入: [2,3,1,1,4]
输出: true
解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
示例 2:

输入: [3,2,1,0,4]
输出: false
解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    if (i > max) {
      return false
    }
    max = Math.max(max, i + nums[i])
    if (max >= nums.length - 1) {
      return true
    }
  }
  return false
}

var canJump1 = function (nums) {
  if (nums.length <= 1) {
    return true
  }
  const arr = new Array(nums.length)
  arr[0] = true
  for (let i = 0; i < nums.length - 1; i++) {
    if (!arr[i]) {
      continue
    }

    const len = nums[i]
    if (len + i >= nums.length - 1) {
      return true
    }
    for (let j = i + 1; j <= len + i; j++) {
      arr[j] = true
    }
  }
  return false
}

write('algorithms: 55. 跳跃游戏', 'title')

write(canJump([2, 3, 1, 1, 4])) // true
write(canJump([3, 2, 1, 0, 4])) // false

// tag: 贪心算法
