/**
 * [简单]169. 多数元素
 * https://leetcode-cn.com/problems/majority-element/
 * 
 * 
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2
 

进阶：

尝试设计时间复杂度为 O(n)、空间复杂度为 O(1) 的算法解决此问题。

*/

/**
 * 投票法，思路：因为结果大于一半，所以让两两不同的相互抵消，最后剩下的肯定是结果
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0
  let cur
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      cur = nums[i]
    }
    if (nums[i] === cur) {
      count++
    } else {
      count--
    }
  }
  return cur
}

write('algorithms: 169. 多数元素', 'title')

write(majorityElement([3, 2, 3])) // 3
write(majorityElement([2, 2, 1, 1, 1, 2, 2])) // 2

// tag: 数组；
