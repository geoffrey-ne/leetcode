/**
 * [中等]102. 二叉树的层序遍历
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 
 * 
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
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
 * 看了答案。。。可以不保存curLevelStep和nextLevelStep，每次可以使用for循环，取当前栈长度为当前层数量
 */
var levelOrder = function (root) {
  if (!root) {
    return []
  }
  let curLevelRes = []
  const res = []
  const stack = [root]
  let curLevelStep = (nextLevelStep = 1)
  let step = 0
  while (stack.length > 0) {
    const node = stack.shift()
    curLevelRes.push(node.val)
    if (node.left) {
      if (step <= curLevelStep) {
        nextLevelStep++
      }
      stack.push(node.left)
    }
    if (node.right) {
      if (step <= curLevelStep) {
        nextLevelStep++
      }
      stack.push(node.right)
    }

    step++
    if (step === curLevelStep) {
      res.push([...curLevelRes])
      curLevelStep = nextLevelStep
      curLevelRes = []
    }
  }
  return res
}

write('algorithms: 102. 二叉树的层序遍历', 'title')

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(9)
const node1_3 = new TreeNode(20)
const node1_4 = new TreeNode(15)
const node1_5 = new TreeNode(7)

node1_1.left = node1_2
node1_1.right = node1_3
node1_3.left = node1_4
node1_3.right = node1_5

write(levelOrder(node1_1))

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

// tag: tag: 树；遍历；栈
