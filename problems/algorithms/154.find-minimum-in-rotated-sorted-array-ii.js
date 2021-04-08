/**
 * [困难]154. 寻找旋转排序数组中的最小值 II
 * https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * 
 * 
假设按照升序排序的数组在预先未知的某个点上进行了旋转。

( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

请找出其中最小的元素。

注意数组中可能存在重复的元素。

示例 1：

输入: [1,3,5]
输出: 1
示例 2：

输入: [2,2,2,0,1]
输出: 0
说明：

这道题是 寻找旋转排序数组中的最小值 的延伸题目。
允许重复会影响算法的时间复杂度吗？会如何影响，为什么？

*/

// 二分查找
var findMin = function (nums) {
  let low = 0
  let high = nums.length - 1
  while (low < high) {
    const pivot = low + Math.floor((high - low) / 2)
    if (nums[pivot] < nums[high]) {
      high = pivot
    } else if (nums[pivot] > nums[high]) {
      low = pivot + 1
    } else {
      high -= 1
    }
  }
  return nums[low]
}

write('algorithms: 154. 寻找旋转排序数组中的最小值 II', 'title')

write(findMin([3, 3, 1, 3])) // 1
write(findMin([1, 3, 3])) // 1
write(findMin([3, 4, 5, 1, 2])) // 1
write(findMin([4, 5, 6, 7, 0, 1, 2])) // 0
write(findMin([11, 13, 15, 17])) // 11

// tag: 数组；二分查找
