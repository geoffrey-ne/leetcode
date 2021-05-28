/**
 * [中等]253. 会议室 II
 * https://leetcode-cn.com/problems/meeting-rooms-ii/
 * 
 * 
给你一个会议时间安排的数组 intervals ，
每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，
为避免会议冲突，同时要考虑充分利用会议室资源，请你计算至少需要多少间会议室，才能满足这些会议安排。

示例 1：

输入：intervals = [[0,30],[5,10],[15,20]]
输出：2
示例 2：

输入：intervals = [[7,10],[2,4]]
输出：1
 

提示：

1 <= intervals.length <= 104
0 <= starti < endi <= 106

*/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
  if (intervals.length <= 1) {
    return intervals.length
  }

  intervals.sort((arr1, arr2) => {
    return arr1[0] - arr2[0]
  })

  let list = [intervals[0][1]]
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    let isInsert = false
    for (let j = 0; j < list.length; j++) {
      if (cur[0] >= list[j]) {
        list[j] = cur[1]
        isInsert = true
        break
      }
    }
    if (!isInsert) {
      list.push(cur[1])
    }
  }
  return list.length
}

write('algorithms: 253. 会议室 II', 'title')

write(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
) // 2

write(
  minMeetingRooms([
    [7, 10],
    [2, 4],
  ])
) // 1

// tag
