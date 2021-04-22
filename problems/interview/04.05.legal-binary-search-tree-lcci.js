/**
 * [中等]面试题 04.05. 合法二叉搜索树
 * https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/
 * 
 * 
实现一个函数，检查一棵二叉树是否为二叉搜索树。

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
  return isFit(root)
}

function isFit(node, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  if (!node) {
    return true
  }
  if (node.val < min || node.val > max) {
    return false
  }
  return isFit(node.left, min, node.val) && isFit(node.right, node.val, max)
}

write('algorithms: 面试题 04.05. 合法二叉搜索树', 'title')

/**
 *  2
   / \
  1   3
 */

const node1_1 = new TreeNode(2)
const node1_2 = new TreeNode(1)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(isValidBST(node1_1)) // true

/**
 *  5
   / \
  1   4
     / \
    3   6
 */

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

// tag: 二叉树；二叉搜索树
