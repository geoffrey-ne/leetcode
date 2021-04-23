/**
 * [中等]368. 最大整除子集
 * https://leetcode-cn.com/problems/largest-divisible-subset/
 * 
 * 
给你一个由 无重复 正整数组成的集合 nums ，请你找出并返回其中最大的整除子集 answer ，子集中每一元素对 (answer[i], answer[j]) 都应当满足：
answer[i] % answer[j] == 0 ，或
answer[j] % answer[i] == 0
如果存在多个有效解子集，返回其中任何一个均可。

示例 1：

输入：nums = [1,2,3]
输出：[1,2]
解释：[1,3] 也会被视为正确答案。
示例 2：

输入：nums = [1,2,4,8]
输出：[1,2,4,8]


[1, 2, 3, 4, 5, 6, 7, 8, 12, 13]

[]
[] [1] [2] [1 2] [3] [1 3] [4] [1 4] [2 4] [1 2 4] [5] [1 5] [7] [1 7] [1 2 4 8]

2 [2]
3 [3]
4 [2 4]
5 [5]
6 [2 6]
7 [7]
8 [2 4 8]
12 [2 6 12]

提示：

1 <= nums.length <= 1000
1 <= nums[i] <= 2 * 109
nums 中的所有整数 互不相同

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((n1, n2) => n1 - n2)
  const list = [[nums[0]]]
  let maxIndex = 0
  for (let i = 1; i < nums.length; i++) {
    let res = [nums[i]]
    for (let j = i - 1; j >= 0; j--) {
      const tmp = list[j]
      if (nums[i] % tmp[tmp.length - 1] === 0 && tmp.length + 1 > res.length) {
        res = [...tmp, nums[i]]
      }
    }
    if (res.length > list[maxIndex].length) {
      maxIndex = i
    }
    list.push(res)
  }
  return list[maxIndex]
}

write('algorithms: 368. 最大整除子集', 'title')

write(largestDivisibleSubset([4, 8, 10, 240])) // [4,8,240]
write(largestDivisibleSubset([1, 2, 4, 8, 16])) // [1,2,4,8,16]
write(largestDivisibleSubset([1, 2, 3, 4, 5, 6, 7, 8, 12, 13])) // [1,2,4,8]

// tag: 数组；子集
