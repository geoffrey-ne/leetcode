/**
 * [中等]82. 删除排序链表中的重复元素 II
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 * 
 * 
给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。

示例 1:

输入: 1->2->3->3->4->4->5
输出: 1->2->5
示例 2:

输入: 1->1->1->2->3
输出: 2->3

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
var deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }

  const pre = new ListNode()
  pre.next = head

  let p1 = pre
  let p2 = pre.next

  while (p2 && p2.next) {
    if (p2.val === p2.next.val) {
      while (p2.next && p2.val === p2.next.val) {
        p2.next = p2.next.next
      }
      p1.next = p2.next
      p2 = p1.next
    } else {
      p1 = p2
      p2 = p2.next
    }
  }

  return pre.next
}

write('algorithms: 82. 删除排序链表中的重复元素 II', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(3)
const node1_5 = new ListNode(4)
const node1_6 = new ListNode(4)
const node1_7 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6
node1_6.next = node1_7

write(deleteDuplicates(node1_1)) // 1 -> 2 -> 5

const node2_1 = new ListNode(1)
const node2_2 = new ListNode(1)
const node2_3 = new ListNode(1)
const node2_4 = new ListNode(2)
const node2_5 = new ListNode(3)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5

write(deleteDuplicates(node2_1)) // 2 -> 3

// tag: 链表；去重
