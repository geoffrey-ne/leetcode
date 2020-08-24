/**
 * [简单]83. 删除排序链表中的重复元素
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 * 
 * 

给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。

示例 1:

输入: 1->1->2
输出: 1->2
示例 2:

输入: 1->1->2->3->3
输出: 1->2->3

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
  while (head.next && head.val === head.next.val) {
    head = head.next
  }

  let p = head
  while (p.next) {
    if (p.next.val === p.val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }

  return head
}

write('algorithms: 83. 删除排序链表中的重复元素', 'title')

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

write(deleteDuplicates(node1_1)) // 1 -> 2 -> 3 -> 4 -> 5

const node2_1 = new ListNode(1)
const node2_2 = new ListNode(1)
const node2_3 = new ListNode(1)
const node2_4 = new ListNode(2)
const node2_5 = new ListNode(3)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5

write(deleteDuplicates(node2_1)) // 1 -> 2 -> 3

// tag: 链表；去重
