/**
 * [中等]86. 分隔链表
 * https://leetcode-cn.com/problems/partition-list/
 * 
 * 
给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。

你应当保留两个分区中每个节点的初始相对位置。

示例:

输入: head = 1->4->3->2->5->2, x = 3
输出: 1->2->2->4->3->5

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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const preHead = new ListNode()
  preHead.next = head
  let p1 = preHead
  let p2 = head
  let preP2 = p1
  let needRemove = false
  while (p2) {
    if (p2.val >= x) {
      needRemove = true
      preP2 = p2
      p2 = p2.next
    } else {
      if (needRemove) {
        const node = new ListNode(p2.val)
        node.next = p1.next
        p1.next = node
        p1 = node
        preP2.next = p2.next
        p2.next = null
        p2 = preP2.next
      } else {
        p1 = p2
        preP2 = p2
        p2 = p2.next
      }
    }
  }
  const res = preHead.next
  preHead.next = null
  return res
}

write('algorithms: 86. 分隔链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(4)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(2)
const node1_5 = new ListNode(5)
const node1_6 = new ListNode(2)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6

write(partition(node1_1, 3)) // 1->2->2->4->3->5

const node2_1 = new ListNode(2)
const node2_2 = new ListNode(1)

node2_1.next = node2_2

write(partition(node2_1, 2)) // 1 -> 2

// tag: 链表
