/**
 * 杨辉三角 II：https://leetcode-cn.com/explore/learn/card/array-and-string/202/conclusion/792/
 */

/**
 * @param {number} row
 * @return {Array}
 */
var getRow = function(row) {
  const res = new Array(row + 1).fill(1)
  for (let i = row - 1; i >= 0; i--) {
    let prev = 1
    for (let j = 1; j < res.length - 1 - i; j++) {
      temp = res[j]
      res[j] = temp + prev
      prev = temp
    }
  }
  return res
}

/**
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 3
输出: [1,3,3,1]
进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？
 */

write('arrayAndString 17. getRow', 'title')

write(getRow(3)) // [1,3,3,1]
write(getRow(5)) // [1, 5, 10, 10, 5, 1]
