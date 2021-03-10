/**
 * 二叉树的前序遍历：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xeywh5/
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
var preorderTraversal = function (root) {
  const res = []
  helper(root, res)
  return res
}

function helper(node, res) {
  if (!node) {
    return
  }
  res.push(node.val)
  helper(node.left, res)
  helper(node.right, res)
}

write('algorithms: 二叉树的前序遍历', 'title')

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

write(preorderTraversal(node1_1)) // [1, 2, 3]

/**
 * 迭代算法
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal1 = function (root) {
  const stack = [root]
  const res = []
  while (stack.length > 0) {
    let len = stack.length
    while (len > 0) {
      const node = stack.pop()
      if (node) {
        res.push(node.val)
        stack.push(node.right)
        stack.push(node.left)
      }
      len--
    }
  }
  return res
}

var preorderTraversal2 = function (root) {
  const stack = []
  const res = []
  while (root || stack.length > 0) {
    while (root) {
      res.push(root.val)
      stack.push(root)
      root = root.left
    }
    const node = stack.pop()
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

write(preorderTraversal2(node2_1)) // [1,4,2,3]
