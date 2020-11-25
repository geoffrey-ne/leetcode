/**
 * [中等]113. 路径总和 II
 * https://leetcode-cn.com/problems/path-sum-ii/
 * 
 * 
给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。

说明: 叶子节点是指没有子节点的节点。

示例:
给定如下二叉树，以及目标和 sum = 22，

              5
             / \
            4   8
           /   / \
          11  13  4
         /  \    / \
        7    2  5   1
返回:

[
   [5,4,11,2],
   [5,8,4,5]
]

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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  const res = []
  if (!root) {
    return res
  }
  helper(root, sum, res, [])
  return res
}

function helper(node, curSum, res, stack) {
  if (!node.left && !node.right) {
    if (node.val - curSum === 0) {
      res.push([...stack, node.val])
    }
  } else {
    stack.push(node.val)
    if (node.left) {
      helper(node.left, curSum - node.val, res, stack)
    }
    if (node.right) {
      helper(node.right, curSum - node.val, res, stack)
    }
    stack.pop()
  }
}

write('algorithms: 113. 路径总和 II', 'title')

const node1_1 = new TreeNode(5)
const node1_2 = new TreeNode(4)
const node1_3 = new TreeNode(8)
const node1_4 = new TreeNode(11)
const node1_5 = new TreeNode(13)
const node1_6 = new TreeNode(4)
const node1_7 = new TreeNode(7)
const node1_8 = new TreeNode(2)
const node1_9 = new TreeNode(5)
const node1_10 = new TreeNode(1)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_3.left = node1_5
node1_3.right = node1_6
node1_4.left = node1_7
node1_4.right = node1_8
node1_6.left = node1_9
node1_6.right = node1_10

write(pathSum(node1_1, 22))

// [
//   [5,4,11,2],
//   [5,8,4,5]
// ]

// tag: 树；列表
