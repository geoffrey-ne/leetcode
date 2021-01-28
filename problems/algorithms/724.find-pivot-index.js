/**
 * [简单]724. 寻找数组的中心索引
 * https://leetcode-cn.com/problems/find-pivot-index/
 * 
 * 
给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。

我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。

示例 1：

输入：
nums = [1, 7, 3, 6, 5, 6]
输出：3
解释：
索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
同时, 3 也是第一个符合要求的中心索引。
示例 2：

输入：
nums = [1, 2, 3]
输出：-1
解释：
数组中不存在满足此条件的中心索引。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length === 0) {
    return -1
  }
  const sum = nums.reduce((pre, cur) => {
    return pre + cur
  })
  let left = 0
  let right = sum

  for (let i = 0; i < nums.length; i++) {
    right -= nums[i]
    if (left === right) {
      return i
    }
    left += nums[i]
  }
  return -1
}

write('algorithms: 724. 寻找数组的中心索引', 'title')

write(pivotIndex([1, 7, 3, 6, 5, 6])) // 3
write(pivotIndex([1, 2, 3])) // -1
write(pivotIndex([-1, -1, -1, -1, -1, 0])) // 2
write(pivotIndex([0, 0, 0, 0, 0, 0])) // 0

// tag: 数组
