/**
 * [中等]面试题 02.04. 分割链表
 * https://leetcode-cn.com/problems/partition-list-lcci/
 * 
 * 
编写程序以 x 为基准分割链表，使得所有小于 x 的节点排在大于或等于 x 的节点之前。
如果链表中包含 x，x 只需出现在小于 x 的元素之后(如下所示)。
分割元素 x 只需处于“右半部分”即可，其不需要被置于左右两部分之间。

示例:

输入: head = 3->5->8->5->10->2->1, x = 5
输出: 3->1->2->10->5->5->8

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
 * @param {number} x
 * @return {ListNode}
 */
var partition1 = function (head, x) {
  let p1 = head
  while (p1 && p1.val >= x) {
    p1 = p1.next
  }
  if (!p1) {
    return head
  }
  // 此时p1指向一个小于x的节点

  // 将p1之前的节点都放到p1之后

  let p2 = head
  while (p2 !== p1) {
    const node = new ListNode(p2.val)
    let tmp = p1.next
    p1.next = node
    node.next = tmp

    tmp = p2
    p2 = p2.next
    tmp.next = null
  }
  head = p1

  // 遍历p1之后的节点，把小于x的都往前提

  while (p2.next) {
    if (p2.next.val >= x) {
      p2 = p2.next
    } else if (p1 === p2) {
      p1 = p2
      p2 = p2.next
    } else {
      // 插入这个节点到p1.next
      const node = new ListNode(p2.next.val)
      node.next = p1.next
      p1.next = node
      p1 = p1.next

      // 删除该节点
      const tmpNode = p2.next
      p2.next = p2.next.next
      tmpNode.next = null
    }
  }
  return head
}

/**
 * 思路，维护两个新链表，所有小的放在一个链表，所有大于等于的放在一个链表
 * 最后将小的链表连接到大的表头即可
 *
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode(0)
  const smallHead = small
  let large = new ListNode(0)
  const largeHead = large
  while (head !== null) {
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      large.next = head
      large = large.next
    }
    head = head.next
  }
  large.next = null
  small.next = largeHead.next
  return smallHead.next
}

write('algorithms: 面试题 02.04. 分割链表', 'title')

const node1_1 = new ListNode(3)
const node1_2 = new ListNode(5)
const node1_3 = new ListNode(8)
const node1_4 = new ListNode(5)
const node1_5 = new ListNode(10)
const node1_6 = new ListNode(2)
const node1_7 = new ListNode(1)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6
node1_6.next = node1_7

write(partition(node1_1, 5)) // 3->1->2->10->5->5->8

const node2_1 = new ListNode(2)
const node2_2 = new ListNode(1)

node2_1.next = node2_2

write(partition(node2_1, 2)) // 1->2

const node3_1 = new ListNode(1)
const node3_2 = new ListNode(4)
const node3_3 = new ListNode(3)
const node3_4 = new ListNode(2)
const node3_5 = new ListNode(5)
const node3_6 = new ListNode(2)

node3_1.next = node3_2
node3_2.next = node3_3
node3_3.next = node3_4
node3_4.next = node3_5
node3_5.next = node3_6

write(partition(node3_1, 3)) // 1->2->2->4->3->5

// tag: 链表；双指针
