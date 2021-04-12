/**
 * [中等]513. 找树左下角的值
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/
 * 
 * 
给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:

输入:

    2
   / \
  1   3

输出:
1

示例 2:

输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出:
7

注意: 您可以假设树（即给定的根节点）不为 NULL。

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
var findBottomLeftValue = function (root) {
  const queue = [root]
  while (queue.length > 0) {
    const len = queue.length
    const first = queue[0].val
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    if (queue.length === 0) {
      return first
    }
  }
  return null
}

write('algorithms: 513. 找树左下角的值', 'title')

const node1_1 = new TreeNode(2)
const node1_2 = new TreeNode(1)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(findBottomLeftValue(node1_1)) // 1

/**
 *      1
       / \
      2   3
     /   / \
    4   5   6
       /
      7
 */

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(3)
const node2_4 = new TreeNode(4)
const node2_5 = new TreeNode(5)
const node2_6 = new TreeNode(6)
const node2_7 = new TreeNode(7)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_3.left = node2_5
node2_3.right = node2_6
node2_5.left = node2_7

write(findBottomLeftValue(node2_1)) // 7

// tag: 树；层级遍历
