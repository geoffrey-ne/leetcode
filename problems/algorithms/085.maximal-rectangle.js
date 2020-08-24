/**
 * [困难]85. 最大矩形
 * https://leetcode-cn.com/problems/maximal-rectangle/
 * 
 * 
给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。

示例:

输入:
[
  ["1","0","1","0","0"],
  ["1","0","1","1","1"],
  ["1","1","1","1","1"],
  ["1","0","0","1","0"]
]
输出: 6
 */

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  if (matrix.length === 0 || matrix[0].length === 0) {
    return 0
  }
  let max = 0
  let heights = new Array(matrix[0].length).fill(0)
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i]
    for (let j = 0; j < row.length; j++) {
      heights[j] = row[j] === '0' ? 0 : heights[j] + 1
    }
    max = Math.max(max, largestRectangleArea(heights))
  }
  return max
}

function largestRectangleArea(heights) {
  const len = heights.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return heights[0]
  }

  heights = [0, ...heights, 0]
  let res = 0
  const stack = [0]
  for (let i = 1; i < len + 2; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const curHeight = heights[stack.pop()]
      const curWidth = i - stack[stack.length - 1] - 1
      res = Math.max(res, curHeight * curWidth)
    }
    stack.push(i)
  }
  return res
}

write('algorithms: 85. 最大矩形', 'title')

write(
  maximalRectangle([
    ['1', '0', '1', '0', '0'],
    ['1', '0', '1', '1', '1'],
    ['1', '1', '1', '1', '1'],
    ['1', '0', '0', '1', '0'],
  ])
) // 6

// tag: 图形；求最值；单调栈；哨兵
