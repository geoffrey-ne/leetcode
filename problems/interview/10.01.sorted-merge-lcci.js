/**
 * [简单]面试题 10.01. 合并排序的数组
 * https://leetcode-cn.com/problems/sorted-merge-lcci/
 * 
给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。

示例:

输入:
A = [1,2,3,0,0,0], m = 3
B = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
说明:

A.length == n + m

*/

/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function (A, m, B, n) {
  let last = m + n - 1
  let pA = m - 1
  let pB = n - 1
  while (pB >= 0) {
    if (B[pB] >= A[pA] || pA < 0) {
      A[last] = B[pB]
      pB--
    } else {
      A[last] = A[pA]
      pA--
    }
    last--
  }
  console.log(A)
}

write('algorithms: 面试题 10.01. 合并排序的数组', 'title')

write(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)) // [1,2,2,3,5,6]
write(merge([0], 0, [1], 1)) // [1]

// tag: 数组
