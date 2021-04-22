/**
 * [中等]面试题 04.04. 检查平衡性
 * https://leetcode-cn.com/problems/check-balance-lcci/
 * 
 * 
实现一个函数，检查二叉树是否平衡。在这个问题中，平衡树的定义如下：任意一个节点，其两棵子树的高度差不超过 1。

示例 1:
给定二叉树 [3,9,20,null,null,15,7]
    3
   / \
  9  20
    /  \
   15   7
返回 true 。
示例 2:
给定二叉树 [1,2,2,3,3,null,null,4,4]
      1
     / \
    2   2
   / \
  3   3
 / \
4   4
返回 false 。
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
var isBalanced = function (root) {
  return helper(root) >= 0
}

function helper(node) {
  if (!node) {
    return 0
  }
  const left = helper(node.left)
  const right = helper(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  } else {
    return 1 + Math.max(left, right)
  }
}

write('algorithms: 面试题 04.04. 检查平衡性', 'title')

/**
 *  3
   / \
  9  20
    /  \
   15   7
 */

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(20)
const node1_4 = new TreeNode(15)
const node1_5 = new TreeNode(7)

node1_1.left = node1_2
node1_1.right = node1_3
node1_3.left = node1_4
node1_3.right = node1_5

write(isBalanced(node1_1)) // true

//        1
//       / \
//      2   2
//     / \
//    3   3
//   / \
//  4   4

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(2)
const node2_4 = new TreeNode(3)
const node2_5 = new TreeNode(3)
const node2_6 = new TreeNode(4)
const node2_7 = new TreeNode(4)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_4.left = node2_6
node2_4.right = node2_7

write(isBalanced(node2_1)) // false

/**
 *     1
      / \
     2   2
    /     \
   3       3
  /         \
 4           4
 */
const node3_1 = new TreeNode(1)
const node3_2 = new TreeNode(2)
const node3_3 = new TreeNode(2)
const node3_4 = new TreeNode(3)
const node3_5 = new TreeNode(3)
const node3_6 = new TreeNode(4)
const node3_7 = new TreeNode(4)

node3_1.left = node3_2
node3_1.right = node3_3
node3_2.left = node3_4
node3_3.right = node3_5
node3_4.left = node3_6
node3_5.right = node3_7

write(isBalanced(node3_1)) // false

// tag: 二叉树；平衡树
