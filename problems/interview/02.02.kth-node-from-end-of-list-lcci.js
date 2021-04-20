/**
 * [简单]面试题 02.02. 返回倒数第 k 个节点
 * https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
 * 
 * 
实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。

注意：本题相对原题稍作改动

示例：

输入： 1->2->3->4->5 和 k = 2
输出： 4
说明：

给定的 k 保证是有效的。

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
 * @return {number}
 */
var kthToLast = function (head, k) {
  let p1 = head
  let p2 = head
  while (k > 1) {
    p2 = p2.next
    k--
  }
  while (p2.next) {
    p1 = p1.next
    p2 = p2.next
  }
  return p1.val
}

write('algorithms: 面试题 02.02. 返回倒数第 k 个节点', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(kthToLast(node1_1, 2)) // 4

const node2_1 = new ListNode(1)
const node2_2 = new ListNode(2)
const node2_3 = new ListNode(3)

node2_1.next = node2_2
node2_2.next = node2_3

write(kthToLast(node2_1, 3)) // 1

// tag: 链表；双指针
