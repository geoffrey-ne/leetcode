/**
 * [简单]100. 相同的树
 * https://leetcode-cn.com/problems/same-tree/
 * 
 * 
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。

示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false

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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q || p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

write('algorithms: 100. 相同的树', 'title')

const node1_1_1 = new TreeNode(1)
const node1_1_2 = new TreeNode(2)
const node1_1_3 = new TreeNode(3)
const node1_2_1 = new TreeNode(1)
const node1_2_2 = new TreeNode(2)
const node1_2_3 = new TreeNode(3)

node1_1_1.left = node1_1_2
node1_1_1.right = node1_1_3
node1_2_1.left = node1_2_2
node1_2_1.right = node1_2_3

write(isSameTree(node1_1_1, node1_2_1)) // true

const node2_1_1 = new TreeNode(1)
const node2_1_2 = new TreeNode(2)
const node2_2_1 = new TreeNode(1)
const node2_2_2 = new TreeNode(2)

node2_1_1.left = node2_1_2
node2_2_1.right = node2_2_2

write(isSameTree(node2_1_1, node2_2_1)) // false

const node3_1_1 = new TreeNode(1)
const node3_1_2 = new TreeNode(2)
const node3_1_3 = new TreeNode(1)
const node3_2_1 = new TreeNode(1)
const node3_2_2 = new TreeNode(1)
const node3_2_3 = new TreeNode(2)

node3_1_1.left = node3_1_2
node3_1_1.right = node3_1_3
node3_2_1.left = node3_2_2
node3_2_1.right = node3_2_3

write(isSameTree(node3_1_1, node3_2_1)) // false

// tag: 树；递归
