/**
 * [中等]1031. 两个非重叠子数组的最大和
 * https://leetcode-cn.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * 
 * 
给你一个整数数组 nums 和两个整数 firstLen 和 secondLen，请你找出并返回两个非重叠 子数组 中元素的最大和，长度分别为 firstLen 和 secondLen 。

长度为 firstLen 的子数组可以出现在长为 secondLen 的子数组之前或之后，但二者必须是不重叠的。

子数组是数组的一个 连续 部分。

示例 1：

输入：nums = [0,6,5,2,2,5,1,9,4], firstLen = 1, secondLen = 2
输出：20
解释：子数组的一种选择中，[9] 长度为 1，[6,5] 长度为 2。
示例 2：

输入：nums = [3,8,1,3,2,1,8,9,0], firstLen = 3, secondLen = 2
输出：29
解释：子数组的一种选择中，[3,8,1] 长度为 3，[8,9] 长度为 2。
示例 3：

输入：nums = [2,1,5,6,0,9,5,0,3,8], firstLen = 4, secondLen = 3
输出：31
解释：子数组的一种选择中，[5,6,0,9] 长度为 4，[0,3,8] 长度为 3。
 

提示：

1 <= firstLen, secondLen <= 1000
2 <= firstLen + secondLen <= 1000
firstLen + secondLen <= nums.length <= 1000
0 <= nums[i] <= 1000


*/

/**
 * 前缀和
 *
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap1 = function (nums, firstLen, secondLen) {
  const len = nums.length
  const sum = new Array(len + 1).fill(0)
  for (let i = 0; i < len; i++) {
    sum[i + 1] = sum[i] + nums[i]
  }

  let ans = 0
  for (let i = firstLen, t = 0; i + secondLen - 1 < len; i++) {
    t = Math.max(t, sum[i] - sum[i - firstLen])
    ans = Math.max(ans, t + sum[i + secondLen] - sum[i])
  }
  for (let i = secondLen, t = 0; i + firstLen - 1 < len; i++) {
    t = Math.max(t, sum[i] - sum[i - secondLen])
    ans = Math.max(ans, t + sum[i + firstLen] - sum[i])
  }
  return ans
}

/**
 * DP
 *
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
var maxSumTwoNoOverlap = function (nums, firstLen, secondLen) {
  return Math.max(help(nums, firstLen, secondLen), help(nums, secondLen, firstLen))
}

function help(nums, firstLen, secondLen) {
  let suml = nums.slice(0, firstLen).reduce((acc, val) => acc + val, 0)
  let maxSumL = suml
  let sumr = nums.slice(firstLen, firstLen + secondLen).reduce((acc, val) => acc + val, 0)
  let res = maxSumL + sumr
  for (let i = firstLen + secondLen, j = firstLen; i < nums.length; i++, j++) {
    suml += nums[j] - nums[j - firstLen]
    maxSumL = Math.max(maxSumL, suml)
    sumr += nums[i] - nums[i - secondLen]
    res = Math.max(res, maxSumL + sumr)
  }
  return res
}

write('algorithms: 1031. 两个非重叠子数组的最大和', 'title')

write(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)) // 20
write(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)) // 29
write(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3)) // 31
write(maxSumTwoNoOverlap([-2, 1, -3, 4, -1, 2, 1, -5, 4], 3, 1)) // 9

// tag: DP；前缀和
