/**
 * [中等]421. 数组中两个数的最大异或值
 * https://leetcode-cn.com/problems/maximum-xor-of-two-numbers-in-an-array/
 * 
 * 
给你一个整数数组 nums ，返回 nums[i] XOR nums[j] 的最大运算结果，其中 0 ≤ i ≤ j < n 。

进阶：你可以在 O(n) 的时间解决这个问题吗？
 

示例 1：

输入：nums = [3,10,5,25,2,8]
输出：28
解释：最大运算结果是 5 XOR 25 = 28.
示例 2：

输入：nums = [0]
输出：0
示例 3：

输入：nums = [2,4]
输出：6
示例 4：

输入：nums = [8,10,2]
输出：10
示例 5：

输入：nums = [14,70,53,83,49,91,36,80,92,51,66,70]
输出：127
 

提示：

1 <= nums.length <= 2 * 104
0 <= nums[i] <= 231 - 1

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR1 = function (nums) {
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      res = Math.max(nums[i] ^ nums[j], res)
    }
  }
  return res
}

var findMaximumXOR = function(nums) {
  const HIGH_BIT = 30;
  let x = 0;
  for (let k = HIGH_BIT; k >= 0; --k) {
      const seen = new Set();
      // 将所有的 pre^k(a_j) 放入哈希表中
      for (const num of nums) {
          // 如果只想保留从最高位开始到第 k 个二进制位为止的部分
          // 只需将其右移 k 位
          seen.add(num >> k);
      }

      // 目前 x 包含从最高位开始到第 k+1 个二进制位为止的部分
      // 我们将 x 的第 k 个二进制位置为 1，即为 x = x*2+1
      const xNext = x * 2 + 1;
      let found = false;
      
      // 枚举 i
      for (const num of nums) {
          if (seen.has(xNext ^ (num >> k))) {
              found = true;
              break;
          }
      }

      if (found) {
          x = xNext;
      } else {
          // 如果没有找到满足等式的 a_i 和 a_j，那么 x 的第 k 个二进制位只能为 0
          // 即为 x = x*2
          x = xNext - 1;
      }
  }
  return x; 
};

write('algorithms: 421. 数组中两个数的最大异或值', 'title')

write(findMaximumXOR([3, 10, 5, 25, 2, 8])) // 28
write(findMaximumXOR([0])) // 0
write(findMaximumXOR([2, 4])) // 6
write(findMaximumXOR([8, 10, 2])) // 10
write(findMaximumXOR([8, 9, 10, 11, 12, 13, 14, 15])) // 7
write(findMaximumXOR([14, 70, 53, 83, 49, 91, 36, 80, 92, 51, 66, 70])) // 127

// tags: 位运算；异或；前缀树；字典树
