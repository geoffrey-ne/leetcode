/**
 * [中等]713. 乘积小于K的子数组
 * https://leetcode-cn.com/problems/subarray-product-less-than-k/
 * 
 * 
给定一个正整数数组 nums。

找出该数组内乘积小于 k 的连续的子数组的个数。

示例 1:

输入: nums = [10,5,2,6], k = 100
输出: 8
解释: 8个乘积小于100的子数组分别为: [10], [5], [2], [6], [10,5], [5,2], [2,6], [5,2,6]。
需要注意的是 [10,5,2] 并不是乘积小于100的子数组。
说明:

0 < nums.length <= 50000
0 < nums[i] < 1000
0 <= k < 10^6

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) {
    return 0
  }
  let res = 0
  let left = 0
  let right = 0
  let mul = 1
  for (; right < nums.length; right++) {
    mul *= nums[right]
    while (mul >= k) {
      mul /= nums[left]
      left++
    }
    res += right - left + 1
  }
  return res
}

write('algorithms: 713. 乘积小于K的子数组', 'title')

write(numSubarrayProductLessThanK([10, 5, 2, 6], 100)) // 8

// tag: 数组；滑动窗口
