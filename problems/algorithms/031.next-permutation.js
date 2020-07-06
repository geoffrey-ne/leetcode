/**
 * [中等]31. 下一个排列
 * https://leetcode-cn.com/problems/next-permutation/
 * 

实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

[2, 5, 4, 3, 1, 0]
[3, 0, 1, 2, 4, 5]

 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let p2 = nums.length - 1
  let p1 = p2 - 1
  while (p2 > 0 && nums[p1] >= nums[p2]) {
    p2--
    p1--
  }
  if (p2 === 0) {
    reverse(nums, 0)
    return nums
  } else {
    while (p2 <= nums.length - 1 && nums[p1] < nums[p2]) {
      p2++
    }
    p2--
    swap(nums, p1, p2)
    reverse(nums, p1 + 1)
  }
  return nums
}

function swap(nums, p1, p2) {
  const temp = nums[p2]
  nums[p2] = nums[p1]
  nums[p1] = temp
}

function reverse(nums, index) {
  const len = nums.length
  if (index === len || index === len - 1) {
    return
  }
  let p1 = index
  let p2 = len - 1
  while (p1 < p2) {
    swap(nums, p1, p2)
    p1++
    p2--
  }
}

write('algorithms: 31. 下一个排列', 'title')

write(nextPermutation([1, 5, 1])) // [5, 1, 1]
write(nextPermutation([5, 1, 1])) // [1, 1, 5]
write(nextPermutation([2, 3, 1])) // [3, 1, 2]
write(nextPermutation([1, 2, 3])) // [1, 3, 2] => [2, 1, 3] => [2, 3, 1] => [3, 1, 2] => [3, 2, 1] => [1, 2, 3]
write(nextPermutation([1, 2, 3, 4])) // [1, 2, 4, 3] => [1, 3, 2, 4] => [1, 3, 4, 2] => [1, 4, 3, 2] => [2, 1, 3, 4] => [2, 1, 4, 3] => [2, 3, 1, 4] => [2, 3, 4, 1] => [2, 4, 1, 3] => [2, 4, 3, 1]
write(nextPermutation([3, 2, 1])) // [1, 2, 3]
write(nextPermutation([1, 1, 5])) // [1, 5, 1]

// tag: 数组
