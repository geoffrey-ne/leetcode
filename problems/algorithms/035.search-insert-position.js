/**
 * [简单]35. 搜索插入位置
 * https://leetcode-cn.com/problems/search-insert-position/
 * 

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

输入: [1,3,5,6], 5
输出: 2
示例 2:

输入: [1,3,5,6], 2
输出: 1
示例 3:

输入: [1,3,5,6], 7
输出: 4
示例 4:

输入: [1,3,5,6], 0
输出: 0

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 0) {
    return 0
  }
  return helper(nums, 0, nums.length - 1, target)
}

function helper(nums, start, end, target) {
  const mid = Math.floor((start + end) / 2)
  if (start === mid) {
    if (target <= nums[start]) {
      return start
    } else if (target <= nums[end]) {
      return end
    } else {
      return end + 1
    }
  }
  if (target === nums[mid]) {
    return mid
  } else if (target < nums[mid]) {
    return helper(nums, start, mid, target)
  } else {
    return helper(nums, mid, end, target)
  }
}

write('algorithms: 35. 搜索插入位置', 'title')

write(searchInsert([1, 3, 5, 6], 5)) // 2
write(searchInsert([1, 3, 5, 6], 2)) // 1
write(searchInsert([1, 3, 5, 6], 7)) // 4
write(searchInsert([1, 3, 5, 6], 0)) // 0

// tag: 数组;二分法
