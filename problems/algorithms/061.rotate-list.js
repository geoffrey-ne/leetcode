/**
 * [中等]61. 旋转链表
 * https://leetcode-cn.com/problems/rotate-list/
 * 
 * 
给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

示例 1:

输入: 1->2->3->4->5->NULL, k = 2
输出: 4->5->1->2->3->NULL
解释:
向右旋转 1 步: 5->1->2->3->4->NULL
向右旋转 2 步: 4->5->1->2->3->NULL
示例 2:

输入: 0->1->2->NULL, k = 4
输出: 2->0->1->NULL
解释:
向右旋转 1 步: 2->0->1->NULL
向右旋转 2 步: 1->2->0->NULL
向右旋转 3 步: 0->1->2->NULL
向右旋转 4 步: 2->0->1->NULL

 */

function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next || k === 0) {
    return head
  }

  let p1 = head
  let p2 = head
  let count = 1

  while (k-- > 0) {
    if (p1.next !== null) {
      p1 = p1.next
      count++
    } else {
      if (k % count === 0) {
        return head
      }
      k = k % count
      p1 = head
    }
  }

  while (p1.next) {
    p1 = p1.next
    p2 = p2.next
  }

  const res = p2.next
  p2.next = null
  p1.next = head
  return res
}

var rotateRight1 = function (head, k) {
  if (!head || !head.next) {
    return head
  }
  let p = head
  let count = 1
  while (p.next) {
    count++
    p = p.next
  }
  p.next = head
  p = head
  let step = count - (k % count)
  while (--step > 0) {
    p = p.next
  }
  const res = p.next
  p.next = null
  return res
}

write('algorithms: 61. 旋转链表', 'title')

const node0_1 = new ListNode(1)
const node0_2 = new ListNode(2)
node0_1.next = node0_2
write(rotateRight(node0_1, 0)) // 1 -> 2
write(rotateRight(node0_1, 2)) // 1 -> 2
write(rotateRight(node0_1, 4)) // 1 -> 2

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(rotateRight(node1_1, 2)) // 4->5->1->2->3

const node2_1 = new ListNode(0)
const node2_2 = new ListNode(1)
const node2_3 = new ListNode(2)

node2_1.next = node2_2
node2_2.next = node2_3

write(rotateRight(node2_1, 4)) // 2 -> 0 -> 1

// tag: 数组;双指针
