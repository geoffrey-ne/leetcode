/**
 * [中等]152. 乘积最大子数组
 * https://leetcode-cn.com/problems/maximum-product-subarray/
 * 
 * 
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

示例 1:
输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。

示例 2:
输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let res = null
  let dpPositive = null
  let dpNagetive = null

  for (let i = 0; i < nums.length; i++) {
    const preDpP = dpPositive
    const preDpN = dpNagetive
    if (nums[i] > 0) {
      dpPositive = !preDpP ? nums[i] : preDpP * nums[i]
      dpNagetive = !preDpN ? null : preDpN * nums[i]
    } else if (nums[i] < 0) {
      dpPositive = !preDpN ? null : preDpN * nums[i]
      dpNagetive = !preDpP ? nums[i] : preDpP * nums[i]
    } else {
      res = Math.max(res, 0)
      dpPositive = null
      dpNagetive = null
    }
    res = !dpPositive ? res : Math.max(res, dpPositive)
    res = !dpNagetive ? res : i === 0 ? dpNagetive : Math.max(res, dpNagetive)
  }
  return res
}

write('algorithms: 152. 乘积最大子数组', 'title')

write(maxProduct([-2])) // -2
write(maxProduct([2, -5, -2, -4, 3])) // 24
write(maxProduct([3, -1, 4])) // 4
write(maxProduct([1, 2, 3, 4, 5])) // 120
write(maxProduct([2, 3, -2, 4])) // 6
write(maxProduct([2, 3, -2, -4])) // 48
write(maxProduct([-2, 0, -1])) // 0

// tag: 数组；
