/**
 * 路径总和：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xo566j/
 * 

给你二叉树的根节点 root 和一个表示目标和的整数 targetSum ，判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。

叶子节点 是指没有子节点的节点。

输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true

输入：root = [1,2,3], targetSum = 5
输出：false

输入：root = [1,2], targetSum = 0
输出：false

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  return helper(root, targetSum)
}

function helper(node, curTarget) {
  if (!node) {
    return false
  }
  if (!node.left && !node.right && node.val === curTarget) {
    return true
  }
  return helper(node.left, curTarget - node.val) || helper(node.right, curTarget - node.val)
}

write('algorithms: 路径总和', 'title')

/**
 *  -2
 *  / \
 *    -3
 */

const node5_1 = new TreeNode(-2)
const node5_2 = new TreeNode(-3)

node5_1.right = node5_2

write(hasPathSum(node5_1, -2)) // false

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

write(hasPathSum(node1_1, 6)) // true

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

write(hasPathSum(node2_1, 5)) // false
write(hasPathSum(node2_1, 4)) // true
write(hasPathSum(node2_1, 7)) // true

/**
 *  1
   / \
  2   2
 / \ / \
3  4 4  3
 */

const node3_1 = new TreeNode(1)
const node3_2 = new TreeNode(2)
const node3_3 = new TreeNode(2)
const node3_4 = new TreeNode(3)
const node3_5 = new TreeNode(4)
const node3_6 = new TreeNode(4)
const node3_7 = new TreeNode(3)

node3_1.left = node3_2
node3_1.right = node3_3
node3_2.left = node3_4
node3_2.right = node3_5
node3_3.left = node3_6
node3_3.right = node3_7

write(hasPathSum(node3_1, 6)) // true

/**
 *  1
   / \
  2   2
 / \ / \
   3 3 
 */

const node4_1 = new TreeNode(1)
const node4_2 = new TreeNode(2)
const node4_3 = new TreeNode(2)
const node4_4 = new TreeNode(3)
const node4_5 = new TreeNode(3)

node4_1.left = node4_2
node4_1.right = node4_3
node4_2.right = node4_4
node4_3.left = node4_5

write(hasPathSum(node4_1, 6)) // true
