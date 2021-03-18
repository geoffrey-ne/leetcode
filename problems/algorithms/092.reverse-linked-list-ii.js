/**
 * [中等]92. 反转链表 II
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * 
 * 
反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。

说明:
1 ≤ m ≤ n ≤ 链表长度。

示例:

输入: 1->2->3->4->5->NULL, m = 2, n = 4
输出: 1->4->3->2->5->NULL


1 2 3 4 5 6 7 8 9
1 8 7 6 5 4 3 2 9 m = 2, n = 8

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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  let preHead = new ListNode(-1, head)
  let pre = preHead
  for (let i = 1; i < left; i++) {
      pre = pre.next
  }

  let cur = pre.next
  let next = null
  for (let i = left; i < right; i++) {
      next = cur.next
      cur.next = next.next
      next.next = pre.next
      pre.next = next
  }
  return preHead.next
};

let left = null
let stop = false
var reverseBetween1 = function (head, m, n) {
  left = head
  stop = false
  recurse(head, m, n)
  return head
}

function recurse(right, m, n) {
  if (n === 1) {
    return
  }
  right = right.next

  if (m > 1) {
    left = left.next
  }

  recurse(right, m - 1, n - 1)

  if (left === right || right.next === left) {
    stop = true
  }

  if (!stop) {
    const tmp = left.val
    left.val = right.val
    right.val = tmp

    left = left.next
  }
}

write('algorithms: 92. 反转链表 II', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(reverseBetween(node1_1, 2, 4)) // 1->4->3->2->5->NULL

// tag: 链表;递归
