/**
 * [简单]136. 只出现一次的数字
 * https://leetcode-cn.com/problems/single-number/
 * 
 * 
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let single = 0
  for (let i = 0; i < nums.length; i++) {
    single ^= nums[i]
  }
  return single
}

var singleNumber1 = function (nums) {
  const hashSet = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (hashSet.has(nums[i])) {
      hashSet.delete(nums[i])
    } else {
      hashSet.add(nums[i])
    }
  }
  return hashSet.values().next().value
}

write('algorithms: 136. 只出现一次的数字', 'title')

write(singleNumber([2, 2, 1])) // 1
write(singleNumber([4, 1, 2, 1, 2])) // 4

// tag: 异或；位运算；
