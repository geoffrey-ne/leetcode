/**
 * 螺旋矩阵：https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/775/
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return []
  }

  const M = matrix.length
  const N = matrix[0].length

  if (M === 1) {
    return matrix[0]
  }

  if (N === 0) {
    return []
  }

  if (N === 1) {
    return getTopToDown(matrix)
  }

  const first = matrix[0] // left to right
  const third = matrix[matrix.length - 1].reverse() // right to left

  matrix.pop()
  matrix.shift()

  const second = getTopToDown(matrix) // top to down
  const forth = getDownToTop(matrix) // down to top

  return [...first, ...second, ...third, ...forth, ...spiralOrder(matrix)]
}

function getTopToDown(matrix) {
  const res = []
  for (let i = 0; i < matrix.length; i++) {
    res.push(matrix[i].pop())
  }
  return res
}

function getDownToTop(matrix) {
  const res = []
  for (let i = matrix.length - 1; i >= 0; i--) {
    res.push(matrix[i].shift())
  }
  return res
}

/**
给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。

示例 1:

输入:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
输出: [1,2,3,6,9,8,7,4,5]


[0, 0] [0, 1] [0, 2] [1, 2] [2, 2] [2, 1] [2, 0] [1, 0] [1, 1]

示例 2:

输入:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20]
]
输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

write('arrayAndString 5. spiralOrder', 'title')

write(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
) // [1,2,3,6,9,8,7,4,5]

write(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
) // [1,2,3,4,8,12,11,10,9,5,6,7]

write(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
  ])
) // [1, 2, 3, 4, 8, 12, 16, 20, 19, 18, 17, 13, 9, 5, 6, 7, 11, 15, 14, 10]
