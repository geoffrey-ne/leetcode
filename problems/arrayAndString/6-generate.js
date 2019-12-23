/**
 * 杨辉三角：https://leetcode-cn.com/explore/learn/card/array-and-string/199/introduction-to-2d-array/776/
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows === 0) {
    return []
  }
  if (numRows === 1) {
    return [[1]]
  }
  if (numRows === 2) {
    return [[1], [1, 1]]
  }
  const res = [[1], [1, 1]]
  for (let i = 2; i < numRows; i++) {
    const prevArr = res[i - 1]
    const curArr = []
    for (let j = 1; j < prevArr.length; j++) {
      curArr.push(prevArr[j] + prevArr[j - 1])
    }
    curArr.push(1)
    curArr.unshift(1)
    res.push(curArr)
  }
  return res
}

/**
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。

示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */

write('arrayAndString 6. generate', 'title')

write(generate(5))

/**
 * [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
 */
