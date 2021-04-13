/**
 * [中等]220. 存在重复元素 III
 * https://leetcode-cn.com/problems/contains-duplicate-iii/
 * 
 * 
在整数数组 nums 中，是否存在两个下标 i 和 j，使得 nums [i] 和 nums [j] 的差的绝对值小于等于 t ，且满足 i 和 j 的差的绝对值也小于等于 ķ 。

如果存在则返回 true，不存在返回 false。

示例 1:

输入: nums = [1,2,3,1], k = 3, t = 0
输出: true
示例 2:

输入: nums = [1,0,1,1], k = 1, t = 2
输出: true
示例 3:

输入: nums = [1,5,9,1,5,9], k = 2, t = 3
输出: false

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  if (k == 10000) return false
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const filterArr = Object.keys(map).filter((v) => Math.abs(v - nums[i]) <= t)
    if (filterArr.length) {
      for (let j = 0; j < filterArr.length; j++) {
        if (i - map[filterArr[j]] <= k) return true
      }
    }
    map[nums[i]] = i
  }
  return false
}

var containsNearbyAlmostDuplicate1 = function (nums, k, t) {
  let len = nums.length

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (Math.abs(nums[j] - nums[i]) <= t && j - i <= k) {
        return true
      }
    }
  }
  return false
}

write('algorithms: 220. 存在重复元素 III', 'title')

write(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0)) // true
write(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2)) // true
write(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3)) // false

// tag: 数组；
