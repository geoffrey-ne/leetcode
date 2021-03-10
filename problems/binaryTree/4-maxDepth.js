/**
 * 二叉树的最大深度：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoh1zg/
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
var maxDepth = function (root) {
  if (!root) {
    return 0
  }
  if (!root.left && !root.right) {
    return 1
  }
  return Math.max(maxDepth(root.left) + 1, maxDepth(root.right) + 1)
}

write('algorithms: 二叉树的最大深度', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_2.left = node1_3

/**
 *    1
 *   2
 *  3
 */

write(maxDepth(node1_1)) // 3

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(4)
const node2_3 = new TreeNode(3)
const node2_4 = new TreeNode(2)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4

/**
 *     1
 *   4   3
 *  2
 *
 */

write(maxDepth(node2_1)) // 3
