/**
 * [简单]704. 二分查找
 * https://leetcode-cn.com/problems/binary-search/
 * 
 * 
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。


示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
示例 2:

输入: nums = [-1,0,3,5,9,12], target = 2
输出: -1
解释: 2 不存在 nums 中因此返回 -1
 

提示：

你可以假设 nums 中的所有元素是不重复的。
n 将在 [1, 10000]之间。
nums 的每个元素都将在 [-9999, 9999]之间。

*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2) // 此处不用(left + right) / 2是防止溢出
    if (nums[middle] === target) {
      return middle
    }
    if (target < nums[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return -1
}

write('algorithms: 704. 二分查找', 'title')

write(search([-1, 0, 3, 5, 9, 12], 9)) // 4

// tag: 数组；查找；二分查找
