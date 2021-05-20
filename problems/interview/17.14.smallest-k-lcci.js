/**
 * [中等]面试题 17.14. 最小K个数
 * https://leetcode-cn.com/problems/smallest-k-lcci/
 * 
 * 
设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。

示例：

输入： arr = [1,3,5,7,2,4,6,8], k = 4
输出： [1,2,3,4]
提示：

0 <= len(arr) <= 100000
0 <= k <= min(100000, len(arr))

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK1 = function (arr, k) {
  if (arr.length === k) {
    return arr
  }
  arr.sort((n1, n2) => n1 - n2)
  return arr.slice(0, k)
}

var smallestK = function (arr, k) {
  return quickSort(arr, 0, arr.length - 1, k)
}

function quickSort(arr, l, r, k) {
  const mid = Math.floor((l + r) / 2)
  const val = arr[mid]
  const left = []
  const right = []
  for (let i = 0; i < arr.length; i++) {
    if (i === mid) {
      continue
    }
    if (arr[i] < val) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  if (left.length === k) {
    return left
  } else if (left.length + 1 === k) {
    return left.concat([val])
  } else if (left.length > k) {
    return quickSort(left, 0, left.length - 1, k)
  } else {
    return left.concat([val], quickSort(right, 0, right.length - 1, k - 1 - left.length))
  }
}

write('algorithms: 面试题 17.14. 最小K个数', 'title')

// write(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4)) // [1,2,3,4]
write(
  smallestK(
    [
      62577, -220, -8737, -22, -6, 59956, 5363, -16699, 0, -10603, 64, -24528, -4818, 96, 5747,
      2638, -223, 37663, -390, 35778, -4977, -3834, -56074, 7, -76, 601, -1712, -48874, 31, 3,
      -9417, -33152, 775, 9396, 60947, -1919, 683, -37092, -524, -8, 1458, 80, -8, 1, 7, -355, 9,
      397, -30, -21019, -565, 8762, -4, 531, -211, -23702, 3, 3399, -67, 64542, 39546, 52500, -6263,
      4, -16, -1, 861, 5134, 8, 63701, 40202, 43349, -4283, -3, -22721, -6, 42754, -726, 118, 51,
      539, 790, -9972, 41752, 0, 31, -23957, -714, -446, 4, -61087, 84, -140, 6, 53, -48496, 9,
      -15357, 402, 5541, 4, 53936, 6, 3, 37591, 7, 30, -7197, -26607, 202, 140, -4, -7410, 2031,
      -715, 4, -60981, 365, -23620, -41, 4, -2482, -59, 5, -911, 52, 50068, 38, 61, 664, 0, -868,
      8681, -8, 8, 29, 412,
    ],
    131
  )
) //

// tag: 排序；快排；堆
