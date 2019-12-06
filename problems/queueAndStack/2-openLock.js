/**
 * 打开转盘锁：https://leetcode-cn.com/explore/learn/card/queue-stack/217/queue-and-bfs/873/
 *
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  const deadendSets = new Set(deadends)
  if (deadendSets.has('0000')) {
    return -1
  }

  const queue = ['0000']
  let step = 0
  debugger
  while (queue.length > 0) {
    let size = queue.length
    while (size > 0) {
      const cur = queue.shift()
      deadendSets.add(cur)
      if (cur === target) {
        return step
      }
      cur.split('').forEach((num, index, arr) => {
        // debugger
        const oneStep1 = stepNext(num, index, arr.slice(0))
        const onestep2 = stepPrev(num, index, arr.slice(0))

        if (!deadendSets.has(oneStep1)) {
          queue.push(oneStep1)
          deadendSets.add(oneStep1)
        }

        if (!deadendSets.has(onestep2)) {
          queue.push(onestep2)
          deadendSets.add(oneStep1)
        }
      })
      size--
    }
    step++
  }
  return -1
}

function stepNext(numStr, index, arr) {
  const next = (Number(numStr) + 1) % 10
  arr[index] = next
  return arr.join('')
}

function stepPrev(numStr, index, arr) {
  const prev = (Number(numStr) + 9) % 10
  arr[index] = prev
  return arr.join('')
}

// 0000 -> 1000 9000

write('queueAndStack 2. openLock', 'title')
// write(openLock(['0201', '0101', '0102', '1212', '2002'], '0202')) // 6
write(openLock(['8888'], '0009')) // 1
write(openLock(['8887', '8889', '8878', '8898', '8788', '8988', '7888', '9888'], '8888')) // -1
write(openLock(['0000'], '8888')) // -1

/**
 * 思路：因为是求最短路径，所以可以考虑使用广度优先遍历(BFS)
 */
