/**
 * [困难]403. 青蛙过河
 * https://leetcode-cn.com/problems/frog-jump/
 * 
 * 
一只青蛙想要过河。 假定河流被等分为若干个单元格，并且在每一个单元格内都有可能放有一块石子（也有可能没有）。 青蛙可以跳上石子，但是不可以跳入水中。

给你石子的位置列表 stones（用单元格序号 升序 表示）， 请判定青蛙能否成功过河（即能否在最后一步跳至最后一块石子上）。

开始时， 青蛙默认已站在第一块石子上，并可以假定它第一步只能跳跃一个单位（即只能从单元格 1 跳至单元格 2 ）。

如果青蛙上一步跳跃了 k 个单位，那么它接下来的跳跃距离只能选择为 k - 1、k 或 k + 1 个单位。 另请注意，青蛙只能向前方（终点的方向）跳跃。

示例 1：

输入：stones = [0,1,3,5,6,8,12,17]




[5, 2] [6, 3]

 [8, 2] [8, 3]

[12, ]


-  -     -     -  -     -             -                -
0  1  2  3  4  5  6  7  8  9  10  11  12  13 14 15 16  17
输出：true
解释：青蛙可以成功过河，按照如下方案跳跃：
跳 1 个单位到第 2 块石子, 
然后跳 2 个单位到第 3 块石子, 
接着 跳 2 个单位到第 4 块石子, 
然后跳 3 个单位到第 6 块石子, 
跳 4 个单位到第 7 块石子, 
最后，跳 5 个单位到第 8 个石子（即最后一块石子）。
示例 2：

-  -  -  -  -           -  -      -
0  1  2  3  4  5  6  7  8  9  10  11  12  13 14 15 16  17
输入：stones = [0,1,2,3,4,8,9,11]
输出：false
解释：这是因为第 5 和第 6 个石子之间的间距太大，没有可选的方案供青蛙跳跃过去。
 

提示：

2 <= stones.length <= 2000
0 <= stones[i] <= 231 - 1
stones[0] == 0

*/

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  if (stones[1] !== 1) {
    return false
  }
  if (stones.length === 2) {
    return true
  }
  const queue = [[1, 1, 1]]
  const set = new Set(`1,1,1`)
  while (queue.length > 0) {
    let len = queue.length
    while (len--) {
      const [curStone, index, step] = queue.shift()
      // 从当前位置，还能跳到哪？
      for (let i = index + 1; i < stones.length; i++) {
        const sub = Math.abs(stones[i] - curStone)
        if (sub > step + 1) {
          // 太远无需继续了
          break
        } else if (sub <= step + 1 && sub >= step - 1) {
          if (i === stones.length - 1) {
            return true
          }
          // 正好，就加入
          const key = `${stones[i]},${i},${sub}`
          if (!set.has(key)) {
            queue.push([stones[i], i, sub])
            set.add(key)
          }
        }
        // 太近还可以继续
      }
    }
  }
  return false
}

/**
 * 这个思路比我的优势是记录了哪些节点无需再遍历，所以时间更优
 *
 * @param {*} stones
 * @returns
 */

var canCross2 = function (stones) {
  const set = new Set()
  return helper(stones, 0, 0, set)
}
var helper = function (stones, index, k, set) {
  const key = index * 1000 + k
  if (set.has(key)) {
    return false
  } else {
    set.add(key)
  }
  for (let i = index + 1; i < stones.length; i++) {
    const gap = stones[i] - stones[index]
    if (gap >= k - 1 && gap <= k + 1) {
      if (helper(stones, i, gap, set)) {
        return true
      }
    } else if (gap > k + 1) {
      break
    }
  }
  return index == stones.length - 1
}

var canCross1 = function (stones) {
  const n = stones.length
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = true
  for (let i = 1; i < n; ++i) {
    if (stones[i] - stones[i - 1] > i) {
      return false
    }
  }
  for (let i = 1; i < n; ++i) {
    for (let j = i - 1; j >= 0; --j) {
      const k = stones[i] - stones[j]
      if (k > j + 1) {
        break
      }
      dp[i][k] = dp[j][k - 1] || dp[j][k] || dp[j][k + 1]
      if (i === n - 1 && dp[i][k]) {
        return true
      }
    }
  }
  return false
}

write('algorithms: 403. 青蛙过河', 'title')

write(canCross([0, 1])) // true
write(canCross([0, 1, 3, 6, 10, 15, 16, 21])) // true
write(canCross([0, 1, 3, 5, 6, 8, 12, 17])) // true
write(canCross([0, 1, 2, 3, 4, 8, 9, 11])) // false

// tag: dp
