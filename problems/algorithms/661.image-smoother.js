/**
 * [简单]661. 图片平滑器
 * https://leetcode-cn.com/problems/image-smoother/
 * 
 * 
图像平滑器 是大小为 3 x 3 的过滤器，用于对图像的每个单元格平滑处理，平滑处理后单元格的值为该单元格的平均灰度。

每个单元格的  平均灰度 定义为：该单元格自身及其周围的 8 个单元格的平均值，结果需向下取整。（即，需要计算蓝色平滑器中 9 个单元格的平均值）。

如果一个单元格周围存在单元格缺失的情况，则计算平均灰度时不考虑缺失的单元格（即，需要计算红色平滑器中 4 个单元格的平均值）。

给你一个表示图像灰度的 m x n 整数矩阵 img ，返回对图像的每个单元格平滑处理后的图像 。

示例 1:

输入:img = [[1,1,1],[1,0,1],[1,1,1]]
输出:[[0, 0, 0],[0, 0, 0], [0, 0, 0]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0

1 1 1
1 0 1
1 1 1

示例 2:

输入: img = [[100,200,100],[200,50,200],[100,200,100]]
输出: [[137,141,137],[141,138,141],[137,141,137]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
对于点 (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
对于点 (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
 
提示:

m == img.length
n == img[i].length
1 <= m, n <= 200
0 <= img[i][j] <= 255

*/

/**
 * 暴力法
 *
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother1 = function (img) {
  const m = img.length
  const n = img[0].length
  const res = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let num = 0
      let sum = 0
      for (let x = i - 1; x <= i + 1; x++) {
        for (let y = j - 1; y <= j + 1; y++) {
          if (x >= 0 && x < m && y >= 0 && y < n) {
            num++
            sum += img[x][y]
          }
        }
      }
      res[i][j] = Math.floor(sum / num)
    }
  }
  return res
}

/**
 * 前缀和
 *
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length
  const n = img[0].length
  const preSum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  const ans = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      preSum[i + 1][j + 1] = preSum[i + 1][j] + preSum[i][j + 1] - preSum[i][j] + img[i][j]
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const di = Math.max(0, i - 1)
      const ui = Math.min(m, i + 2)
      const dj = Math.max(0, j - 1)
      const uj = Math.min(n, j + 2)

      ans[i][j] = Math.floor(
        (preSum[ui][uj] - preSum[ui][dj] - preSum[di][uj] + preSum[di][dj]) /
          ((ui - di) * (uj - dj))
      )
    }
  }

  return ans
}

write('algorithms: 661. 图片平滑器', 'title')

write(
  imageSmoother([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
) // [[0, 0, 0],[0, 0, 0], [0, 0, 0]]
write(
  imageSmoother([
    [100, 200, 100],
    [200, 50, 200],
    [100, 200, 100],
  ])
) // [[137,141,137],[141,138,141],[137,141,137]]

// tag: 矩阵；暴力；前缀和
