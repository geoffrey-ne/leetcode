/**
 * 二叉树的中序遍历：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xecaj6/
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
 * 递归算法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const res = []
  helper(root, res)
  return res
}

function helper(node, res) {
  if (!node) {
    return
  }
  helper(node.left, res)
  res.push(node.val)
  helper(node.right, res)
}

write('algorithms: 二叉树的中序遍历', 'title')

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

write(inorderTraversal(node1_1)) // [3, 2, 1]

/**
 * 迭代算法
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal1 = function (root) {
  const stack = []
  const res = []
  while (root || stack.length > 0) {
    while (root) {
      stack.push(root)
      root = root.left
    }
    const node = stack.pop()
    res.push(node.val)

    root = node.right
  }
  return res
}

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

write(inorderTraversal1(node2_1)) // [2,4,1,3]
