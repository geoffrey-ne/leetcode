/**
 * [中等]131. 分割回文串
 * https://leetcode-cn.com/problems/palindrome-partitioning/
 * 
 * 
给定一个字符串 s，将 s 分割成一些子串，使每个子串都是回文串。
返回 s 所有可能的分割方案。
示例:
输入: "aab"
输出:
[
  ["aa","b"],
  ["a","a","b"]
]

*/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const curRes = []
  const res = []
  helper(s, curRes, res)
  return res
}

function helper(str, curRes, res) {
  if (str.length === 0 && curRes.length > 0) {
    res.push([...curRes])
  } else {
    for (let i = 0; i < str.length; i++) {
      const cur = str.substring(0, i + 1)
      if (isHuiWen(cur)) {
        curRes.push(cur)
        helper(str.slice(i + 1), curRes, res)
        curRes.pop()
      }
    }
  }
}

function isHuiWen(str) {
  if (str.length <= 1) {
    return true
  } else {
    let start = 0
    let end = str.length - 1
    while (start <= end && str[start] === str[end]) {
      start++
      end--
    }
    return start > end
  }
}

write('algorithms: 131. 分割回文串', 'title')

write(partition('efe'))
write(partition('aab'))

// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

// tag: 回溯
