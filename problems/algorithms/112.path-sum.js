/**
 * [简单]112. 路径总和
 * https://leetcode-cn.com/problems/path-sum/
 * 
 * 
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2。

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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false
  }
  return !!helper(root, sum)
}

function helper(node, curSum) {
  if (!node.left && !node.right) {
    return node.val - curSum === 0
  } else {
    return (
      (node.left && helper(node.left, curSum - node.val)) ||
      (node.right && helper(node.right, curSum - node.val))
    )
  }
}

write('algorithms: 112. 路径总和', 'title')

const node1_1 = new TreeNode(5)
const node1_2 = new TreeNode(4)
const node1_3 = new TreeNode(8)
const node1_4 = new TreeNode(11)
const node1_5 = new TreeNode(13)
const node1_6 = new TreeNode(4)
const node1_7 = new TreeNode(7)
const node1_8 = new TreeNode(2)
const node1_9 = new TreeNode(1)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_3.left = node1_5
node1_3.right = node1_6
node1_4.left = node1_7
node1_4.right = node1_8
node1_6.right = node1_9

write(hasPathSum(node1_1, 22)) // true

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)

node2_1.left = node2_2

write(hasPathSum(node2_1, 0)) // false

// tag: 树；列表
