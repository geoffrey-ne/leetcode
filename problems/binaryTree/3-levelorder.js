/**
 * 二叉树的层级遍历：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xefh1i/
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  const queue = [root]
  while (queue.length > 0) {
    let len = queue.length
    const curRes = []
    while (len > 0) {
      const node = queue.shift()
      if (node) {
        curRes.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
      len--
    }
    if (curRes.length > 0) {
      res.push(curRes)
    }
  }

  return res
}

write('algorithms: 二叉树的层级遍历', 'title')

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

write(levelOrder(node1_1)) // [1, 2, 3]

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

write(levelOrder(node2_1)) // [1, 4, 3, 2]
