/**
 * [中等]16. 最接近的三数之和
 * finish: 2020-06-15
 * https://leetcode-cn.com/problems/3sum-closest/
 * 
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

示例：

输入：nums = [-1,2,1,-4], target = 1
输出：2
解释：与 target 最接近的和是 2 (-1 + 2 + 1 = 2) 。
 

提示：

3 <= nums.length <= 10^3
-10^3 <= nums[i] <= 10^3
-10^4 <= target <= 10^4
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let min = Number.MAX_SAFE_INTEGER
  let res = Number.MAX_SAFE_INTEGER
  nums.sort((n1, n2) => n1 - n2)
  for (let i = 0; i <= nums.length - 3; i++) {
    let start = i + 1
    let end = nums.length - 1
    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end]
      if (Math.abs(sum - target) < min) {
        res = sum
        min = Math.abs(sum - target)
      }
      if (sum > target) {
        end--
      } else if (sum < target) {
        start++
      } else {
        return res
      }
    }
  }
  return res
}

write('algorithms: 16. 最接近的三数之和', 'title')
write(threeSumClosest([-1, 2, 1, -4], 1)) // 2
write(threeSumClosest([0, 2, 1, -3], 1)) // 0
