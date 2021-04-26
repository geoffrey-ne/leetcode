/**
 * [中等]面试题 04.12. 求和路径
 * https://leetcode-cn.com/problems/paths-with-sum-lcci/
 * 
 * 
给定一棵二叉树，其中每个节点都含有一个整数数值(该值或正或负)。设计一个算法，打印节点数值总和等于某个给定值的所有路径的数量。
注意，路径不一定非得从二叉树的根节点或叶节点开始或结束，但是其方向必须向下(只能从父节点指向子节点方向)。

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

3
解释：和为 22 的路径有：[5,4,11,2], [5,8,4,5], [4,11,7]
提示：

节点总数 <= 10000

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
 * @param {number} sum
 * @return {number}
 */
var pathSum1 = function (root, sum) {
  if (!root) {
    return 0
  }
  let count = 0
  const helper = (node, target) => {
    if (!node) {
      return
    } else if (node.val === target) {
      count++
    }
    helper(node.left, target - node.val)
    helper(node.right, target - node.val)
  }
  const queue = [root]
  while (queue.length > 0) {
    let len = queue.length
    while (len--) {
      const node = queue.shift()
      helper(node, sum)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
  }
  return count
}

var pathSum = function (root, sum) {
  if (!root) {
    return 0
  }
  return helper(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
}

function helper(node, sum) {
  if (!node) {
    return 0
  }
  let count = node.val === sum ? 1 : 0
  count += helper(node.left, sum - node.val)
  count += helper(node.right, sum - node.val)
  return count
}

write('algorithms: 面试题 04.12. 求和路径', 'title')

/**
 *      1
       / \
      2   3
 */

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(pathSum(node1_1, 3, 3)) // 2

/**
 *    5
     / \
    3   6
   / \
  2   4
 /   
1
 */
const node2_1 = new TreeNode(5)
const node2_2 = new TreeNode(3)
const node2_3 = new TreeNode(6)
const node2_4 = new TreeNode(2)
const node2_5 = new TreeNode(4)
const node2_6 = new TreeNode(1)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_4.left = node2_6

write(pathSum(node2_1, 6)) // 2

// tag: 二叉树；
