/**
 * 至少是其他数字两倍的最大数：https://leetcode-cn.com/explore/learn/card/array-and-string/198/introduction-to-array/771/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
  if (nums.length <= 1) {
    return 0
  }

  let maxIndex = 0
  let secondIndex = 1

  if (nums[0] < nums[1]) {
    maxIndex = 1
    secondIndex = 0
  }
  for (let i = 2; i < nums.length; i++) {
    const cur = nums[i]
    const max = nums[maxIndex]
    const second = nums[secondIndex]
    if (cur > max) {
      secondIndex = maxIndex
      maxIndex = i
    } else if (cur > second) {
      secondIndex = i
    }
  }

  return nums[secondIndex] * 2 <= nums[maxIndex] ? maxIndex : -1
}

/**
在一个给定的数组nums中，总是存在一个最大元素 。

查找数组中的最大元素是否至少是数组中每个其他数字的两倍。

如果是，则返回最大元素的索引，否则返回-1。

示例 1:

输入: nums = [3, 6, 1, 0]
输出: 1
解释: 6是最大的整数, 对于数组中的其他整数,
6大于数组中其他元素的两倍。6的索引是1, 所以我们返回1.
 

示例 2:

输入: nums = [1, 2, 3, 4]
输出: -1
解释: 4没有超过3的两倍大, 所以我们返回 -1.
 

提示:

nums 的长度范围在[1, 50].
每个 nums[i] 的整数范围在 [0, 100].
 */

write('arrayAndString 2. dominantIndex', 'title')

write(dominantIndex([3, 6, 1, 0])) // 1
write(dominantIndex([1, 2, 3, 4])) // -1
write(dominantIndex([1])) // 0
write(dominantIndex([3])) // 0
