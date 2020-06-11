/**
 * [中等]15. 三数之和
 * finish: 2020-06-11
 * https://leetcode-cn.com/problems/3sum/
 * 
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const resList = []
  nums.sort((n1, n2) => n1 - n2)
  for (let first = 0; first < nums.length; first++) {
    if (first > 0 && nums[first] === nums[first - 1]) {
      continue
    }
    let third = nums.length - 1
    const target = -nums[first]
    for (let second = first + 1; second < third; second++) {
      if (second > first + 1 && nums[second] == nums[second - 1]) {
        continue
      }
      while (nums[second] + nums[third] > target) {
        third--
      }

      if (second >= third) {
        break
      }

      if (nums[second] + nums[third] === target) {
        resList.push([nums[first], nums[second], nums[third]])
      }
    }
  }

  return resList
}

write('algorithms: 15. 三数之和', 'title')
// write(threeSum([-1, 0, 1, 2, -1, -4])) // [[-1, 0, 1], [-1, -1, 2]]
// write(threeSum([0, 0, 0, 0, 0, 0, 0])) // [[0,0,0]]
write(threeSum([1, 2, -2, -1])) // []
