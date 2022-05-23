/**
 * [★★]464. Can I Win
 * finish: 2018-11-28
 * https://leetcode.com/problems/can-i-win
 */

/**
 * 官方解答：记忆化搜索 + 状态压缩
 * 
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
var canIWin = function(maxChoosableInteger, desiredTotal) {
    const memo = new Map();
    const dfs = (maxChoosableInteger, usedNumbers, desiredTotal, currentTotal) => {
        if (!memo.has(usedNumbers)) {
            let res = false;
            for (let i = 0; i < maxChoosableInteger; i++) {
                if (((usedNumbers >> i) & 1) === 0) {
                    if (i + 1 + currentTotal >= desiredTotal) {
                        res = true;
                        break;
                    }
                    if (!dfs(maxChoosableInteger, usedNumbers | (1 << i), desiredTotal, currentTotal + i + 1)) {
                        res = true;
                        break;
                    }
                }
            }
            memo.set(usedNumbers, res);
        }
        return memo.get(usedNumbers);
    }
    // 边界
    if ((1 + maxChoosableInteger) * (maxChoosableInteger) / 2 < desiredTotal) {
        return false;
    }
    return dfs(maxChoosableInteger, 0, desiredTotal, 0);
};

write('algorithms: 464. Can I Win', 'title')
// write(canIWin(10, 11));  // false
write(canIWin(15, 100));  // false

// tags: 记忆化搜索；状态压缩