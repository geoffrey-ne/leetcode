/**
 * 有效的括号：https://leetcode-cn.com/explore/learn/card/queue-stack/218/stack-last-in-first-out-data-structure/878/
 */

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  if (T.length === 0) {
    return []
  }
  const res = Array(T.length).fill(0)

  const stack = [[0, T[0]]] // [index, value]

  for (let i = 1; i < T.length; i++) {
    const cur = T[i]
    while (stack.length > 0) {
      const [index, value] = stack[stack.length - 1]
      // 如果当前数值比栈顶元素大，更新res，并出栈
      if (cur > value) {
        res[index] = i - index
        stack.pop()
      } else {
        break
      }
    }
    stack.push([i, cur])
  }
  return res
}

write('queueAndStack 6. dailyTemperatures', 'title')

write(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])) // [1, 1, 4, 2, 1, 1, 0, 0]
