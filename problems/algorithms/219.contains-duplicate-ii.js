/**
 * [简单]219. 存在重复元素 II
 * https://leetcode-cn.com/problems/contains-duplicate-ii/
 * 
 * 
给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  if (k === 0) {
    return false
  }
  const mySet = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      mySet.delete(nums[i - k - 1])
    }
    if (mySet.has(nums[i])) {
      return true
    }
    mySet.add(nums[i])
  }
  return false
}

write('algorithms: 219. 存在重复元素 II', 'title')

write(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true
write(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
write(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false

// tag: 数组；
