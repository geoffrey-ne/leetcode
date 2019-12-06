/**
 * 完全平方数：https://leetcode-cn.com/explore/learn/card/queue-stack/217/queue-and-bfs/874/
 *
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n <= 3) {
    return n
  }

  let step = 1
  let nexts = [n]
  debugger

  while (nexts.length > 0) {
    const nums = nexts.slice(0)
    nexts = []

    for (num of nums) {
      const sqrt = Math.sqrt(num)
      const intSqrt = parseInt(sqrt)
      if (sqrt === intSqrt) {
        return step
      }

      for (let i = intSqrt; i > 0; i--) {
        const next = num - i * i
        if (nexts.indexOf(next) < 0) {
          nexts.push(next)
        }
      }
    }
    step++
  }
  return step
}

write('queueAndStack 3. numSquares', 'title')
write(numSquares(12)) // 3  -> 4 + 4 + 4
write(numSquares(13)) // 2  -> 4 + 9
