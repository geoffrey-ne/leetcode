/**
 * [中等]95. 不同的二叉搜索树 II
 * https://leetcode-cn.com/problems/unique-binary-search-trees-ii/
 * 
 * 
给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。

示例：

输入：3
输出：
[
  [1,null,3,2],
  [3,2,null,1],
  [3,1,null,null,2],
  [2,1,3],
  [1,null,2,null,3]
]
解释：
以上的输出对应以下 5 种不同结构的二叉搜索树：

   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
 

提示：

0 <= n <= 8

 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  return helper(1, n)
}

function helper(start, end) {
  if (start > end) {
    return []
  }
  const treeList = []
  for (let i = start; i <= end; i++) {
    const left = helper(start, i - 1)
    const right = helper(i + 1, end)
    for (let j = 0; j <= left.length; j++) {
      for (let k = 0; k <= right.length; k++) {
        const node = new TreeNode(i)
        node.left = left[j - 1]
        node.right = right[k - 1]
        treeList.push(node)
      }
    }
  }
  return treeList
}

write('algorithms: 95. 不同的二叉搜索树 II', 'title')

write(generateTrees(3))
// [
//   [1, null, 3, 2],
//   [3, 2, null, 1],
//   [3, 1, null, null, 2],
//   [2, 1, 3],
//   [1, null, 2, null, 3]
// ]

// tag: 树；
