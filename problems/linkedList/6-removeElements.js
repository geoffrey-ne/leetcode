/**
 * 移除链表元素：https://leetcode-cn.com/explore/learn/card/linked-list/195/classic-problems/752/
 */

/** 
 * 
 删除链表中等于给定值 val 的所有节点。

  示例:

  输入: 1->2->6->3->4->5->6, val = 6
  输出: 1->2->3->4->5
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head && head.val === val) {
    head = head.next
  }
  if (!head) {
    return null
  }
  let prev = head
  let cur = head.next
  while (cur) {
    if (cur.val !== val) {
      prev = cur
      cur = cur.next
    } else {
      prev.next = cur.next
      cur.next = null
      cur = prev.next
    }
  }
  return head
}

write('linkedList 6. removeElements', 'title')

var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(6)
var node4 = new ListNode(3)
var node5 = new ListNode(4)
var node6 = new ListNode(5)
var node7 = new ListNode(6)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7

write(removeElements(node1, 6)) // 1 -> 2 -> 3 -> 4 -> 5
