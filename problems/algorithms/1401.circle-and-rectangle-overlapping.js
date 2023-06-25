/**
 * [中等]1401. 圆和矩形是否有重叠
 * https://leetcode-cn.com/problems/circle-and-rectangle-overlapping/
 * 
 * 
给你一个以 (radius, xCenter, yCenter) 表示的圆和一个与坐标轴平行的矩形 (x1, y1, x2, y2) ，其中 (x1, y1) 是矩形左下角的坐标，而 (x2, y2) 是右上角的坐标。

如果圆和矩形有重叠的部分，请你返回 true ，否则返回 false 。

换句话说，请你检测是否 存在 点 (xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。

示例 1 ：

输入：radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
输出：true
解释：圆和矩形存在公共点 (1,0) 。
示例 2 ：

输入：radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
输出：false
示例 3 ：


输入：radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
输出：true
 

提示：

1 <= radius <= 2000
-104 <= xCenter, yCenter <= 104
-104 <= x1 < x2 <= 104
-104 <= y1 < y2 <= 104

*/

/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
function distance(ux, uy, vx, vy) {
  return (ux - vx) ** 2 + (uy - vy) ** 2
}

var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  /* 圆心在矩形内部 */
  if (x1 <= xCenter && xCenter <= x2 && y1 <= yCenter && yCenter <= y2) {
    return true
  }
  /* 圆心在矩形上部 */
  if (x1 <= xCenter && xCenter <= x2 && y2 <= yCenter && yCenter <= y2 + radius) {
    return true
  }
  /* 圆心在矩形下部 */
  if (x1 <= xCenter && xCenter <= x2 && y1 - radius <= yCenter && yCenter <= y1) {
    return true
  }
  /* 圆心在矩形左部 */
  if (x1 - radius <= xCenter && xCenter <= x1 && y1 <= yCenter && yCenter <= y2) {
    return true
  }
  /* 圆心在矩形右部 */
  if (x2 <= xCenter && xCenter <= x2 + radius && y1 <= yCenter && yCenter <= y2) {
    return true
  }
  /* 矩形左上角 */
  if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
    return true
  }
  /* 矩形左下角 */
  if (distance(xCenter, yCenter, x1, y1) <= radius * radius) {
    return true
  }
  /* 矩形右上角 */
  if (distance(xCenter, yCenter, x2, y2) <= radius * radius) {
    return true
  }
  /* 矩形右下角 */
  if (distance(xCenter, yCenter, x1, y2) <= radius * radius) {
    return true
  }
  /* 无交点 */
  return false
}

function checkOverlap1(radius, xCenter, yCenter, x1, y1, x2, y2) {
  const f = (i, j, k) => {
    if (i <= k && k <= j) {
      return 0
    }
    return k < i ? i - k : k - j
  }
  const a = f(x1, x2, xCenter)
  const b = f(y1, y2, yCenter)
  return a * a + b * b <= radius * radius
}

write('algorithms: 1401. 圆和矩形是否有重叠', 'title')

write(checkOverlap(1, 0, 0, 1, -1, 3, 1)) // true
write(checkOverlap(1, 1, 1, 1, -3, 2, -1)) // false
write(checkOverlap(1, 0, 0, -1, 0, 0, 1)) // true

// tags: 数学
