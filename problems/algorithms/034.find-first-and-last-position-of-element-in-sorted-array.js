/**
 * [中等]34. 在排序数组中查找元素的第一个和最后一个位置
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 

给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

你的算法时间复杂度必须是 O(log n) 级别。

如果数组中不存在目标值，返回 [-1, -1]。

示例 1:

输入: nums = [5,7,7,8,8,10], target = 8
输出: [3,4]
示例 2:

输入: nums = [5,7,7,8,8,10], target = 6
输出: [-1,-1]

 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const res = [-1, -1]
  if (nums.length > 0) {
    helper(nums, 0, nums.length - 1, target, res)
  }
  return res
}

function helper(nums, start, end, target, res) {
  const mid = Math.floor((start + end) / 2)
  if (mid === start) {
    nums[start] === target && update(res, start)
    nums[end] === target && update(res, end)
  } else if (nums[mid] === target) {
    update(res, mid)
    if (nums[start] === target) {
      update(res, start)
    } else {
      helper(nums, start, mid, target, res)
    }

    if (nums[end] === target) {
      update(res, end)
    } else {
      helper(nums, mid, end, target, res)
    }
  } else if (nums[mid] < target) {
    helper(nums, mid, end, target, res)
  } else {
    helper(nums, start, mid, target, res)
  }
}

function update(res, index) {
  if (res[0] === -1 || index < res[0]) {
    res[0] = index
  }
  if (res[1] === -1 || index > res[1]) {
    res[1] = index
  }
}

write('algorithms: 34. 在排序数组中查找元素的第一个和最后一个位置', 'title')

write(searchRange([1], 1)) // [0, 0]
write(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
write(searchRange([5, 7, 7, 8, 8, 10], 6)) // [-1, -1]

// tag: 数组
