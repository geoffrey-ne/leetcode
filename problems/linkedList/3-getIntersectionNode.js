/**
 * 相交链表：https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/746/
 */

/** 
 * 
  编写一个程序，找到两个单链表相交的起始节点。

  如下面的两个链表：

  在节点 c1 开始相交。

  示例 1：

  输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
  输出：Reference of the node with value = 8
  输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
  

  示例 2：

  输入：intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
  输出：Reference of the node with value = 2
  输入解释：相交节点的值为 2 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。
  

  示例 3：

  输入：intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
  输出：null
  输入解释：从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。
  解释：这两个链表不相交，因此返回 null。
  

  注意：

  如果两个链表没有交点，返回 null.
  在返回结果后，两个链表仍须保持原有的结构。
  可假定整个链表结构中没有循环。
  程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  const lenA = getLen(headA)
  const lenB = getLen(headB)

  let pShort = headB
  let pLong = headA
  let sub = lenA - lenB
  if (sub < 0) {
    pShort = headA
    pLong = headB
    sub = -sub
  }

  while (sub--) {
    pLong = pLong.next
  }

  while (pShort && pLong) {
    if (pShort === pLong) {
      return pShort
    }
    pShort = pShort.next
    pLong = pLong.next
  }
  return null
}

function getLen(head) {
  let count = 0
  while (head) {
    count++
    head = head.next
  }
  return count
}

write('linkedList 3. getIntersectionNode', 'title')

var node1_1_1 = new ListNode(4)
var node1_1_2 = new ListNode(1)
var node1_1_3 = new ListNode(8)
var node1_1_4 = new ListNode(4)
var node1_1_5 = new ListNode(5)

var node1_2_1 = new ListNode(5)
var node1_2_2 = new ListNode(0)
var node1_2_3 = new ListNode(1)

node1_1_1.next = node1_1_2
node1_1_2.next = node1_1_3

node1_2_1.next = node1_2_2
node1_2_2.next = node1_2_3
node1_2_3.next = node1_1_3

node1_1_3.next = node1_1_4
node1_1_4.next = node1_1_5

write(getIntersectionNode(node1_1_1, node1_2_1).val) // 8

var node2_1_1 = new ListNode(0)
var node2_1_2 = new ListNode(9)
var node2_1_3 = new ListNode(1)
var node2_1_4 = new ListNode(2)
var node2_1_5 = new ListNode(4)

var node2_2_1 = new ListNode(3)

node2_1_1.next = node2_1_2
node2_1_2.next = node2_1_3
node2_1_3.next = node2_1_4
node2_1_4.next = node2_1_5

node2_2_1.next = node2_1_4

write(getIntersectionNode(node2_1_1, node2_2_1).val) // 2

var node3_1_1 = new ListNode(2)
var node3_1_2 = new ListNode(6)
var node3_1_3 = new ListNode(4)

var node3_2_1 = new ListNode(1)
var node3_2_2 = new ListNode(5)

node3_1_1.next = node3_1_2
node3_1_2.next = node3_1_3

node3_2_1.next = node3_2_2

write(getIntersectionNode(node3_1_1, node3_2_1)) // null
