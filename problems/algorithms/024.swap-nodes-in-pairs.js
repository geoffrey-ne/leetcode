/**
 * [中等]24. 两两交换链表中的节点
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 
给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。

 

示例:

给定 1->2->3->4, 你应该返回 2->1->4->3.
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
var swapPairs = function (head) {
  const helpHead = new ListNode()
  helpHead.next = head
  let p0 = helpHead
  let p1 = p0.next
  let p2 = p1 && p1.next
  while (p0 && p1 && p2) {
    p0.next = p2
    p1.next = p2.next
    p2.next = p1

    p0 = p1
    p1 = p0.next
    p2 = p1 && p1.next
  }

  return helpHead.next
}

write('algorithms: 24. 两两交换链表中的节点', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)
node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(swapPairs(node1_1)) // 2->1->4->3->5.

// tag: 链表
