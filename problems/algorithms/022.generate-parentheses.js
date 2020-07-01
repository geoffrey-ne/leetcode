/**
 * [中等]22. 括号生成
 * https://leetcode-cn.com/problems/generate-parentheses/
 * 
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

示例：

输入：n = 3
输出：[
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

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis1 = function (n) {
  let memo = [[], ['()']]
  if (n < 2) {
    return memo[n]
  }
  for (let i = 2; i <= n; i++) {
    const curRes = combine(memo[i - 1])
    memo.push(curRes)
  }
  return memo[n]
}

function combine(list) {
  const map = new Set()
  const res = []
  for (let i = 0; i < list.length; i++) {
    const curStr = list[i]
    for (let j = 0; j < curStr.length; j++) {
      const resStr = curStr.slice(0, j) + '()' + curStr.slice(j)
      if (!map.has(resStr)) {
        res.push(resStr)
        map.add(resStr)
      }
    }
  }
  return res
}

write('algorithms: 22. 括号生成', 'title')
write(generateParenthesis(2))
write(generateParenthesis(3))
write(generateParenthesis(4))[
  ('()()()()',
  '(())()()',
  '()(())()',
  '()()(())',
  '(()())()',
  '((()))()',
  '(())(())',
  '()(()())',
  '()((()))',
  '(()()())',
  '((())())',
  '(()(()))',
  '((()()))',
  '(((())))')
][
  ('(((())))',
  '((()()))',
  '((())())',
  '((()))()',
  '(()(()))',
  '(()()())',
  '(()())()',
  '(())(())',
  '(())()()',
  '()((()))',
  '()(()())',
  '()(())()',
  '()()(())',
  '()()()()')
]

// tag: 回溯;DFS;BFS
