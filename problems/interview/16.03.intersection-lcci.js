/**
 * [困难]面试题 16.03. 交点
 * https://leetcode-cn.com/problems/intersection-lcci/
 * 
给定两条线段（表示为起点start = {X1, Y1}和终点end = {X2, Y2}），如果它们有交点，请计算其交点，没有交点则返回空值。

要求浮点型误差不超过10^-6。若有多个交点（线段重叠）则返回 X 值最小的点，X 坐标相同则返回 Y 值最小的点。

 

示例 1：

输入：
line1 = {0, 0}, {1, 0}
line2 = {1, 1}, {0, -1}
输出： {0.5, 0}
示例 2：

输入：
line1 = {0, 0}, {3, 3}
line2 = {1, 1}, {2, 2}
输出： {1, 1}
示例 3：

输入：
line1 = {0, 0}, {1, 1}
line2 = {1, 0}, {2, 1}
输出： {}，两条线段没有交点
 

提示：

坐标绝对值不会超过 2^7
输入的坐标均是有效的二维坐标

*/

/**
 * @param {number[]} start1
 * @param {number[]} end1
 * @param {number[]} start2
 * @param {number[]} end2
 * @return {number[]}
 */
var intersection = function (start1, end1, start2, end2) {
  const [a1, b1] = getAB(start1, end1)
  const [a2, b2] = getAB(start2, end2)

  if (a1 === a2) {
    // 如果两条线段平行，那可能没有交点，也可能重叠
    if (b1 !== b2) {
      // 平行
      return []
    } else {
      // 重叠
      const in1 = isInPoint(start1, start2, end2)
      const in2 = isInPoint(start2, start1, end1)

      if (in1 && in2) {
        return start1.x <= start2.x ? start1 : start2
      } else if (in1) {
        return start1
      } else if (in2) {
        return start2
      }

      // 相离
      return []
    }
  } else {
    // 线段所在的直线必存在交点，判断该点是否在线段内即可
    let point = [0, 0]
    if (typeof a1 === 'undefined') {
      point[0] = start1[0]
      point[1] = a2 * start1[0] + b2
    } else if (typeof a2 === 'undefined') {
      point[0] = start2[0]
      point[1] = a1 * start2[0] + b1
    } else {
      point[0] = Number(((b2 - b1) / (a1 - a2)).toFixed(6))
      point[1] = Number(((a2 * b1 - a1 * b2) / (a2 - a1)).toFixed(6))
    }
    if (isInPoint(point, start1, end1) && isInPoint(point, start2, end2)) {
      return point
    }
    return []
  }
}

// y = ax + b
function getAB(start, end) {
  const [x1, y1] = start
  const [x2, y2] = end

  if (x1 === x2) {
    return []
  } else {
    return [(y1 - y2) / (x1 - x2), (x1 * y2 - x2 * y1) / (x1 - x2)]
  }
}

// 判断point是否在线段内
function isInPoint(point, start, end) {
  return isIn(point[0], start[0], end[0]) && isIn(point[1], start[1], end[1])
}

function isIn(num, start, end) {
  return (num >= start && num <= end) || (num <= start && num >= end)
}

write('algorithms: 面试题 16.01. 交换数字', 'title')

write(intersection([-10, 48], [-43, 46], [-16, 59], [-1, 85])) // []
write(intersection([12, -55], [59, -60], [4, -55], [81, -62])) // [59.0,-60.0]
write(intersection([0, -1], [0, 1], [-1, 1], [1, 3])) // []
write(intersection([1, 0], [1, 1], [-1, 0], [3, 2])) // [1, 1]
write(intersection([0, 0], [1, -1], [0, 0], [-1, 1])) // [0, 0]
write(intersection([0, 0], [1, 0], [1, 1], [0, -1])) // [0.5, 0]
write(intersection([0, 0], [3, 3], [1, 1], [2, 2])) // [1, 1]
write(intersection([0, 0], [1, 1], [1, 0], [2, 1])) // []

// tag: 异或
