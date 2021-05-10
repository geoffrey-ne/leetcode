/**
 * [困难]面试题 08.12. 八皇后
 * https://leetcode-cn.com/problems/eight-queens-lcci/
 * 
设计一种算法，打印 N 皇后在 N × N 棋盘上的各种摆法，其中每个皇后都不同行、不同列，也不在对角线上。这里的“对角线”指的是所有的对角线，不只是平分整个棋盘的那两条对角线。

注意：本题相对原题做了扩展

示例:

 输入：4
 输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
 解释: 4 皇后问题存在如下两个不同的解法。
[
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = []
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill('.'))
  const visited = new Array(n).fill(0).map(() => new Array(n).fill(0))
  helper(matrix, n, 0, visited, res)
  return res
}

function helper(matrix, n, row, visited, res) {
  if (row === n) {
    res.push(formatMatrix(matrix))
    return
  }
  for (let i = 0; i < n; i++) {
    if (!visited[row][i]) {
      matrix[row][i] = 'Q'
      // 禁掉竖线和斜线
      updateVisited(visited, row, i, 1)
      helper(matrix, n, row + 1, visited, res)
      // 恢复
      updateVisited(visited, row, i, -1)
      matrix[row][i] = '.'
    }
  }
}

function updateVisited(visited, row, col, flag) {
  let left = col - 1
  let right = col + 1
  visited[row][col] += flag
  row++
  while (row < visited.length) {
    visited[row][col] += flag
    if (left >= 0) {
      visited[row][left] += flag
      left--
    }
    if (right < visited.length) {
      visited[row][right] += flag
      right++
    }
    row++
  }
}

function formatMatrix(matrix) {
  const res = []
  for (let i = 0; i < matrix.length; i++) {
    res.push(matrix[i].join(''))
  }
  return res
}

write('algorithms: 面试题 08.12. 八皇后', 'title')

write(solveNQueens(1))
write(solveNQueens(2))
write(solveNQueens(3))
write(solveNQueens(4))
write(solveNQueens(5))

// tag: 回溯；递归
