/**
 * 最大连续1的个数：https://leetcode-cn.com/explore/learn/card/array-and-string/201/two-pointer-technique/788/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return nums[0] === 1 ? 1 : 0
  }
  let max = 0
  for (let i = 0; i < len - 1; i++) {
    while (nums[i] !== 1 && i < len - 1) {
      i++
    }
    let j = i + 1
    let cur = nums[i] === 1 ? 1 : 0
    for (; j < len; j++) {
      if (nums[j] !== 1) {
        break
      }
      cur++
    }
    max = Math.max(max, cur)
    i = j
  }
  return max
}

/**
给定一个二进制数组， 计算其中最大连续1的个数。

示例 1:

输入: [1,1,0,1,1,1]
输出: 3
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
注意：

输入的数组只包含 0 和1。
输入数组的长度是正整数，且不超过 10,000。
 */

write('arrayAndString 14. findMaxConsecutiveOnes', 'title')

write(findMaxConsecutiveOnes([0, 0])) // 0
write(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1])) // 3
