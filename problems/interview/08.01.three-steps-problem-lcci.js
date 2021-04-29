/**
 * [简单]面试题 08.01. 三步问题
 * https://leetcode-cn.com/problems/three-steps-problem-lcci/
 * 
三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。
实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

示例1:

 输入：n = 3 
 输出：4
 说明: 有四种走法
示例2:

 输入：n = 5
 输出：13
提示:

n范围在[1, 1000000]之间

*/

/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  const res = [1, 2, 4]
  for (let i = 4; i <= n; i++) {
    const tmp = res[0] + res[1] + res[2]
    res[0] = res[1]
    res[1] = res[2]
    res[2] = tmp % 1000000007
  }
  return n < 4 ? res[n - 1] : res[2]
}

write('algorithms: 面试题 08.01. 三步问题', 'title')

write(waysToStep(76)) // 176653584
write(waysToStep(3)) // 4
write(waysToStep(5)) // 13

// tag: 也算DP吧？
