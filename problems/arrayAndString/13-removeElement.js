/**
 * 移除元素：https://leetcode-cn.com/explore/learn/card/array-and-string/201/two-pointer-technique/787/
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let len = nums.length
  let i = 0
  for (; i < len; i++) {
    while (nums[i] !== val && i < len) {
      i++
    }
    let j = len - 1
    for (; j > i; j--) {
      while (nums[j] === val && j > i) {
        j--
      }
      if (j > i) {
        nums[i] = nums[j]
        nums[j] = val
        break
      }
    }
    len = j + 1
  }
  return i - 1
}

/**
给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:

给定 nums = [3,2,2,3], val = 3,

函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。

你不需要考虑数组中超出新长度后面的元素。
示例 2:

给定 nums = [0,1,2,2,3,0,4,2], val = 2,

函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

注意这五个元素可为任意顺序。

你不需要考虑数组中超出新长度后面的元素。
说明:

为什么返回数值是整数，但输出的答案是数组呢?

请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

你可以想象内部操作如下:

// nums 是以“引用”方式传递的。也就是说，不对实参作任何拷贝
int len = removeElement(nums, val);

// 在函数里修改输入数组对于调用者是可见的。
// 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 */

write('arrayAndString 13. removeElement', 'title')

write(removeElement([2, 2, 3], 2)) // 2
write(removeElement([2, 2, 2, 2], 2)) // 2
write(removeElement([1, 1, 1, 1], 2)) // 2
write(removeElement([3, 2, 2, 3], 3)) // 2
write(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 5
