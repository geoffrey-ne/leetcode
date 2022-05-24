# 博弈

博弈类题目，代表类型是必赢或者必输游戏，需要注意关键点：

- 确定初始状态；
- dp:
  - 当前情况下能够胜利；
  - 下一个状态是否失败；

## 举例

游戏规则：两个人，从 1 到 maxChoosableInteger，不重复拿数字，先到达 desiredTotal 的人获胜。

比如：maxChoosableInteger = 10, desiredTotal = 11
Output: false
Explanation:
无论第一个人怎么选，第二个人都会优先到达 11 的总和。

```js
var canIWin = function (maxChoosableInteger, desiredTotal) {
  const memo = new Map()
  const dfs = (maxChoosableInteger, usedNumbers, desiredTotal, currentTotal) => {
    if (!memo.has(usedNumbers)) {
      let res = false
      for (let i = 0; i < maxChoosableInteger; i++) {
        if (((usedNumbers >> i) & 1) === 0) {
          // 当前情况下能够胜利
          if (i + 1 + currentTotal >= desiredTotal) {
            res = true
            break
          }
          // 下一个状态是否失败
          if (
            !dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1)
          ) {
            res = true
            break
          }
        }
      }
      memo.set(usedNumbers, res)
    }
    return memo.get(usedNumbers)
  }
  // 边界
  if (((1 + maxChoosableInteger) * maxChoosableInteger) / 2 < desiredTotal) {
    return false
  }
  return dfs(maxChoosableInteger, 0, desiredTotal, 0)
}
```

## leetcode 题目列表

- [464. Can I Win](https://leetcode.com/problems/can-i-win/);
- [877. Stone Game](https://leetcode.com/problems/stone-game/);

tags: 博弈
