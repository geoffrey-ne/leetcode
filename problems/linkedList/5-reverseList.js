/**
 * 反转链表：https://leetcode-cn.com/explore/learn/card/linked-list/195/classic-problems/750/
 */

/** 
 * 
  反转一个单链表。

  示例:

  输入: 1->2->3->4->5->NULL
  输出: 5->4->3->2->1->NULL
  进阶:
  你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) {
    return null
  }

  let cur = head
  let newHead = head
  while (cur.next) {
    const nodeAfterNext = cur.next.next
    cur.next.next = newHead
    newHead = cur.next
    cur.next = nodeAfterNext
  }
  return newHead
}

write('linkedList 5. reverseList', 'title')

var node1 = new ListNode(1)
var node2 = new ListNode(2)
var node3 = new ListNode(3)
var node4 = new ListNode(4)
var node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

write(reverseList(node1).val) // 5
