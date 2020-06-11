/**
 * [简单]1. 两数之和
 * finish: 2020-06-11
 * https://leetcode-cn.com/problems/two-sum/
 * 
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

示例:

给定 nums = [0, 1, 2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
 */

/**
 * 空间换取时间，hash表，边添加边判断
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
  const hashMap = {}
  for (let i = 0; i < nums.length; i++) {
    const match = hashMap[target - nums[i]]
    if (typeof match !== 'undefined') {
      return [match, i]
    }
    hashMap[nums[i]] = i
  }
}

/**
 * 空间换取时间，hash表
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  const hashMap = {}
  nums.forEach((item, index) => {
    hashMap[item] = index
  })
  for (let i = 0; i < nums.length; i++) {
    const match = hashMap[target - nums[i]]
    if (typeof match !== 'undefined' && match !== i) {
      return [i, match]
    }
  }
  return []
}

/**
 * 暴力搜索
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

write('algorithms: 1. 两数之和', 'title')
write(twoSum([2, 7, 11, 15], 9)) // [0, 1]
write(twoSum([3, 2, 4], 6)) // [1, 2]
