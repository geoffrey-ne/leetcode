/**
 * [简单]面试题 16.07. 最大数值
 * https://leetcode-cn.com/problems/maximum-lcci/
 * 
编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。

示例：

输入： a = 1, b = 2
输出： 2

*/

/**
 * 小的会被抵消掉
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var maximum = function (a, b) {
  return (Math.abs(a - b) + a + b) / 2
}

write('algorithms: 面试题 16.07. 最大数值', 'title')

write(maximum(1, 2)) // 2

// tag: 数学
