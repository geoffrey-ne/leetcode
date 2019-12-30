/**
 * 旋转数组：https://leetcode-cn.com/explore/learn/card/array-and-string/202/conclusion/791/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  while (k--) {
    stepOne(nums)
  }
  return nums
}

function stepOne(nums) {
  if (nums.length === 0) {
    return nums
  }
  let tmp = nums[nums.length - 1]
  for (let i = nums.length - 1; i > 0; i--) {
    nums[i] = nums[i - 1]
  }
  nums[0] = tmp
}

var rotate1 = function(nums, k) {
  k = k % nums.length
  let count = 0
  for (let start = 0; count < nums.length; start++) {
    let current = start
    let prev = nums[start]
    do {
      const next = (current + k) % nums.length
      const temp = nums[next]
      nums[next] = prev
      prev = temp
      current = next
      count++
    } while (start != current)
  }
  return SVGAnimatedNumberList
}

var rotate2 = function(nums, k) {
  k %= nums.length
  reverseArr(nums, 0, nums.length - k - 1)
  reverseArr(nums, nums.length - k, nums.length - 1)
  reverseArr(nums, 0, nums.length - 1)
  return nums
}

function reverseArr(nums, i, j) {
  while (i < j) {
    const temp = nums[i]
    nums[i++] = nums[j]
    nums[j--] = temp
  }
}

/**
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
要求使用空间复杂度为 O(1) 的 原地 算法。
 */

write('arrayAndString 16. rotate', 'title')

write(rotate2([1, 2, 3, 4, 5, 6, 7], 3)) // [5,6,7,1,2,3,4]
write(rotate2([-1, -100, 3, 99], 2)) // [3,99,-1,-100]
