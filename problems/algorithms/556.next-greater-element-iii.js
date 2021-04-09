/**
 * [中等]556. 下一个更大元素 III
 * https://leetcode-cn.com/problems/next-greater-element-iii/
 * 
 * 
给你一个正整数 n ，请你找出符合条件的最小整数，其由重新排列 n 中存在的每位数字组成，并且其值大于 n 。如果不存在这样的正整数，则返回 -1 。

注意 ，返回的整数应当是一个 32 位整数 ，如果存在满足题意的答案，但不是 32 位整数 ，同样返回 -1 。

 

示例 1：

输入：n = 12
输出：21
示例 2：

输入：n = 21
输出：-1
 

提示：

1 <= n <= 231 - 1

*/

/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {
  const arr = nextPermutation(n.toString().split(''))
  let res = arr.length === 0 ? -1 : Number(arr.join(''))
  res = res === n || res >= Math.pow(2, 31) ? -1 : res
  return res
}

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
    return []
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

write('algorithms: 556. 下一个更大元素 III', 'title')

write(nextGreaterElement(2147483476)) // 2147483647
write(nextGreaterElement(2147483486)) // -1
write(nextGreaterElement(1)) // -1
write(nextGreaterElement(12)) // 21
write(nextGreaterElement(21)) // -1

// tag: 数组；与 31. 下一个排列 思路一致
