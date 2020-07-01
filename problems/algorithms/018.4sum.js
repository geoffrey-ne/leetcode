/**
 * [中等]18. 四数之和
 * https://leetcode-cn.com/problems/4sum/
 * 
给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

注意：

答案中不可以包含重复的四元组。

示例：

给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。

-2 -1 0 0 1 2

满足要求的四元组集合为：
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]

[[-2,-1,1,2],[-2,0,0,2],[-2,0,1,1],[-1,0,0,1]]
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const resList = []
  const len = nums.length
  nums.sort((n1, n2) => n1 - n2)
  for (let first = 0; first < len - 3; first++) {
    if (isSame(first, 0, nums)) {
      continue
    }
    for (let second = first + 1; second < len - 2; second++) {
      if (isSame(second, first + 1, nums)) {
        continue
      }

      let four = len - 1
      for (let third = second + 1; third < four; third++) {
        if (isSame(third, second + 1, nums)) {
          continue
        }
        const curTarget = target - nums[first] - nums[second]
        while (nums[third] + nums[four] > curTarget) {
          four--
        }
        if (third >= four) {
          break
        }
        if (nums[third] + nums[four] === curTarget) {
          resList.push([nums[first], nums[second], nums[third], nums[four]])
        }
      }
    }
  }
  return resList
}

function isSame(index, start, target) {
  return index > start && target[index] === target[index - 1]
}

write('algorithms: 18. 四数之和', 'title')
write(fourSum([1, 0, -1, 0, -2, 2], 0))
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ]
write(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0))
// [
//   [-3, -2, 2, 3],
//   [-3, -1, 1, 3],
//   [-3, 0, 0, 3],
//   [-3, 0, 1, 2],
//   [-2, -1, 0, 3],
//   [-2, -1, 1, 2],
//   [-2, 0, 0, 2],
//   [-1, 0, 0, 1]
// ]
