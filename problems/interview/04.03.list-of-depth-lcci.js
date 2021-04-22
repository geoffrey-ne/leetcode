/**
 * [中等]面试题 04.03. 特定深度节点链表
 * https://leetcode-cn.com/problems/list-of-depth-lcci/
 * 
 * 
给定一棵二叉树，设计一个算法，创建含有某一深度上所有节点的链表（比如，若一棵树的深度为 D，则会创建出 D 个链表）。返回一个包含所有深度的链表的数组。

示例：

输入：[1,2,3,4,5,null,7,8]

        1
       /  \ 
      2    3
     / \    \ 
    4   5    7
   /
  8

输出：[[1],[2,3],[4,5,7],[8]]
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function (tree) {
  const res = []
  if (!tree) {
    return res
  }
  const queue = [tree]
  while (queue.length > 0) {
    let listRoot
    let p = listRoot
    let len = queue.length
    while (len-- > 0) {
      const curNode = queue.shift()
      const listNode = new ListNode(curNode.val)
      if (!listRoot) {
        listRoot = listNode
      } else {
        p.next = listNode
      }
      p = listNode
      if (curNode.left) {
        queue.push(curNode.left)
      }
      if (curNode.right) {
        queue.push(curNode.right)
      }
    }
    res.push(listRoot)
  }
  return res
}

write('algorithms: 面试题 04.03. 特定深度节点链表', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(5)
const node1_6 = new TreeNode(7)
const node1_7 = new TreeNode(8)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5
node1_3.right = node1_6
node1_6.left = node1_7

write(listOfDepth(node1_1)) // [[1],[2,3],[4,5,7],[8]]

// tag: 二叉树；层级遍历
