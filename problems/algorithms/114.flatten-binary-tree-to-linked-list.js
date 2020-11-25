/**
 * [中等]114. 二叉树展开为链表
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * 
 * 
给定一个二叉树，原地将它展开为一个单链表。

例如，给定二叉树

    1
   / \
  2   5
 / \   \
3   4   6
将其展开为：

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let node = root
  while (node !== null) {
      if (node.left != null) {
      let tail = node.left
      while (tail.right) {
          tail = tail.right
      }

      tail.right = node.right
      node.right = node.left
      node.left = null
      }
      node = node.right
  }
  return root
}

write('algorithms: 114. 二叉树展开为链表', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(5)
const node1_6 = new TreeNode(6)

node1_1.left = node1_2
node1_1.right = node1_5
node1_2.left = node1_3
node1_2.right = node1_4
node1_5.right = node1_6

write(flatten(node1_1))

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(3)

node2_1.right = node2_2
node2_2.left = node2_3

write(flatten(node2_1))

// tag: 树；列表
