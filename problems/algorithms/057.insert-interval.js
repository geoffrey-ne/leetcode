/**
 * [中等]57. 插入区间
 * https://leetcode-cn.com/problems/insert-interval/
 * 
 * 
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

 

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
示例 4：

输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
示例 5：

输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]
 

提示：

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= intervals[i][0] <= intervals[i][1] <= 105
intervals 根据 intervals[i][0] 按 升序 排列
newInterval.length == 2
0 <= newInterval[0] <= newInterval[1] <= 105

 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length === 0) {
    return [newInterval]
  }
  let isMerge = false
  let enableMerge = false
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[0] <= intervals[i][0]) {
      intervals.splice(i, 0, newInterval)
      if (i !== 0 && intervals[i - 1][1] >= intervals[i][0]) {
        i--
        intervals[i][1] = intervals[i + 1][1]
        intervals.splice(i, 1)
      }
      enableMerge = true
    } else if (newInterval[0] <= intervals[i][1]) {
      intervals.splice(i + 1, 0, newInterval)
      enableMerge = true
    }
    if (enableMerge) {
      while (i + 1 < intervals.length && intervals[i][1] >= intervals[i + 1][0]) {
        intervals[i][1] = Math.max(intervals[i][1], intervals[i + 1][1])
        intervals.splice(i + 1, 1)
      }
      isMerge = true
      break
    }
  }

  if (!isMerge) {
    intervals.push(newInterval)
  }
  return intervals
}

write('algorithms: 57. 插入区间', 'title')

write(
  insert(
    [
      [0, 5],
      [9, 12],
    ],
    [7, 16]
  )
) // [[0,5],[7,16]]
write(insert([[1, 5]], [6, 8])) // [[1,5],[6,8]]
write(insert([[6, 8]], [1, 5])) // [[1,5],[6,8]]

write(
  insert(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
) // [[1,5],[6,9]]

write(
  insert(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
) // [[1,2],[3,10],[12,16]]

write(insert([[1, 5]], [2, 3])) // [1,5]

write(insert([[1, 5]], [2, 7])) // [1,7]

write(insert([], [5, 7])) // [5,7]

// tag: 数组
