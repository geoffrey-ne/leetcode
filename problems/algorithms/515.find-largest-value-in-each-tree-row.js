/**
 * [中等]515. 在每个树行中找最大值
 * https://leetcode-cn.com/problems/find-largest-value-in-each-tree-row/
 * 
 * 
您需要在二叉树的每一行中找到最大的值。

示例：

输入: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

输出: [1, 3, 9]

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
var largestValues = function (root) {
  if (!root) {
    return []
  }
  const queue = [root]
  const res = []
  while (queue.length > 0) {
    const len = queue.length
    let max = queue[0].val
    for (let i = 0; i < len; i++) {
      const node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      max = Math.max(node.val, max)
    }
    res.push(max)
  }
  return res
}

write('algorithms: 515. 在每个树行中找最大值', 'title')

const node1_1 = new TreeNode(2)
const node1_2 = new TreeNode(1)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(largestValues(node1_1)) // 1

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

write(largestValues(node2_1)) // 7

// tag: 树；层级遍历
