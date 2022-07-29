/**
 * [中等]593. 有效的正方形
 * https://leetcode-cn.com/problems/valid-square/
 * 
给定2D空间中四个点的坐标 p1, p2, p3 和 p4，如果这四个点构成一个正方形，则返回 true 。

点的坐标 pi 表示为 [xi, yi] 。输入 不是 按任何顺序给出的。

一个 有效的正方形 有四条等边和四个等角(90度角)。


示例 1:

输入: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
输出: True
示例 2:

输入：p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
输出：false
示例 3:

输入：p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
输出：true
 

提示:

p1.length == p2.length == p3.length == p4.length == 2
-104 <= xi, yi <= 104

*/

/**
 * 满足三个角就可以了
 *
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
  return oneCorner(p1, p2, p3, p4) && oneCorner(p2, p1, p3, p4) && oneCorner(p3, p1, p2, p4)
}

// 两点距离的平方
const getLenPow2OfTwoPoint = (p1, p2) => {
  const a = p1[0] - p2[0]
  const b = p1[1] - p2[1]
  return a * a + b * b
}

// 一个角
const oneCorner = (p1, p2, p3, p4) => {
  const len1 = getLenPow2OfTwoPoint(p1, p2)
  const len2 = getLenPow2OfTwoPoint(p1, p3)
  const len3 = getLenPow2OfTwoPoint(p1, p4)

  return (
    len1 !== 0 &&
    len2 !== 0 &&
    len3 !== 0 &&
    ((len1 === len2 && len1 + len2 === len3) ||
      (len1 === len3 && len1 + len3 === len2) ||
      (len2 === len3 && len2 + len3 === len1))
  )
}

write('algorithms: 593. 有效的正方形', 'title')

write(validSquare([0, 0], [0, 0], [0, 0], [0, 0])) // false
write(validSquare([0, 1], [1, 2], [0, 2], [0, 0])) // false
write(validSquare([0, 0], [1, 1], [1, 0], [0, 1])) // true
write(validSquare([0, 0], [1, 1], [1, 0], [0, 12])) // false
write(validSquare([1, 0], [-1, 0], [0, 1], [0, -1])) // true

// tag: 数组；有效图形；数学
