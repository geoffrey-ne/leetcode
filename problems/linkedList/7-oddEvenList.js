/**
 * 奇偶链表：https://leetcode-cn.com/explore/learn/card/linked-list/195/classic-problems/753/
 */

/** 
 * 
  给定一个单链表，把所有的奇数节点和偶数节点分别排在一起。请注意，这里的奇数节点和偶数节点指的是节点编号的奇偶性，而不是节点的值的奇偶性。

  请尝试使用原地算法完成。你的算法的空间复杂度应为 O(1)，时间复杂度应为 O(nodes)，nodes 为节点总数。

  示例 1:

  输入: 1->2->3->4->5->NULL
  输出: 1->3->5->2->4->NULL
  示例 2:

1 2 3 4 5 6 7 8 9 10
1 3 2 4 5 6 7 8 9 10
1 3 5 2 4 6 7 8 9 10
1 3 5 7 2 4 6 8 9 10
1 3 5 7 9 2 4 6 8 10

  输入: 2->1->3->5->6->4->7->NULL 
  输出: 2->3->6->7->1->5->4->NULL
  说明:

  应当保持奇数节点和偶数节点的相对顺序。
  链表的第一个节点视为奇数节点，第二个节点视为偶数节点，以此类推。
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

var oddEvenList = function(head) {
  // 2个以内节点，都无需变化
  if (!head || head.next === null || head.next.next === null) {
    return head
  }
  let slow = head
  let fast = head
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    let tmpVal = slow.val
    let cur = slow
    cur.val = fast.val
    while (cur != fast) {
      cur = cur.next
      const tmp = cur.val
      cur.val = tmpVal
      tmpVal = tmp
    }
  }
  return head
}

write('linkedList 7. oddEvenList', 'title')

var node1_1 = new ListNode(1)
var node1_2 = new ListNode(2)
var node1_3 = new ListNode(3)
var node1_4 = new ListNode(4)
var node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(oddEvenList(node1_1)) // 1->3->5->2->4->NULL

var node2_1 = new ListNode(2)
var node2_2 = new ListNode(1)
var node2_3 = new ListNode(3)
var node2_4 = new ListNode(5)
var node2_5 = new ListNode(6)
var node2_6 = new ListNode(4)
var node2_7 = new ListNode(7)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5
node2_5.next = node2_6
node2_6.next = node2_7

write(oddEvenList(node2_1)) // 2->3->6->7->1->5->4->NULL
