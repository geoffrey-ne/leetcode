/**
 * [中等]1310. 子数组异或查询
 * https://leetcode-cn.com/problems/xor-queries-of-a-subarray/
 * 
 * 
有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。

对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。

并返回一个包含给定查询 queries 所有结果的数组。

示例 1：

输入：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
输出：[2,7,14,8] 
解释：
数组中元素的二进制表示形式是：
1 = 0001 
3 = 0011 
4 = 0100 
8 = 1000 
查询的 XOR 值为：
[0,1] = 1 xor 3 = 2 
[1,2] = 3 xor 4 = 7 
[0,3] = 1 xor 3 xor 4 xor 8 = 14 
[3,3] = 8
示例 2：

输入：arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]]
输出：[8,0,4,4]
 

提示：

1 <= arr.length <= 3 * 10^4
1 <= arr[i] <= 10^9
1 <= queries.length <= 3 * 10^4
queries[i].length == 2
0 <= queries[i][0] <= queries[i][1] < arr.length

*/

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries1 = function (arr, queries) {
  const res = []
  for (const query of queries) {
    const [li, ri] = query
    let curRes = 0
    for (let i = li; i <= ri; i++) {
      curRes ^= arr[i]
    }
    res.push(curRes)
  }
  return res
}

// 前缀异或，异或问题一定记住，相同的两个数异或之后就为0了
// 所以比如需要求[4, 8]之间，就可以用[0, 3] ^ [0, 8]就可以了
var xorQueries = function (arr, queries) {
  const n = arr.length
  const xors = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    xors[i + 1] = xors[i] ^ arr[i]
  }
  const m = queries.length
  const ans = new Array(m).fill(0)
  for (let i = 0; i < m; i++) {
    ans[i] = xors[queries[i][0]] ^ xors[queries[i][1] + 1]
  }
  return ans
}

var xorQueries2 = function (arr, queries) {
  const arrx = [0].concat(arr)
  for (let i = 1; i < arrx.length; i++) {
    arrx[i] ^= arrx[i - 1]
  }
  return queries.map(([left, right]) => {
    return arrx[right + 1] ^ arrx[left]
  })
}

write('algorithms: 1310. 子数组异或查询', 'title')

write(
  xorQueries(
    [1, 3, 4, 8],
    [
      [0, 1],
      [1, 2],
      [0, 3],
      [3, 3],
    ]
  )
) // [2,7,14,8]
write(
  xorQueries(
    [4, 8, 2, 10],
    [
      [2, 3],
      [1, 3],
      [0, 0],
      [0, 3],
    ]
  )
) // [8,0,4,4]

// tag: 前缀异或
