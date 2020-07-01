/**
 * [中等]19. 删除链表的倒数第N个节点
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 
给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。

示例：

给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.
说明：

给定的 n 保证是有效的。

进阶：

你能尝试使用一趟扫描实现吗？
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
var removeNthFromEnd = function (head, n) {
  if (!head) {
    return head
  }

  if (head.next === null && n === 1) {
    return null
  }

  let p1 = head
  let p2 = head

  while (p2.next && n > 0) {
    p2 = p2.next
    n--
  }

  if (n > 0) {
    head = head.next
    return head
  }

  while (p2.next) {
    p1 = p1.next
    p2 = p2.next
  }

  p1.next = p1.next.next

  return head
}

write('algorithms: 19. 删除链表的倒数第N个节点', 'title')

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

removeNthFromEnd(node2_1, 2) // 2

var node3_1 = new ListNode(1)

removeNthFromEnd(node3_1, 1)[(1, 2)] // null
