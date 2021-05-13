/**
 * [中等]面试题 10.03. 搜索旋转数组
 * https://leetcode-cn.com/problems/search-rotate-array-lcci/
 * 
搜索旋转数组。给定一个排序后的数组，包含n个整数，但这个数组已被旋转过很多次了，次数不详。
请编写代码找出数组中的某个元素，假设数组元素原先是按升序排列的。若有多个相同元素，返回索引值最小的一个。

示例1:

 输入: arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 5
 输出: 8（元素5在该数组中的索引）
示例2:

 输入：arr = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], target = 11
 输出：-1 （没有找到）
提示:

arr 长度范围在[1, 1000000]之间


*/

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (arr[left] === target) {
      return left
    } else if (arr[left] === arr[mid]) {
      left++
    } else if (arr[left] < arr[mid]) {
      if (arr[left] > target || arr[mid] < target) {
        left = mid
      } else {
        left++
        right = mid
      }
    } else {
      if (arr[left] > target && arr[mid] < target) {
        left = mid
      } else {
        left++
        right = mid
      }
    }
  }
  return -1
}

write('algorithms: 面试题 10.03. 搜索旋转数组', 'title')

write(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 5)) // 8
write(search([15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14], 11)) // -1

// tag: 数组;二分查找
