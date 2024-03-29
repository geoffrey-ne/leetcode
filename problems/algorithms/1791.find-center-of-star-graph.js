/**
 * [简单]1791. 找出星型图的中心节点
 * https://leetcode-cn.com/problems/find-center-of-star-graph/
 * 
 * 
有一个无向的 星型 图，由 n 个编号从 1 到 n 的节点组成。星型图有一个 中心 节点，并且恰有 n - 1 条边将中心节点与其他每个节点连接起来。
给你一个二维整数数组 edges ，其中 edges[i] = [ui, vi] 表示在节点 ui 和 vi 之间存在一条边。请你找出并返回 edges 所表示星型图的中心节点。

示例 1：

  4
  |
  2
 / \
1   3

输入：edges = [[1,2],[2,3],[4,2]]
输出：2
解释：如上图所示，节点 2 与其他每个节点都相连，所以节点 2 是中心节点。
示例 2：


输入：edges = [[1,2],[5,1],[1,3],[1,4]]
输出：1

提示：

3 <= n <= 105
edges.length == n - 1
edges[i].length == 2
1 <= ui, vi <= n
ui != vi
题目数据给出的 edges 表示一个有效的星型图

*/

/**
 * @param {number[][]} edges
 * @return {number}
 */
// var findCenter = function (edges) {
//   const map = {}
//   let max = [-1, -1]
//   let num1, num2
//   for (let i = 0; i < edges.length; i++) {
//     num1 = edges[i][0]
//     num2 = edges[i][1]
//     map[num1] = (map[num1] || 0) + 1
//     map[num2] = (map[num2] || 0) + 1

//     if (max[1] < map[num1]) {
//       max = [num1, map[num1]]
//     }
//     if (max[1] < map[num2]) {
//       max = [num2, map[num2]]
//     }
//   }

//   return max[0]
// }

// edges.length就等于n-1的话，确实啥也不用想了
var findCenter = function (edges) {
  return edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1] ? edges[0][0] : edges[0][1]
}

write('algorithms: 1791. 找出星型图的中心节点', 'title')

write(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ])
) // 2
write(
  findCenter([
    [1, 2],
    [1, 4],
    [2, 3],
    [4, 2],
  ])
) // 2
write(
  findCenter([
    [1, 2],
    [5, 1],
    [1, 3],
    [1, 4],
  ])
) // 1

// tags:
