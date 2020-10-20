/**
 * [简单]107. 二叉树的层次遍历 II
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 * 
 * 
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其自底向上的层次遍历为：

[
  [15,7],
  [9,20],
  [3]
]

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @return {number[][]}】
 */
var levelOrderBottom = function (root) {
  if (!root) {
    return []
  }
  const stack = [root]
  const res = []
  while (stack.length > 0) {
    const len = stack.length
    const list = []
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      list.push(node.val)
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }
    res.push(list)
  }
  return res.reverse()
}

write('algorithms: 107. 二叉树的层次遍历 II', 'title')

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(20)
const node1_4 = new TreeNode(15)
const node1_5 = new TreeNode(7)

node1_1.left = node1_2
node1_1.right = node1_3
node1_3.left = node1_4
node1_3.right = node1_5

write(levelOrderBottom(node1_1))

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

// tag: tag: 树；遍历；栈
