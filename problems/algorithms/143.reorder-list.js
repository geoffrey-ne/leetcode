/**
 * [中等]143. 重排链表
 * https://leetcode-cn.com/problems/reorder-list/
 * 
 * 
给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

示例 1:
给定链表 1->2->3->4, 重新排列为 1->4->2->3.

示例 2:
给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.

示例 3:
给定链表 1->2->3->4->5->6->7->8->9->10->11->12,
重新排列为 1->12->2->11->3->10->4->9->5->8->6->7.

给定链表 1->2->3->4->5->6->7->8->9->10->11,
重新排列为 1->11->2->10->3->9->4->8->5->7->6.
*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 还可以先分为两半（快慢指针），再反转第二个链表，然后两个链表依次连接
 */
var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) {
    return head
  }
  const stack = []
  let p1 = head
  while (p1) {
    stack.push(p1)
    p1 = p1.next
  }
  p1 = head
  let index = stack.length - 1
  while (index > 1 && p1 !== stack[index] && p1.next !== stack[index]) {
    const temp = p1.next
    p1.next = stack[index]
    stack[index].next = temp
    stack[index - 1].next = null
    p1 = temp
    index--
  }
  return head
}

write('algorithms: 143. 重排链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4

write(reorderList(node1_1)) // 1->4->2->3

const node2_1 = new ListNode(1)
const node2_2 = new ListNode(2)
const node2_3 = new ListNode(3)
const node2_4 = new ListNode(4)
const node2_5 = new ListNode(5)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5

write(reorderList(node2_1)) // 1->5->2->4->3

// tag: 链表
