/**
 * [中等]98. 验证二叉搜索树
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * 
 * 
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。
示例 1:

输入:
    2
   / \
  1   3
输出: true
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。

输入:
    10
   / \
  5   15
     / \
    6   20
输出: false
解释: 输入为: [10,5,15,null,null,6,20]。
     根节点的值为 10 ，但是其右子节点中包含6 。

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
var isValidBST = function (root) {
  if (!root) {
    return true
  }
  return visit(root, { val: undefined })
}

function visit(node, obj) {
  if (node.left && !visit(node.left, obj)) {
    return false
  }
  if (typeof obj.val !== 'undefined') {
    if (node.val <= obj.val) {
      return false
    }
  }
  obj.val = node.val

  if (node.right && !visit(node.right, obj)) {
    return false
  }
  return true
}

write('algorithms: 98. 验证二叉搜索树', 'title')

const node1_1 = new TreeNode(2)
const node1_2 = new TreeNode(1)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(isValidBST(node1_1)) // true

const node2_1 = new TreeNode(5)
const node2_2 = new TreeNode(1)
const node2_3 = new TreeNode(4)
const node2_4 = new TreeNode(3)
const node2_5 = new TreeNode(6)

node2_1.left = node2_2
node2_1.right = node2_3
node2_3.left = node2_4
node2_3.right = node2_5

write(isValidBST(node2_1)) // false

const node3_1 = new TreeNode(10)
const node3_2 = new TreeNode(5)
const node3_3 = new TreeNode(15)
const node3_4 = new TreeNode(6)
const node3_5 = new TreeNode(20)

node3_1.left = node3_2
node3_1.right = node3_3
node3_3.left = node3_4
node3_3.right = node3_5

write(isValidBST(node3_1)) // false

// tag: 树；中序遍历
