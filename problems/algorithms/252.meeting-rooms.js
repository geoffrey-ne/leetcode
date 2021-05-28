/**
 * [简单]252. 会议室
 * https://leetcode-cn.com/problems/meeting-rooms/
 * 
 * 
给定一个会议时间安排的数组 intervals ，
每个会议时间都会包括开始和结束的时间 intervals[i] = [starti, endi] ，
请你判断一个人是否能够参加这里面的全部会议。

示例 1：

输入：intervals = [[0,30],[5,10],[15,20]]
输出：false
示例 2：

输入：intervals = [[7,10],[2,4]]
输出：true
 

提示：

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti < endi <= 106

*/

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  if (intervals.length <= 1) {
    return true
  }

  intervals.sort((arr1, arr2) => {
    return arr1[0] - arr2[0]
  })
  let pre = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i]
    if (cur[0] <= pre[1]) {
      return false
    } else {
      pre = cur
    }
  }
  return true
}

write('algorithms: 252. 会议室', 'title')

write(
  canAttendMeetings([
    [7, 10],
    [2, 4],
    [6, 8],
  ])
) // false

write(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
) // false
write(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
) // true

// tag；排序
