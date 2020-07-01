/**
 * [困难]23. 合并K个排序链表
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * 
合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * 分治合并
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  lists = lists.filter((node) => node)
  if (lists.length === 0) {
    return null
  }

  if (lists.length === 1) {
    return lists[0]
  }

  return merge(lists, 0, lists.length - 1)
}

function merge(lists, left, right) {
  if (left === right) {
    return lists[left]
  }
  if (left > right) {
    return null
  }

  const mid = parseInt((left + right) / 2)
  return mergeTwoList(merge(lists, left, mid), merge(lists, mid + 1, right))
}

/**
 * 顺序合并
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists1 = function (lists) {
  lists = lists.filter((node) => node)
  if (lists.length === 0) {
    return null
  }

  if (lists.length === 1) {
    return lists[0]
  }

  let head = lists[0]
  for (let i = 1; i < lists.length; i++) {
    head = mergeTwoList(head, lists[i])
  }

  return head
}

function mergeTwoList(root, p) {
  if (root.val > p.val) {
    const temp = root
    root = p
    p = temp
  }
  let p1 = root
  while (p) {
    while (p1.next && p.val > p1.next.val) {
      p1 = p1.next
    }
    const node = new ListNode(p.val)
    node.next = p1.next
    p1.next = node
    p = p.next
  }
  return root
}

write('algorithms: 23. 合并K个排序链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(4)
const node1_3 = new ListNode(5)
node1_1.next = node1_2
node1_2.next = node1_3

const node2_1 = new ListNode(1)
const node2_2 = new ListNode(3)
const node2_3 = new ListNode(4)
node2_1.next = node2_2
node2_2.next = node2_3

const node3_1 = new ListNode(2)
const node3_2 = new ListNode(6)
node3_1.next = node3_2

write(mergeKLists([node1_1, node2_1, node3_1])) // 1->1->2->3->4->4->5->6

// tag: 链表;分治
