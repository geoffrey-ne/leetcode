/**
 * [中等]56. 合并区间
 * https://leetcode-cn.com/problems/merge-intervals/
 * 
 * 
给出一个区间的集合，请合并所有重叠的区间。

示例 1:

输入: [[1,3],[2,6],[8,10],[15,18]]
输出: [[1,6],[8,10],[15,18]]
解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2:

输入: [[1,4],[4,5]]
输出: [[1,5]]
解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。

 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((arr1, arr2) => arr1[0] - arr2[0])
  let curIndex = 0
  let nextIndex = 1
  const res = []

  while (nextIndex <= intervals.length - 1) {
    const cur = intervals[curIndex]
    const next = intervals[nextIndex]

    if (cur[1] >= next[0]) {
      next[0] = cur[0]
      next[1] = Math.max(cur[1], next[1])
      intervals.splice(curIndex, 1)
    } else {
      curIndex++
      nextIndex++
    }
  }
  return intervals
}

write('algorithms: 56. 合并区间', 'title')

write(
  merge([
    [1, 4],
    [0, 4],
  ])
) // [0, 4]
write(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
) // [[1,6],[8,10],[15,18]]
write(
  merge([
    [1, 4],
    [4, 5],
  ])
) // [[1,5]]

// tag: 数组
