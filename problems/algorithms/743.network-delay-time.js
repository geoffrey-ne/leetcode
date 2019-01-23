/**
 * [★★★★★]743. Network Delay Time
 * finish: 2019-01-23
 * https://leetcode.com/problems/network-delay-time/description/
 */

/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
var networkDelayTime = function(times, N, K) {
  if (times.length < N - 1) {
    return -1
  }

  const graph = {}
  times.forEach(item => {
    const [start, end, weight] = item
    if (!graph[start]) {
      graph[start] = [[end, weight]]
    } else {
      graph[start].push([end, weight])
    }
  })

  // init
  const dist = Array(N + 1).fill(Number.MAX_SAFE_INTEGER)
  dist[K] = 0
  const visited = Array(N + 1).fill(false)

  let safeCount = 100000
  while (true && safeCount-- > 0) {
    let curNode = -1
    let curWeight = Number.MAX_SAFE_INTEGER

    for (let i = 1; i <= N; i++) {
      if (!visited[i] && dist[i] < curWeight) {
        curNode = i
        curWeight = dist[i]
      }
    }

    if (curNode < 0) {
      break
    }

    visited[curNode] = true

    if (graph[curNode]) {
      graph[curNode].forEach(item => {
        const [end, weight] = item
        dist[end] = Math.min(dist[end], dist[curNode] + weight)
      })
    }
  }
  debugger
  let res = 0
  for (let i = 1; i <= N; i++) {
    res = Math.max(res, dist[i])
  }
  return res === Number.MAX_SAFE_INTEGER ? -1 : res
}

write('algorithms: 743. Network Delay Time', 'title')

write(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 3)) // 2
