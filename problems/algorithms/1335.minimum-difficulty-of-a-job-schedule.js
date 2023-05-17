/**
 * [困难]1335. 工作计划的最低难度
 * https://leetcode-cn.com/problems/minimum-difficulty-of-a-job-schedule/
 * 
 * 
你需要制定一份 d 天的工作计划表。工作之间存在依赖，要想执行第 i 项工作，你必须完成全部 j 项工作（ 0 <= j < i）。

你每天 至少 需要完成一项任务。工作计划的总难度是这 d 天每一天的难度之和，而一天的工作难度是当天应该完成工作的最大难度。

给你一个整数数组 jobDifficulty 和一个整数 d，分别代表工作难度和需要计划的天数。第 i 项工作的难度是 jobDifficulty[i]。

返回整个工作计划的 最小难度 。如果无法制定工作计划，则返回 -1 。

示例 1：
输入：jobDifficulty = [6,5,4,3,2,1], d = 2
输出：7
解释：第一天，您可以完成前 5 项工作，总难度 = 6.
第二天，您可以完成最后一项工作，总难度 = 1.
计划表的难度 = 6 + 1 = 7 

示例 2：

输入：jobDifficulty = [9,9,9], d = 4
输出：-1
解释：就算你每天完成一项工作，仍然有一天是空闲的，你无法制定一份能够满足既定工作时间的计划表。

示例 3：

输入：jobDifficulty = [1,1,1], d = 3
输出：3
解释：工作计划为每天一项工作，总难度为 3 。

示例 4：

输入：jobDifficulty = [7,1,7,1,7,1], d = 3
输出：15

示例 5：

输入：jobDifficulty = [11,111,22,222,33,333,44,444], d = 6
输出：843

d = 1; 11,111,22,222,33,333,44,444 => 444
d = 2; 11; 111,22,222,33,333,44,444 => 455
d = 3; 11; 111,22; 222,33,333,44,444 => 477
 

提示：

1 <= jobDifficulty.length <= 300
0 <= jobDifficulty[i] <= 1000
1 <= d <= 10

*/

/**
 * dp
 *
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length
  if (n < d) {
    return -1
  }
  const dp = new Array(d + 1).fill(0).map(() => new Array(n).fill(0x3f3f3f3f))
  let ma = 0
  for (let i = 0; i < n; ++i) {
    ma = Math.max(ma, jobDifficulty[i])
    dp[0][i] = ma
  }
  for (let i = 1; i < d; ++i) {
    for (let j = i; j < n; ++j) {
      ma = 0
      for (let k = j; k >= i; --k) {
        ma = Math.max(ma, jobDifficulty[k])
        dp[i][j] = Math.min(dp[i][j], ma + dp[i - 1][k - 1])
      }
    }
  }
  return dp[d - 1][n - 1]
}
/**
 * dp空间优化
 *
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty1 = function (jobDifficulty, d) {
  const n = jobDifficulty.length
  if (n < d) {
    return -1
  }
  let dp = new Array(n).fill(0)
  for (let i = 0, j = 0; i < n; ++i) {
    j = Math.max(j, jobDifficulty[i])
    dp[i] = j
  }
  for (let i = 1; i < d; ++i) {
    const ndp = new Array(n).fill(0x3f3f3f3f)
    for (let j = i; j < n; ++j) {
      let ma = 0
      for (let k = j; k >= i; --k) {
        ma = Math.max(ma, jobDifficulty[k])
        ndp[j] = Math.min(ndp[j], ma + dp[k - 1])
      }
    }
    dp = ndp
  }
  return dp[n - 1]
}

/**
 * 单调栈
 */
var minDifficulty = function (jobDifficulty, d) {
  const n = jobDifficulty.length
  if (n < d) {
    return -1
  }
  let dp = new Array(n).fill(0)
  for (let j = 0, ma = 0; j < n; ++j) {
    ma = Math.max(ma, jobDifficulty[j])
    dp[j] = ma
  }
  for (let i = 1; i < d; ++i) {
    const stack = []
    const ndp = new Array(n).fill(0)
    for (let j = i; j < n; ++j) {
      let mi = dp[j - 1]
      while (stack.length && jobDifficulty[stack[stack.length - 1][0]] < jobDifficulty[j]) {
        mi = Math.min(mi, stack.pop()[1])
      }
      if (stack.length === 0) {
        ndp[j] = mi + jobDifficulty[j]
      } else {
        ndp[j] = Math.min(ndp[stack[stack.length - 1][0]], mi + jobDifficulty[j])
      }
      stack.push([j, mi])
    }
    dp = ndp
  }
  return dp[n - 1]
}

write('algorithms: 1331. 数组序号转换', 'title')

write(minDifficulty([6, 5, 4, 3, 2, 1], 2)) // 7
write(minDifficulty([9, 9, 9], 4)) // -1
write(minDifficulty([1, 1, 1], 3)) // 3
write(minDifficulty([7, 1, 7, 1, 7, 1], 3)) // 15
write(minDifficulty([11, 111, 22, 222, 33, 333, 44, 444], 6)) // 843

// tag: DP; 单调栈；复习
