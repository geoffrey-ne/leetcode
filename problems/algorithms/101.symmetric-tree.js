/**
 * [简单]101. 对称二叉树
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 
 * 
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3
 

进阶：

你可以运用递归和迭代两种方法解决这个问题吗？

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return helper(root.left, root.right)
}

function helper(p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  if (p.val === q.val) {
    return helper(p.left, q.right) && helper(p.right, q.left)
  }
  return false
}

write('algorithms: 101. 对称二叉树', 'title')

const node0_1 = new TreeNode(1)
const node0_2 = new TreeNode(2)
const node0_3 = new TreeNode(3)

node0_1.left = node0_2
node0_1.right = node0_3

write(isSymmetric(node0_1)) // false

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(2)
const node1_4 = new TreeNode(3)
const node1_5 = new TreeNode(4)
const node1_6 = new TreeNode(4)
const node1_7 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5
node1_3.left = node1_6
node1_3.right = node1_7

write(isSymmetric(node1_1)) // true

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(2)
const node2_4 = new TreeNode(3)
const node2_5 = new TreeNode(3)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.right = node2_4
node2_3.right = node2_5

write(isSymmetric(node2_1)) // false

// tag: 树；递归
