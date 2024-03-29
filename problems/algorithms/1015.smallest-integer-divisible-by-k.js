/**
 * [中等]1015. 可被 K 整除的最小整数
 * https://leetcode-cn.com/problems/smallest-integer-divisible-by-k/
 * 
 * 
给定正整数 k ，你需要找出可以被 k 整除的、仅包含数字 1 的最 小 正整数 n 的长度。
返回 n 的长度。如果不存在这样的 n ，就返回-1。
注意： n 不符合 64 位带符号整数。

示例 1：

输入：k = 1
输出：1
解释：最小的答案是 n = 1，其长度为 1。
示例 2：

输入：k = 2
输出：-1
解释：不存在可被 2 整除的正整数 n 。
示例 3：

输入：k = 3
输出：3
解释：最小的答案是 n = 111，其长度为 3。
 

提示：

1 <= k <= 105

11

1
1011

64 + 32 + 8 + 4 + 2 + 1 = 
01101111

11

128 - 16 =

111 64 + 32 + 8 + 4 + 2 + 1 =

110

*/

/**
 * @param {number} k
 * @return {number}
 */
var smallestRepunitDivByK = function (k) {
  // 如果 k 是偶数或者是 5 的倍数，则无法整除，直接返回 -1
  if (k % 2 === 0 || k % 5 === 0) {
    return -1
  }
  let resid = 1 % k,
    len = 1
  while (resid !== 0) {
    resid = (resid * 10 + 1) % k
    len++
  }
  return len
}

write('algorithms: 1015. 可被 K 整除的最小整数', 'title')

write(smallestRepunitDivByK(1)) // 1
write(smallestRepunitDivByK(2)) // -1
write(smallestRepunitDivByK(3)) // 3

// tag: 数学
