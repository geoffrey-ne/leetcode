/**
 * [中等]877. 石子游戏
 * https://leetcode-cn.com/problems/stone-game/
 * 
 * 
Alice 和 Bob 用几堆石子在做游戏。一共有偶数堆石子，排成一行；每堆都有 正 整数颗石子，数目为 piles[i] 。

游戏以谁手中的石子最多来决出胜负。石子的 总数 是 奇数 ，所以没有平局。

Alice 和 Bob 轮流进行，Alice 先开始 。 每回合，玩家从行的 开始 或 结束 处取走整堆石头。 这种情况一直持续到没有更多的石子堆为止，此时手中 石子最多 的玩家 获胜 。

假设 Alice 和 Bob 都发挥出最佳水平，当 Alice 赢得比赛时返回 true ，当 Bob 赢得比赛时返回 false 。

 

示例 1：

输入：piles = [5,3,4,5]
输出：true
解释：
Alice 先开始，只能拿前 5 颗或后 5 颗石子 。
假设他取了前 5 颗，这一行就变成了 [3,4,5] 。
如果 Bob 拿走前 3 颗，那么剩下的是 [4,5]，Alice 拿走后 5 颗赢得 10 分。
如果 Bob 拿走后 5 颗，那么剩下的是 [3,4]，Alice 拿走后 4 颗赢得 9 分。
这表明，取前 5 颗石子对 Alice 来说是一个胜利的举动，所以返回 true 。
示例 2：

输入：piles = [3,7,2,3]
输出：true
 

提示：

2 <= piles.length <= 500
piles.length 是 偶数
1 <= piles[i] <= 500
sum(piles[i]) 是 奇数

*/

/**
 * @param {number[]} piles
 * @return {boolean}
 */
var stoneGame = function (piles) {
  const total = piles.reduce((pre, cur) => pre + cur, 0)
  const half = (total - 1) / 2
  const map = {}
  const dfs = (nextPiles, alreadyCount) => {
    const key = nextPiles.join(',') + String(alreadyCount)
    if (typeof map[key] !== 'undefined') {
      return map[key]
    }
    let res = false
    if (nextPiles.length === 2) {
      res = alreadyCount + nextPiles[0] > half || alreadyCount + nextPiles[1] > half
    } else if (
      !dfs(nextPiles.slice(1), alreadyCount + nextPiles[0]) &&
      !dfs(nextPiles.slice(0, nextPiles.length - 1), alreadyCount + nextPiles[nextPiles.length - 1])
    ) {
      res = true
    }
    return (map[key] = res)
  }
  return dfs(piles, 0)
}

write('algorithms: 877. 石子游戏', 'title')

write(stoneGame([5, 3, 4, 5])) // true

// tag: 博弈
