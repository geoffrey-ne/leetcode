/**
 * [中等]137. 只出现一次的数字 II
 * https://leetcode-cn.com/problems/single-number-ii/
 * 
 * 
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现了三次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,3,2]
输出: 3
示例 2:

输入: [0,1,0,1,0,1,99]
输出: 99

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  return findOnce(nums, 3)
}

function findOnce(nums, n) {
  const len = 32
  let res = 0
  for (let i = 0; i < len; i++) {
    let oneCount = 0
    for (let j = 0; j < nums.length; j++) {
      oneCount += (nums[j] >>> i) & 1
    }
    if (oneCount % n !== 0) {
      res |= 1 << i
    }
  }
  return res
}

write('algorithms: 137. 只出现一次的数字 II', 'title')

write(singleNumber([2, 2, 3, 2])) // 3
write(singleNumber([0, 1, 0, 1, 0, 1, 99])) // 99

// tag: 位运算；多进制
