/**
 * [简单]202. 快乐数
 * https://leetcode-cn.com/problems/happy-number/
 * 
 * 
编写一个算法来判断一个数 n 是不是快乐数。

「快乐数」定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果 可以变为  1，那么这个数就是快乐数。
如果 n 是快乐数就返回 true ；不是，则返回 false 。

 

示例 1：

输入：19
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
示例 2：

输入：n = 2
输出：false
 

提示：

1 <= n <= 231 - 1

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let slow = n
  let fast = n
  do {
    slow = cal(slow)
    fast = cal(fast)
    fast = cal(fast)
  } while (slow !== fast)
  return slow === 1
}

function cal(num) {
  let sum = 0
  while (num > 0) {
    sum += Math.pow(num % 10, 2)
    num = Math.floor(num / 10)
  }
  return sum
}

write(isHappy(19)) // true
write(isHappy(2)) // false

// tag: 快慢指针
