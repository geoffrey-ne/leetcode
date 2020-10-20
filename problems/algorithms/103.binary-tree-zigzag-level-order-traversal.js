/**
 * [中等]103. 二叉树的锯齿形层次遍历
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 
 * 
给定一个二叉树，返回其节点值的锯齿形层次遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

例如：
给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回锯齿形层次遍历如下：

[
  [3],
  [20,9],
  [15,7]
]

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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) {
    return []
  }
  const stack = [root]
  let deep = 1
  const res = []
  while (stack.length > 0) {
    const list = []
    const len = stack.length
    for (let i = 0; i < len; i++) {
      const node = stack.shift()
      list.push(node.val)
      if (node.left) {
        stack.push(node.left)
      }
      if (node.right) {
        stack.push(node.right)
      }
    }

    if (deep % 2 === 0) {
      res.push(list.reverse())
    } else {
      res.push(list)
    }
    deep++
  }
  return res
}

write('algorithms: 103. 二叉树的锯齿形层次遍历', 'title')

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(20)
const node1_4 = new TreeNode(15)
const node1_5 = new TreeNode(7)

node1_1.left = node1_2
node1_1.right = node1_3
node1_3.left = node1_4
node1_3.right = node1_5

write(zigzagLevelOrder(node1_1))

// [
//   [3],
//   [20, 9],
//   [15,7]
// ]

// tag: 树；遍历；栈
