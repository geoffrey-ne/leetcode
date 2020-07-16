/**
 * [中等]46. 全排列
 * https://leetcode-cn.com/problems/permutations/
 * 
给定一个 没有重复 数字的序列，返回其所有可能的全排列。

示例:

输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]

[2, 3, 1, 4]
[2, 3, 4, 1]
[2, 4, 3, 1]
[4, 2, 3, 1]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  if (nums.length <= 1) {
    return [nums]
  }
  const res = []
  helper(nums, [], res)
  return res
}

function helper(nums, trace, res) {
  if (trace.length === nums.length) {
    res.push([...trace])
  }

  for (let i = 0; i < nums.length; i++) {
    if (trace.indexOf(nums[i]) >= 0) {
      continue
    }
    trace.push(nums[i])
    helper(nums, trace, res)
    trace.pop()
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute1 = function (nums) {
  if (nums.length <= 1) {
    return [nums]
  }
  return helper1(nums)
}

function helper1(nums) {
  const len = nums.length
  if (len === 2) {
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ]
  }

  const res = []
  for (let i = 0; i < len; i++) {
    const value = nums.splice(i, 1)[0]
    helper1(nums).forEach((arr) => res.push([value, ...arr]))
    nums.splice(i, 0, value)
  }
  return res
}

write('algorithms: 46. 全排列', 'title')

write(permute([1, 2, 3]))
write(permute([1, 2, 3, 4]))
// [([1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1])]

// tag: 数组;回溯
