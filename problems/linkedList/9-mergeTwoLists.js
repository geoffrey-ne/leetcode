/**
 * 合并两个有序链表：https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/762/
 */

/** 
 * 
  将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

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
var mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  let head = l1
  if (l1.val > l2.val) {
    head = l2
    l2 = l2.next
  } else {
    l1 = l1.next
  }
  let cur = head
  while (l1 && l2) {
    let choose
    if (l1.val <= l2.val) {
      choose = l1
      l1 = l1.next
    } else {
      choose = l2
      l2 = l2.next
    }
    cur.next = choose
    cur = choose
  }

  while (l1) {
    cur.next = l1
    cur = l1
    l1 = l1.next
  }
  while (l2) {
    cur.next = l2
    cur = l2
    l2 = l2.next
  }

  return head
}

write('linkedList 9. mergeTwoLists', 'title')

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
