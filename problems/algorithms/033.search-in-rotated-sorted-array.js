/**
 * [中等]33. 搜索旋转排序数组
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 

假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。

你可以假设数组中不存在重复的元素。

你的算法时间复杂度必须是 O(log n) 级别。

示例 1:

输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:
[5,6,7,0,1,2,4] 
[6,7,0,1,2,4,5] 0

输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length === 0) {
    return -1
  }
  return helper(nums, 0, nums.length - 1, target)
}

function helper(nums, start, end, target) {
  if (nums[start] === target) {
    return start
  }
  if (nums[end] === target) {
    return end
  }
  const mid = Math.floor((start + end) / 2)
  if (start === end || start === mid) {
    return -1
  }

  if (nums[mid] === target) {
    return mid
  }

  if (target < nums[mid]) {
    if (nums[start] < nums[mid]) {
      if (target < nums[start]) {
        return helper(nums, mid, end, target)
      } else {
        return helper(nums, start, mid, target)
      }
    } else {
      return helper(nums, start, mid, target)
    }
  } else {
    if (nums[mid] < nums[end]) {
      if (target > nums[end]) {
        return helper(nums, start, mid, target)
      } else {
        return helper(nums, mid, end, target)
      }
    } else {
      return helper(nums, mid, end, target)
    }
  }
}

write('algorithms: 33. 搜索旋转排序数组', 'title')

write(search([1, 3], 2)) // -1
write(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
write(search([4, 5, 6, 7, 0, 1, 2], 3)) // -1

// tag: 数组;二分法
