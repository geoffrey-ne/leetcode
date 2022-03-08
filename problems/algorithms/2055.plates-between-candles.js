/**
 * [中等]2055. 蜡烛之间的盘子
 * https://leetcode-cn.com/problems/2055.plates-between-candles/
 * 
 * 
给你一个长桌子，桌子上盘子和蜡烛排成一列。给你一个下标从 0 开始的字符串 s ，它只包含字符 '*' 和 '|' ，其中 '*' 表示一个 盘子 ，'|' 表示一支 蜡烛 。

同时给你一个下标从 0 开始的二维整数数组 queries ，其中 queries[i] = [lefti, righti] 表示 子字符串 s[lefti...righti] （包含左右端点的字符）。对于每个查询，你需要找到 子字符串中 在 两支蜡烛之间 的盘子的 数目 。
如果一个盘子在 子字符串中 左边和右边 都 至少有一支蜡烛，那么这个盘子满足在 两支蜡烛之间 。

比方说，s = "||**||**|*" ，查询 [3, 8] ，表示的是子字符串 "*||**|" 。子字符串中在两支蜡烛之间的盘子数目为 2 ，子字符串中右边两个盘子在它们左边和右边 都 至少有一支蜡烛。
请你返回一个整数数组 answer ，其中 answer[i] 是第 i 个查询的答案。

示例 1:

输入：s = "**|**|***|", queries = [[2,5],[5,9]]
输出：[2,3]
解释：
- queries[0] 有两个盘子在蜡烛之间。
- queries[1] 有三个盘子在蜡烛之间。
示例 2:

3,6,2
6,12,5
12,15,2
16,19,2
|**||**|

0,3,2
4,7,2

输入：s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
输出：[9,0,0,0,0]
解释：
- queries[0] 有 9 个盘子在蜡烛之间。
- 另一个查询没有盘子在蜡烛之间。

提示：

3 <= s.length <= 105
s 只包含字符 '*' 和 '|' 。
1 <= queries.length <= 105
queries[i].length == 2
0 <= lefti <= righti < s.length

*/

/**
 * 官方前缀和解答，思路是：
 * - 找到查找区间内最左和最右的两个蜡烛
 *    - 查找最左最后的蜡烛方法：
 *        - 用一个数组保存每个节点左侧的第一个蜡烛
 *        - 用一个数组保存每个节点右侧的第一个蜡烛
 *        - 那给一个节点，它的左右两侧的蜡烛就知道了
 * - 那么蜡烛中间的盘子数就是结果
 *    - 查找蜡烛中间盘子数的方法（前缀和）
 *        - 用一个数组保存每个节点到最左侧为止的所有盘子数
 *        - 那么获取一段区间的盘子数就是区间两个端点数值之差
 *
 * @param {*} s
 * @param {*} queries
 * @returns
 */
var platesBetweenCandles = function (s, queries) {
  const n = s.length
  const preSum = new Array(n).fill(0)
  for (let i = 0, sum = 0; i < n; i++) {
    if (s[i] === '*') {
      sum++
    }
    preSum[i] = sum
  }
  const left = new Array(n).fill(0)
  for (let i = 0, l = -1; i < n; i++) {
    if (s[i] === '|') {
      l = i
    }
    left[i] = l
  }
  const right = new Array(n).fill(0)
  for (let i = n - 1, r = -1; i >= 0; i--) {
    if (s[i] === '|') {
      r = i
    }
    right[i] = r
  }
  const ans = new Array(queries.length).fill(0)
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i]
    const x = right[query[0]],
      y = left[query[1]]
    ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x]
  }
  return ans
}

/**
 * 我自己的小lowB解法
 *
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var platesBetweenCandles1 = function (s, queries) {
  const allResults = findAllResults(s)
  if (allResults.length === 0) {
    return new Array(queries.length).fill(0)
  }

  console.log(allResults)

  const res = []
  for (let i = 0; i < queries.length; i++) {
    res.push(findCurResult(queries[i], allResults))
  }
  return res
}

function findCurResult(query, allResults) {
  const [qStart, qEnd] = query
  let count = 0
  for (let i = 0; i < allResults.length; i++) {
    const [rStart, rEnd, rCount] = allResults[i]
    if (qEnd < rEnd) {
      break
    }
    if (qStart > rStart) {
      continue
    }

    count += rCount
  }
  return count
}

function findAllResults(s) {
  const res = []
  let cur = ''
  let start = -1
  let count = 0
  for (let i = 0; i < s.length; i++) {
    cur = s[i]
    if (cur === '|') {
      if (start >= 0 && count) {
        res.push([start, i, count])
        // reset
        start = -1
        count = 0
      }
      if (start < 0 && i + 1 < s.length && s[i + 1] === '*') {
        start = i
      }
    } else {
      if (start >= 0) {
        count += 1
      }
    }
  }
  return res
}

write('algorithms: 2055. 蜡烛之间的盘子', 'title')

write(
  platesBetweenCandles('**|**|***|', [
    [2, 5],
    [5, 9],
  ])
) // [2, 3]

write(
  platesBetweenCandles('***|**|*****|**||**|*', [
    [1, 17],
    [4, 5],
    [14, 17],
    [5, 11],
    [15, 16],
  ])
) // [9,0,0,0,0]

write(
  platesBetweenCandles(
    '|******************************************************************************************************************************************************************|**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************|******************************************************|***********************************************************************************************************************************************|*************************************************************************************************************************',
    [[5443, 7474]]
  )
) // 1802

// tags: 前缀和
