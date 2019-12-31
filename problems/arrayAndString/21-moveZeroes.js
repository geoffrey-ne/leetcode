/**
 * 移动零：https://leetcode-cn.com/explore/learn/card/array-and-string/202/conclusion/796/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let j = i
      while (nums[j] === 0 && j < nums.length) {
        j++
      }
      if (j < nums.length) {
        nums[i] = nums[j]
        nums[j] = 0
      }
    }
  }
  return nums
}

var moveZeroes1 = function(nums) {
  let j = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }

  for (i = j; i < nums.length; i++) {
    nums[i] = 0
  }

  return nums
}

/**
  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

  示例:

  输入: [0,1,0,3,12]
  输出: [1,3,12,0,0]
  说明:

  必须在原数组上操作，不能拷贝额外的数组。
  尽量减少操作次数。
 */

write('arrayAndString 21. moveZeroes', 'title')

write(moveZeroes1([])) // []
write(moveZeroes1([0, 0, 0, 0, 0])) // [0, 0, 0, 0, 0]
write(moveZeroes1([0, 1, 0, 3, 12])) // [1,3,12,0,0]
