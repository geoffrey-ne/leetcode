/**
 * [中等]面试题 04.01. 节点间通路
 * https://leetcode-cn.com/problems/route-between-nodes-lcci/
 * 
 * 
节点间通路。给定有向图，设计一个算法，找出两个节点之间是否存在一条路径。

示例1:

 输入：n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2
 输出：true

   1 2
0
   2


示例2:

 输入：n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4
 输出 true
提示：

节点数量n在[0, 1e5]范围内。
节点编号大于等于 0 小于 n。
图中可能存在自环和平行边。

*/

/**
 * @param {number} n
 * @param {number[][]} graph
 * @param {number} start
 * @param {number} target
 * @return {boolean}
 */
var findWhetherExistsPath1 = function (n, graph, start, target) {
  if (start === target) {
    return true
  }
  const hashMap = {}
  for (const val of graph) {
    if (typeof hashMap[val[0]] === 'undefined') {
      hashMap[val[0]] = new Set()
    }
    hashMap[val[0]].add(val[1])
  }
  const visited = new Set()
  const queue = [start]
  while (queue.length > 0) {
    const cur = queue.shift()
    visited.add(cur)
    if (typeof hashMap[cur] !== 'undefined') {
      if (hashMap[cur].has(target)) {
        return true
      }
      for (const val of hashMap[cur]) {
        if (!visited.has(val)) {
          queue.push(val)
        }
      }
    }
  }
  return false
}

// set存放的就是可以走到的路径，一直到无法更新为止
var findWhetherExistsPath = function (n, graph, start, target) {
  if (start === target) return true
  const set = new Set([start])
  let count = 1
  while (true) {
    for (const item of graph) {
      if (set.has(item[0])) {
        if (item[1] === target) return true
        set.add(item[1])
      }
    }
    if (set.size > count) {
      count = set.size
    } else {
      return false
    }
  }
}

write('algorithms: 面试题 04.01. 节点间通路', 'title')

write(
  findWhetherExistsPath(
    64,
    [
      [0, 1],
      [0, 3],
      [0, 6],
      [0, 7],
      [0, 28],
      [1, 2],
      [2, 44],
      [2, 59],
      [3, 4],
      [3, 13],
      [3, 14],
      [3, 17],
      [4, 5],
      [4, 8],
      [4, 10],
      [4, 11],
      [5, 16],
      [5, 20],
      [5, 25],
      [6, 29],
      [6, 36],
      [6, 41],
      [7, 9],
      [7, 21],
      [7, 37],
      [9, 12],
      [9, 19],
      [9, 30],
      [10, 39],
      [12, 18],
      [12, 22],
      [12, 34],
      [13, 32],
      [14, 15],
      [14, 35],
      [15, 24],
      [15, 51],
      [16, 23],
      [16, 27],
      [17, 61],
      [20, 31],
      [21, 63],
      [22, 33],
      [23, 42],
      [24, 26],
      [24, 40],
      [25, 60],
      [27, 46],
      [29, 48],
      [29, 49],
      [30, 45],
      [30, 53],
      [31, 38],
      [33, 47],
      [33, 55],
      [33, 57],
      [34, 52],
      [37, 58],
      [39, 43],
      [39, 44],
      [43, 62],
      [46, 56],
      [47, 50],
      [51, 54],
    ],
    0,
    63
  )
) // true

write(
  findWhetherExistsPath(
    3,
    [
      [0, 1],
      [0, 2],
      [1, 2],
      [1, 2],
    ],
    0,
    2
  )
) // true

write(
  findWhetherExistsPath(
    5,
    [
      [0, 1],
      [0, 2],
      [0, 4],
      [0, 4],
      [0, 1],
      [1, 3],
      [1, 4],
      [1, 3],
      [2, 3],
      [3, 4],
    ],
    0,
    4
  )
) // true

// tag: 有向图；邻接表；BFS；DFS
