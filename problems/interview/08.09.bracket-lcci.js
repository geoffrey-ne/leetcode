/**
 * [中等]面试题 08.09. 括号
 * https://leetcode-cn.com/problems/bracket-lcci/
 * 
括号。设计一种算法，打印n对括号的所有合法的（例如，开闭一一对应）组合。

说明：解集不能包含重复的子集。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n < 2) {
    return [[], ['()']][n]
  }
  const res = []
  dfs('', n, n, res)
  return res
}

function dfs(str, left, right, res) {
  if (left === 0 && right === 0) {
    res.push(str)
  }

  // 剩余的左边的 > 剩余的右边的 时候 剪枝
  if (left > right) {
    return
  }

  if (left > 0) {
    dfs(`${str}(`, left - 1, right, res)
  }
  if (right > 0) {
    dfs(`${str})`, left, right - 1, res)
  }
}

write('algorithms: 面试题 08.09. 括号', 'title')

write(permutation(3))

// tag: 回溯剪枝
