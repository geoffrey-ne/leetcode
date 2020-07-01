/**
 * [困难]25. K 个一组翻转链表
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * 
给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。

k 是一个正整数，它的值小于或等于链表的长度。

如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。

示例：

给你这个链表：1->2->3->4->5

当 k = 2 时，应当返回: 2->1->4->3->5

p1.next = p2.next
p2.next = p1
p0.next = p2

p0 = 

当 k = 3 时，应当返回: 3->2->1->4->5

p1.next = p3.next
p2.next = p1
p3.next = p2
p0.next = p3

说明：

你的算法只能使用常数的额外空间。
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k <= 1) {
    return head
  }
  const helpHead = new ListNode()
  helpHead.next = head
  let p0 = helpHead
  let arr = [p0]
  let num = k
  while (num) {
    const pre = arr[arr.length - 1]
    arr.push(pre && pre.next)
    num--
  }
  while (arr.every((pointer) => pointer)) {
    arr[1].next = arr[k].next
    for (let i = 2; i <= k; i++) {
      arr[i].next = arr[i - 1]
    }
    arr[0].next = arr[k]

    p0 = arr[1]
    arr = [p0]
    num = k
    while (num) {
      const pre = arr[arr.length - 1]
      arr.push(pre && pre.next)
      num--
    }
  }

  return helpHead.next
}

write('algorithms: 25. K 个一组翻转链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)
node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(reverseKGroup(node1_1, 2)) // 2->1->4->3->5.
const node2_1 = new ListNode(1)
const node2_2 = new ListNode(2)
const node2_3 = new ListNode(3)
const node2_4 = new ListNode(4)
const node2_5 = new ListNode(5)
const node2_6 = new ListNode(6)
node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5
node2_5.next = node2_6
write(reverseKGroup(node2_1, 1)) // 3->2->1->4->5.

// tag: 链表
