/**
 * [中等]199. 二叉树的右视图
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/
 * 
 * 
给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

示例:

输入: [1,2,3,null,5,null,4]
输出: [1, 3, 4]
解释:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

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
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  const res = []
  bfs(root, res, 0)
  return res
}

function bfs(node, res, dep) {
  if (!node) {
    return
  }
  if (typeof res[dep] === 'undefined') {
    res[dep] = node.val
  }

  bfs(node.right, res, dep + 1)
  bfs(node.left, res, dep + 1)
}

write('algorithms: 199. 二叉树的右视图', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(5)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.right = node1_5
node1_3.right = node1_4

write(rightSideView(node1_1)) // [1, 3, 4]

// tag: 树；BFS
