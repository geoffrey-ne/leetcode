/**
 * [中等]754. 到达终点数字
 * https://leetcode-cn.com/problems/reach-a-number/
 * 
在一根无限长的数轴上，你站在0的位置。终点在target的位置。

你可以做一些数量的移动 numMoves :

每次你可以选择向左或向右移动。
第 i 次移动（从  i == 1 开始，到 i == numMoves ），在选择的方向上走 i 步。
给定整数 target ，返回 到达目标所需的 最小 移动次数(即最小 numMoves ) 。

示例 1:

输入: target = 2
输出: 3
解释:
第一次移动，从 0 到 1 。
第二次移动，从 1 到 -1 。
第三次移动，从 -1 到 2 。
示例 2:

输入: target = 3
输出: 2
解释:
第一次移动，从 0 到 1 。
第二次移动，从 1 到 3 。
 

提示:

-109 <= target <= 109
target != 0

 */

/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
  target = Math.abs(target)
  let k = 0
  while (target > 0) {
    k++
    target -= k
  }
  return target % 2 === 0 ? k : k + 1 + (k % 2)
}

write('algorithms: 754. 到达终点数字', 'title')

write(reachNumber(1)) // 1
write(reachNumber(2)) // 3
write(reachNumber(3)) // 2

// tag: 数学分析
