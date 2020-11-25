/**
 * [简单]111. 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 * 
 * 
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明：叶子节点是指没有子节点的节点。

示例 1：

输入：root = [3,9,20,null,null,15,7]
输出：2
示例 2：

输入：root = [2,null,3,null,4,null,5,null,6]
输出：5
 
提示：

树中节点数的范围在 [0, 105] 内
-1000 <= Node.val <= 1000

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
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) {
    return 0
  }

  return height1(root)
}

function height1(node) {
  if (!node.left && !node.right) {
    return 1
  } else {
    const left = node.left ? height1(node.left) : Number.MAX_SAFE_INTEGER
    const right = node.right ? height1(node.right) : Number.MAX_SAFE_INTEGER
    return Math.min(left, right) + 1
  }
}

function height(node) {
  if (!node.left && !node.right) {
    return 1
  } else if (!node.left) {
    return height(node.right) + 1
  } else if (!node.right) {
    return height(node.left) + 1
  } else {
    return Math.min(height(node.right), height(node.left)) + 1
  }
}

write('algorithms: 111. 二叉树的最小深度', 'title')

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(20)
const node1_4 = new TreeNode(15)
const node1_5 = new TreeNode(7)

node1_1.left = node1_2
node1_1.right = node1_3
node1_3.left = node1_4
node1_3.right = node1_5

write(minDepth(node1_1)) // 2

const node2_1 = new TreeNode(2)
const node2_2 = new TreeNode(3)
const node2_3 = new TreeNode(4)
const node2_4 = new TreeNode(5)
const node2_5 = new TreeNode(6)

node2_1.left = node2_2
node2_2.left = node2_3
node2_3.left = node2_4
node2_4.left = node2_5

write(minDepth(node2_1)) // 5

// tag: 树；列表
