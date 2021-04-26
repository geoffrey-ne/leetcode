/**
 * [困难]面试题 04.09. 二叉搜索树序列
 * https://leetcode-cn.com/problems/bst-sequences-lcci/
 * 
 * 
从左向右遍历一个数组，通过不断将其中的元素插入树中可以逐步地生成一棵二叉搜索树。给定一个由不同节点组成的二叉搜索树，输出所有可能生成此树的数组。

示例：
给定如下二叉树

        2
       / \
      1   3
返回：


[
   [2,1,3],
   [2,3,1]
]

 *    5
     /  \
    3    7
   / \  / \
  2  4 6   8

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
var BSTSequences1 = function (root) {
  if (!root) {
    return [[]]
  }

  const res = []
  const helper = (node, queue, path) => {
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
    if (queue.length === 0) {
      res.push(path)
      return
    }
    for (let i = 0; i < queue.length; i++) {
      const curNode = queue[i]
      const newQueue = [...queue.slice(0, i), ...queue.slice(i + 1)]
      helper(curNode, newQueue, [...path, curNode.val])
    }
  }
  helper(root, [], [root.val])
  return res
}

var BSTSequences = function (root) {
  if (!root) return [[]]
  const res = []
  const q = [root]
  const path = []

  const dfs = () => {
    if (!q.length) {
      res.push(path.slice())
      return
    }

    const size = q.length
    for (let i = 0; i < size; i++) {
      const node = q.shift()
      path.push(node.val)

      node.left && q.push(node.left)
      node.right && q.push(node.right)

      dfs()

      node.left && q.pop()
      node.right && q.pop()

      q.push(node)
      path.pop()
    }
  }
  dfs()

  return res
}

write('algorithms: 面试题 04.09. 二叉搜索树序列', 'title')

/**
 *      2
       / \
      1   3
 */

const node1_1 = new TreeNode(2)
const node1_2 = new TreeNode(1)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(BSTSequences(node1_1))

// [
//   [2,1,3],
//   [2,3,1]
// ]

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

write(BSTSequences(node2_1))

// tag: 二叉树；
