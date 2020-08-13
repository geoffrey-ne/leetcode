/**
 * [简单]69. x 的平方根
 * https://leetcode-cn.com/problems/sqrtx/
 * 
 * 
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

示例 1:

输入: 4
输出: 2

示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x
  }
  let res = 1
  while (res * res <= x) {
    res = res * 2
  }
  res = res / 2
  while (res * res <= x) {
    res = res + 1
  }
  return res - 1
}

write('algorithms: 69. x 的平方根', 'title')

write(mySqrt(1)) // 1
write(mySqrt(2)) // 1
write(mySqrt(4)) // 2
write(mySqrt(8)) // 2
write(mySqrt(9)) // 3
write(mySqrt(10)) // 3
write(mySqrt(256)) // 16

// tag: 算数运算；牛顿迭代
