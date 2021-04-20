/**
 * [简单]面试题 02.07. 链表相交
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/
 * 
 * 

给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，而不是基于节点的值。换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。


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

如果两个链表没有交点，返回 null 。
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
var getIntersectionNode1 = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }
  let lenA = 0
  let lenB = 0
  let p = headA
  while (p) {
    lenA++
    p = p.next
  }
  p = headB
  while (p) {
    lenB++
    p = p.next
  }
  p = headA
  let p2 = headB
  let sub = lenA - lenB
  if (sub >= 0) {
    while (sub-- > 0) {
      p = p.next
    }
  } else {
    while (sub++ < 0) {
      p2 = p2.next
    }
  }
  while (p) {
    if (p === p2) {
      break
    }
    p = p.next
    p2 = p2.next
  }
  return p
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let a = headA
  let b = headB
  while (a != b) {
    a = a !== null ? a.next : headB
    b = b !== null ? b.next : headA
  }
  return a
}

write('algorithms: 面试题 02.07. 链表相交', 'title')

const node1_1 = new ListNode(4)
const node1_2 = new ListNode(1)
const node1_3 = new ListNode(5)
const node1_4 = new ListNode(0)
const node1_5 = new ListNode(1)

const node1_6 = new ListNode(8)
const node1_7 = new ListNode(4)
const node1_8 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_6

node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6

node1_6.next = node1_7
node1_7.next = node1_8

write(getIntersectionNode(node1_1, node1_3)) // node1_6   8

// tag: 链表；
