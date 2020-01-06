/**
 * 删除链表的倒数第N个节点：https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/747/
 */

/** 
 * 
  给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

  示例：

  给定一个链表: 1->2->3->4->5, 和 n = 2.

  当删除了倒数第二个节点后，链表变为 1->2->3->5.
  说明：

  给定的 n 保证是有效的。

  进阶：

  你能尝试使用一趟扫描实现吗？
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head || !head.next) {
    return null
  }
  let p1 = head
  while (n-- > 0) {
    p1 = p1.next
  }

  if (p1 === null) {
    head = head.next
    return head
  }

  let p2 = head
  while (p1.next) {
    p1 = p1.next
    p2 = p2.next
  }
  p2.next = p2.next.next
  return head
}

write('linkedList 4. removeNthFromEnd', 'title')

var node1_1 = new ListNode(1)
var node1_2 = new ListNode(2)
var node1_3 = new ListNode(3)
var node1_4 = new ListNode(4)
var node1_5 = new ListNode(5)
node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

removeNthFromEnd(node1_1, 2) // 1 -> 2 -> 3 -> 5

var node2_1 = new ListNode(1)
var node2_2 = new ListNode(2)
node2_1.next = node2_2

removeNthFromEnd(node2_1, 2) // 1
