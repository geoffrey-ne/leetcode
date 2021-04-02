/**
 * [困难]面试题 17.21. 直方图的水量
 * https://leetcode-cn.com/problems/volume-of-histogram-lcci/
 * 
 * 
给定一个以字符串表示的非负整数 num，移除这个数中的 k 位数字，使得剩下的数字最小。

给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
                     __
         __         |  |__    __
   __   |  |__    __|  |  |__|  |__
__|  |__|  |  |__|  |  |  |  |  |  |

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的直方图，在这种情况下，可以接 6 个单位的水（蓝色部分表示水）。 感谢 Marcos 贡献此图。

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6
*/

/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
  let ans = 0
  const stack = []
  for (let i = 0; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      if (stack.length === 0) {
        break
      }
      const left = stack[stack.length - 1]
      const curWidth = i - left - 1
      const curHeight = Math.min(height[left], height[i]) - height[top]
      ans += curWidth * curHeight
    }
    stack.push(i)
  }
  return ans
}

write('algorithms: 面试题 17.21. 直方图的水量', 'title')

/**
 *              __
 __            |  |
|  |      __   |  |
|  |__   |  |__|  |
|  |  |  |  |  |  |
|  |  |__|  |  |  |
 */

write(trap([4, 2, 0, 3, 2, 5])) // 9
write(trap([5, 2, 1, 2, 1, 5])) // 14
write(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6
write(trap([0, 1, 0, 6, 1, 0, 1, 3, 2, 1, 2, 1])) // 9

// tag: 单调栈

//     进栈  出栈
// 1    1
// 2    2     1
// 3    2,1
// 4    2    2,1    2~2匹配 + 1
// 5    3    2
// 6    3,1
// 7    3,1,0
// 8    3,1  0     1~1匹配 + 1
// 9    3,2  1     2~3匹配 + 3
// 10   3,2,0
// 11   3,2,1  0   1~2匹配 + 1
// 12   3,2,1,0
