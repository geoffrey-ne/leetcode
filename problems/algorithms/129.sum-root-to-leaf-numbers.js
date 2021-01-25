/**
 * [中等]129. 求根到叶子节点数字之和
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 * 
 * 

给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。

例如，从根到叶子节点路径 1->2->3 代表数字 123。

计算从根到叶子节点生成的所有数字之和。

说明: 叶子节点是指没有子节点的节点。

示例 1:

输入: [1,2,3]
    1
   / \
  2   3
输出: 25
解释:
从根到叶子节点路径 1->2 代表数字 12.
从根到叶子节点路径 1->3 代表数字 13.
因此，数字总和 = 12 + 13 = 25.
示例 2:

输入: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
输出: 1026
解释:
从根到叶子节点路径 4->9->5 代表数字 495.
从根到叶子节点路径 4->9->1 代表数字 491.
从根到叶子节点路径 4->0 代表数字 40.
因此，数字总和 = 495 + 491 + 40 = 1026.

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
var sumNumbers = function (root) {
  if (!root) {
    return 0
  }
  const res = [0]
  helper(root, 0, res)
  return res[0]
}

function helper(node, preNum, res) {
  const curNum = preNum * 10 + node.val
  if (!node.left && !node.right) {
    res[0] += curNum
    return
  }

  if (node.left) {
    helper(node.left, curNum, res)
  }
  if (node.right) {
    helper(node.right, curNum, res)
  }
}

write('algorithms: 129. 求根到叶子节点数字之和', 'title')

const node1_1 = new TreeNode(4)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(0)
const node1_4 = new TreeNode(5)
const node1_5 = new TreeNode(1)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5

write(sumNumbers(node1_1)) // 1026

// tag: 树；
