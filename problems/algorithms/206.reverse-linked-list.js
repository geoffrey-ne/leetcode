/**
 * [简单]206. 反转链表
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 
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
 * 递归
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
  if (!head || head.next === null) {
    return head
  }
  const res = reverseList(head.next)
  head.next.next = head
  head.next = null
  return res
}

/**
 * 迭代
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = null
  let next = head
  while (next) {
    const tmp = next.next
    next.next = cur
    cur = next
    next = tmp
  }
  return cur
}

write('algorithms: 206. 反转链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(reverseList(node1_1)) // 5->4->3->2->1->NULL

// tag: 链表;递归;迭代
