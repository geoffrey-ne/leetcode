/**
 * [困难]41. 缺失的第一个正数
 * https://leetcode-cn.com/problems/first-missing-positive/
 * 

给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

示例 1:

输入: [1,2,0]
输出: 3
示例 2:

输入: [3,4,-1,1]
输出: 2
示例 3:

输入: [7,8,9,11,12]
输出: 1

提示：
你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    while (nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] != nums[i]) {
      swap(nums, nums[i] - 1, i)
    }
  }

  for (let i = 0; i < len; i++) {
    if (nums[i] != i + 1) {
      return i + 1
    }
  }
  return len + 1
}

function swap(nums, p1, p2) {
  const temp = nums[p2]
  nums[p2] = nums[p1]
  nums[p1] = temp
}

write('algorithms: 41. 缺失的第一个正数', 'title')

write(firstMissingPositive([1, 2, 0])) // 3
write(firstMissingPositive([3, 4, -1, 1])) // 2
write(firstMissingPositive([7, 8, 9, 11, 12])) // 1

// tag: 数组；原地hash
