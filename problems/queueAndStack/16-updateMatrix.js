/**
 * 0 1 矩阵：https://leetcode-cn.com/explore/learn/card/queue-stack/220/conclusion/892/
 */

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  if (matrix.length === 0) {
    return matrix
  }
  const row = matrix.length
  const col = matrix[0].length

  let queue = []

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1])
      } else {
        matrix[i][j] = Number.MAX_SAFE_INTEGER
      }
    }
  }

  let step = 1

  while (queue.length > 0) {
    const nextQueue = []
    while (queue.length > 0) {
      const [curRow, curCol] = queue.pop()
      if (
        curRow >= 0 &&
        curRow < matrix.length &&
        curCol >= 0 &&
        curCol < matrix[0].length &&
        matrix[curRow][curCol] > step
      ) {
        matrix[curRow][curCol] = step
        nextQueue.push(
          [curRow - 1, curCol],
          [curRow + 1, curCol],
          [curRow, curCol - 1],
          [curRow, curCol + 1]
        )
      }
    }
    step++
    queue = nextQueue
  }

  return matrix
}

write('queueAndStack 16. updateMatrix', 'title')

/**
给定一个由 0 和 1 组成的矩阵，找出每个元素到最近的 0 的距离。

两个相邻元素间的距离为 1 。

示例 1:
输入:

0 0 0
0 1 0
0 0 0
输出:

0 0 0
0 1 0
0 0 0
示例 2:
输入:

0 0 0
0 1 0
1 1 1
输出:

0 0 0
0 1 0
1 2 1


1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 0

6 5 4 3
5 4 3 2
4 3 2 1
3 2 1 0

0 1 1
1 1 0
1 1 1
1 1 0

0 1 1
1 1 0
2 2 1
3 4 0


0 1 1
1 1 0
2 2 1
2 1 0
注意:

给定矩阵的元素个数不超过 10000。
给定矩阵中至少有一个元素是 0。
矩阵中的元素只在四个方向上相邻: 上、下、左、右。
 */

write(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
  ])
)
/**
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
 */

write(
  updateMatrix([
    [0, 0, 0],
    [0, 1, 0],
    [1, 1, 1]
  ])
)
/**
  [0, 0, 0],
  [0, 1, 0],
  [1, 2, 1]
 */
