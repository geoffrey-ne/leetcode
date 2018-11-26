/**
 * [★★★★★]920. Number of Music Playlists
 * finish: 2018-11-21
 * https://leetcode.com/problems/number-of-music-playlists/
 */

/**
 * @param {number} N
 * @param {number} L
 * @param {number} K
 * @return {number}
 */
var numMusicPlaylists = function(N, L, K) {
  const mod = Math.pow(10, 9) + 7
  const dp = initialize2DArray(L + 1, N + 1, 0)
  dp[0][0] = 1
  for (let i = 1; i <= L; i++) {
    for (let j = 1; j <= N; j++) {
      dp[i][j] = (dp[i - 1][j - 1] * (N - (j - 1)))
      if (j > K) {
        dp[i][j] += (dp[i - 1][j] * (j - K))
      }
      dp[i][j] %= mod
    }
  }
  return dp[L][N]
}

function initialize2DArray(row, col, val) {
  return Array.from({ length: row }).map(() =>
    Array.from({ length: col }).fill(val)
  )
}

// function helper(N, L, K) {
//   debugger
//   if (N <= K) {
//     return 0
//   }
//   if (N === 1) {
//     return 1
//   }
//   if (N === L) {
//     return factorial(N)
//   }
//   return helper(N - 1, L - 1, K) * N + helper(N, L - 1, K) * (N - K)
// }

// // n的阶乘
// function factorial(n) {
//   if (n === 1) return 1
//   return factorial(n - 1) * n
// }

// factorial(5, 1) // 120

write('algorithms: 920. Number of Music Playlists', 'title')
write(numMusicPlaylists(3, 3, 1)) // 6
write(numMusicPlaylists(2, 3, 0)) // 6
write(numMusicPlaylists(2, 3, 1)) // 2
