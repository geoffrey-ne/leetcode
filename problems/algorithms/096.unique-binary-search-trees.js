/**
 * [中等]96. 不同的二叉搜索树
 * https://leetcode-cn.com/problems/unique-binary-search-trees/
 * 
 * 
给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？

示例:

输入: 3
输出: 5
解释:
给定 n = 3, 一共有 5 种不同结构的二叉搜索树:

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3

 */

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const map = [0, 1, 2]
  return helper(n, map)
}

function helper(n, map) {
  if (map[n]) {
    return map[n]
  }
  let res = 0
  for (let i = 1; i <= n; i++) {
    const left = helper(i - 1, map)
    const right = helper(n - i, map)
    res += (left || 1) * (right || 1)
  }

  map[n] = res
  return res
}

write('algorithms: 96. 不同的二叉搜索树', 'title')

write(numTrees(3)) // 5
write(numTrees(4)) // 14
write(numTrees(5)) // 42
write(numTrees(6)) // 132

// tag: 树；
