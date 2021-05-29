/**
 * [困难]1074. 元素和为目标值的子矩阵数量
 * https://leetcode-cn.com/problems/number-of-submatrices-that-sum-to-target/
 * 
 * 
给出矩阵 matrix 和目标值 target，返回元素总和等于目标值的非空子矩阵的数量。

子矩阵 x1, y1, x2, y2 是满足 x1 <= x <= x2 且 y1 <= y <= y2 的所有单元 matrix[x][y] 的集合。

如果 (x1, y1, x2, y2) 和 (x1', y1', x2', y2') 两个子矩阵中部分坐标不同（如：x1 != x1'），那么这两个子矩阵也不同。

示例 1：

0 1 0
1 1 1
0 1 0

输入：matrix = [[0,1,0],[1,1,1],[0,1,0]], target = 0
输出：4
解释：四个只含 0 的 1x1 子矩阵。
示例 2：

 1  -1
-1   1

输入：matrix = [[1,-1],[-1,1]], target = 0
输出：5
解释：两个 1x2 子矩阵，加上两个 2x1 子矩阵，再加上一个 2x2 子矩阵。
示例 3：

输入：matrix = [[904]], target = 0
输出：0
 

提示：

1 <= matrix.length <= 100
1 <= matrix[0].length <= 100
-1000 <= matrix[i] <= 1000
-10^8 <= target <= 10^8

*/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {number}
 */
var numSubmatrixSumTarget = function (matrix, target) {
  const row = matrix.length
  const col = matrix[0].length

  let res = 0

  for (let i = 0; i < col; i++) {
    for (let j = i; j < col; j++) {
      const arr = new Array(row).fill(0)
      for (let k = 0; k < row; k++) {
        for (let a = i; a <= j; a++) {
          arr[k] += matrix[k][a]
        }
      }
      res += subarraySum(arr, target)
    }
  }
  return res
}

// 连续数组，求目标和
function subarraySum(nums, k) {
  const mp = new Map()
  mp.set(0, 1)
  let count = 0,
    pre = 0
  for (const x of nums) {
    pre += x
    if (mp.has(pre - k)) {
      count += mp.get(pre - k)
    }
    if (mp.has(pre)) {
      mp.set(pre, mp.get(pre) + 1)
    } else {
      mp.set(pre, 1)
    }
  }
  return count
}

write('algorithms: 1074. 元素和为目标值的子矩阵数量', 'title')

write(
  numSubmatrixSumTarget(
    [
      [0, 1, 0],
      [1, 1, 1],
      [0, 1, 0],
    ],
    0
  )
) // 4
write(
  numSubmatrixSumTarget(
    [
      [1, -1],
      [-1, 1],
    ],
    0
  )
) // 5
write(numSubmatrixSumTarget([[904]], 0)) // 0

// tag: 前缀和；降维
