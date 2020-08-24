/**
 * [困难]84. 柱状图中最大的矩形
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/
 * 
 * 
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

以上是柱状图的示例，其中每个柱子的宽度为 1，给定的高度为 [2,1,5,6,2,3]。

图中阴影部分为所能勾勒出的最大矩形面积，其面积为 10 个单位。

示例:
          __
       __|  |
      |  |  |
      |  |  |   __
 __   |  |  |__|  |
|  |__|  |  |  |  |
|__|__|__|__|__|__|

输入: [2,1,5,6,2,3]
输出: 10

          __
       __|  |
      |  |  |
      |  |  |__ __
 __   |  |  |  |  |
|  |__|  |  |  |  |
|__|__|__|__|__|__|

输入: [2,1,5,6,3,3]
输出: 12

6 [1, 0, 4, 5, 2, 2] 1
8 [0, 0, 3, 4, 1, 1] 2
12[0, 0, 2, 3, 0, 0] 3
12[0, 0, 1, 2, 0, 0] 4
12[0, 0, 0, 1, 0, 0] 5
12 8 + 4 = 12



                     __
         __         |  |__    __
   __   |  |__    __|  |  |__|  |__
__|__|__|__|__|__|__|__|__|__|__|__|

输入: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
输出: 6


 */

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const len = heights.length
  if (len === 0) {
    return 0
  }
  if (len === 1) {
    return heights[0]
  }

  heights = [0, ...heights, 0]
  let res = 0
  const stack = [0]
  for (let i = 1; i < len + 2; i++) {
    while (heights[i] < heights[stack[stack.length - 1]]) {
      const curHeight = heights[stack.pop()]
      const curWidth = i - stack[stack.length - 1] - 1
      res = Math.max(res, curHeight * curWidth)
    }
    stack.push(i)
  }
  return res
}

// int res = 0;

// int[] newHeights = new int[len + 2];
// newHeights[0] = 0;
// System.arraycopy(heights, 0, newHeights, 1, len);
// newHeights[len + 1] = 0;
// len += 2;
// heights = newHeights;

// Deque<Integer> stack = new ArrayDeque<>(len);
// // 先放入哨兵，在循环里就不用做非空判断
// stack.addLast(0);

// for (int i = 1; i < len; i++) {
//     while (heights[i] < heights[stack.peekLast()]) {
//         int curHeight = heights[stack.pollLast()];
//         int curWidth = i - stack.peekLast() - 1;
//         res = Math.max(res, curHeight * curWidth);
//     }
//     stack.addLast(i);
// }
// return res;

write('algorithms: 84. 柱状图中最大的矩形', 'title')

write(largestRectangleArea([2, 1, 5, 6, 2, 3])) // 10
write(largestRectangleArea([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6

// tag: 图形；求最值；单调栈；哨兵
