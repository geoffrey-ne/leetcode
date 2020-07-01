/**
 * [简单]21. 合并两个有序链表
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  debugger
  let head = null
  let p = head

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      p = addNode(p, l1.val)
      l1 = l1.next
    } else {
      p = addNode(p, l2.val)
      l2 = l2.next
    }
    if (!head) {
      head = p
    }
  }

  while (l1) {
    p = addNode(p, l1.val)
    l1 = l1.next
    if (!head) {
      head = p
    }
  }

  while (l2) {
    p = addNode(p, l2.val)
    l2 = l2.next
    if (!head) {
      head = p
    }
  }

  return head
}

function addNode(p, val) {
  const node = new ListNode(val)
  if (p !== null) {
    p.next = node
  }
  return node
}

write('algorithms: 21. 合并两个有序链表', 'title')

var node1_1 = new ListNode(1)
var node1_2 = new ListNode(2)
var node1_3 = new ListNode(4)

node1_1.next = node1_2
node1_2.next = node1_3

var node2_1 = new ListNode(1)
var node2_2 = new ListNode(3)
var node2_3 = new ListNode(4)

node2_1.next = node2_2
node2_2.next = node2_3

write(mergeTwoLists(node1_1, node2_1)) // false
