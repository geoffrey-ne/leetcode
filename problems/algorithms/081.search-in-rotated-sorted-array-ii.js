/**
 * [中等]81. 搜索旋转排序数组 II
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array-ii/
 * 
 * 
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,0,1,2,2,5,6] 可能变为 [2,5,6,0,0,1,2] )。

编写一个函数来判断给定的目标值是否存在于数组中。若存在返回 true，否则返回 false。

示例 1:

输入: nums = [2,5,6,0,0,1,2], target = 0
输出: true
示例 2:

输入: nums = [2,5,6,0,1,2], target = 3
输出: false
进阶:

这是 搜索旋转排序数组 的延伸题目，本题中的 nums  可能包含重复元素。
这会影响到程序的时间复杂度吗？会有怎样的影响，为什么？

[4,5,6,1,1,1,1,1,2,3] 1

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  return helper(nums, 0, nums.length - 1, target)
}

function helper(nums, start, end, target) {
  if (start >= end) {
    return nums[start] === target
  }

  const mid = Math.floor((start + end) / 2)

  if (nums[mid] === target || nums[start] === target || nums[end] === target) {
    return true
  } else if (target < nums[mid]) {
    if (nums[start] < nums[mid]) {
      if (nums[start] < target) {
        return helper(nums, start, mid - 1, target)
      } else {
        return helper(nums, mid + 1, end, target)
      }
    } else if (nums[start] > nums[mid]) {
      return helper(nums, start, mid - 1, target)
    } else {
      return helper(nums, start, mid - 1, target) || helper(nums, mid + 1, end, target)
    }
  } else {
    if (nums[mid] < nums[end]) {
      if (target < nums[end]) {
        return helper(nums, mid + 1, end, target)
      } else {
        return helper(nums, start, mid - 1, target)
      }
    } else if (nums[mid] > nums[end]) {
      return helper(nums, mid + 1, end, target)
    } else {
      return helper(nums, start, mid - 1, target) || helper(nums, mid + 1, end, target)
    }
  }
}

write('algorithms: 81. 搜索旋转排序数组 II', 'title')

write(search([1, 3, 1, 1, 1], 3)) // true
write(search([1, 1, 3, 1], 3)) // true
write(search([3, 1], 4)) // false
write(search([2, 5, 6, 0, 0, 1, 2], 0)) // true
write(search([2, 5, 6, 0, 0, 1, 2], 3)) // false

// tag: 数组；二分法；旋转排序数组
