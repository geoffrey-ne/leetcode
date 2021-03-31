/**
 * [简单]404. 左叶子之和
 * https://leetcode-cn.com/problems/sum-of-left-leaves/
 * 
 * 
计算给定二叉树的所有左叶子之和。

示例：

    3
   / \
  9  20
    /  \
   15   7

在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (!root) {
    return 0
  }
  let leftChild = root.left
  if (leftChild && !leftChild.left && !leftChild.right) {
    return leftChild.val + sumOfLeftLeaves(root.right)
  } else {
    return sumOfLeftLeaves(leftChild) + sumOfLeftLeaves(root.right)
  }
}

write('algorithms: 404. 左叶子之和', 'title')

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(20)
const node1_4 = new TreeNode(15)
const node1_5 = new TreeNode(17)

node1_1.left = node1_2
node1_1.right = node1_3
node1_3.left = node1_4
node1_3.right = node1_5

write(sumOfLeftLeaves(node1_1)) // 24

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(3)
const node2_4 = new TreeNode(4)
const node2_5 = new TreeNode(5)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5

write(sumOfLeftLeaves(node2_1)) // 4

// tag: 二叉树
