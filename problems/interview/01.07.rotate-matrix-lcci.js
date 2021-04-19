/**
 * [中等]面试题 01.07. 旋转矩阵
 * https://leetcode-cn.com/problems/rotate-matrix-lcci/
 * 
 * 
给你一幅由 N × N 矩阵表示的图像，其中每个像素的大小为 4 字节。请你设计一种算法，将图像旋转 90 度。

不占用额外内存空间能否做到？

示例 1:

给定 matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

原地旋转输入矩阵，使其变为:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
示例 2:

给定 matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

原地旋转输入矩阵，使其变为:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
注意：本题与主站 48 题相同：https://leetcode-cn.com/problems/rotate-image/

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const N = matrix.length

  let start = 0
  let end = N - 1
  while (start < end) {
    for (let i = start; i < end; i++) {
      const points = [
        [start, i],
        [i, end],
        [end, N - i - 1],
        [N - i - 1, start],
      ]
      let pre = matrix[points[0][0]][points[0][1]]
      for (let j = 0; j < points.length - 1; j++) {
        const [nextRow, nextCol] = points[j + 1]
        const tmp = matrix[nextRow][nextCol]
        matrix[nextRow][nextCol] = pre
        pre = tmp
      }
      matrix[points[0][0]][points[0][1]] = pre
    }
    start++
    end--
  }
}

write('algorithms: 面试题 01.07. 旋转矩阵', 'title')

write(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
)
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]

write(
  rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16],
  ])
)
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

// tag: 矩阵
