/**
 * [中等]109. 有序链表转换二叉搜索树
 * https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 * 
 * 
给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定的有序链表： [-10, -3, 0, 5, 9],

一个可能的答案是：[0, -3, 9, -10, null, 5], 它可以表示下面这个高度平衡二叉搜索树：

      0
     / \
   -3   9
   /   /
 -10  5
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
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null
  }
  const mid = Math.floor(nums.length / 2)
  const node = new TreeNode(nums[mid])
  node.left = sortedArrayToBST(nums.slice(0, mid))
  node.right = sortedArrayToBST(nums.slice(mid + 1))
  return node
}

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) {
    return null
  }
  let p = head
  const arr = []
  while (p) {
    arr.push(p.val)
    p = p.next
  }
  return sortedArrayToBST(arr)
}

write('algorithms: 109. 有序链表转换二叉搜索树', 'title')

const node1_1 = new ListNode(-10)
const node1_2 = new ListNode(-3)
const node1_3 = new ListNode(0)
const node1_4 = new ListNode(5)
const node1_5 = new ListNode(9)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(sortedListToBST(node1_1))

// tag: 树；列表
