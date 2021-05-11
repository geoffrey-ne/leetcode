/**
 * [困难]面试题 08.13. 堆箱子
 * https://leetcode-cn.com/problems/pile-box-lcci/
 * 
堆箱子。给你一堆n个箱子，箱子宽 wi、深 di、高 hi。箱子不能翻转，将箱子堆起来时，下面箱子的宽度、高度和深度必须大于上面的箱子。
实现一种方法，搭出最高的一堆箱子。箱堆的高度为每个箱子高度的总和。

输入使用数组[wi, di, hi]表示每个箱子。

示例1:

 输入：box = [[1, 1, 1], [2, 2, 2], [3, 3, 3]]
 输出：6
示例2:

 输入：box = [[1, 1, 1], [2, 3, 4], [2, 6, 7], [3, 4, 5]]
 输出：10
提示:

箱子的数目不大于3000个。

*/

/**
 * @param {number[][]} box
 * @return {number}
 */
var pileBox = function (box) {
  box.sort((b1, b2) => b1[2] - b2[2])
  var len = box.length
  var heights = box.map((b) => b[2])

  for (var b = 1; b < len; b++) {
    var bigger = box[b]
    var max = heights[b]
    for (var s = 0; box[s][2] < heights[b]; s++) {
      var smaller = box[s]
      if (smaller[0] < bigger[0] && smaller[1] < bigger[1]) {
        max = Math.max(max, heights[s] + heights[b])
      }
    }
    heights[b] = max
  }

  return Math.max(...heights)
}

write('algorithms: 面试题 08.13. 堆箱子', 'title')

write(
  pileBox([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ])
) // 6
write(
  pileBox([
    [1, 1, 1],
    [2, 3, 4],
    [2, 6, 7],
    [3, 4, 5],
  ])
) // 10

// tag: LIS算法
