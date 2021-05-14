/**
 * [中等]面试题 10.11. 峰与谷
 * https://leetcode-cn.com/problems/peaks-and-valleys-lcci/
 * 
在一个整数数组中，“峰”是大于或等于相邻整数的元素，相应地，“谷”是小于或等于相邻整数的元素。
例如，在数组{5, 8, 4, 2, 3, 4, 6}中，{8, 6}是峰， {5, 2}是谷。
现在给定一个整数数组，将该数组按峰与谷的交替顺序排序。

示例:

输入: [5, 3, 1, 2, 3]
输出: [5, 1, 3, 2, 3]
提示：

nums.length <= 10000

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (i % 2 == 0) {
      if (nums[i] < nums[i - 1]) {
        nums[i] = nums[i - 1] + nums[i]
        nums[i - 1] = nums[i] - nums[i - 1]
        nums[i] = nums[i] - nums[i - 1]
      }
    } else {
      if (nums[i] > nums[i - 1]) {
        nums[i] = nums[i - 1] + nums[i]
        nums[i - 1] = nums[i] - nums[i - 1]
        nums[i] = nums[i] - nums[i - 1]
      }
    }
  }
  return nums
}

write('algorithms: 面试题 10.11. 峰与谷', 'title')

write(wiggleSort([7, 6, 6, 9])) // [6,7,6,9]
write(wiggleSort([5, 3, 1, 2, 3])) // [5, 1, 3, 2, 3]
write(wiggleSort([3, 5, 2, 1, 6, 4])) // [3,5,1,6,2,4]
write(wiggleSort([5, 8, 4, 2, 3, 4, 6])) // [5,8,2,4,3,6,4]

// tag: 数组
