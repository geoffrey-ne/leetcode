/**
 * [中等]面试题 02.05. 链表求和
 * https://leetcode-cn.com/problems/sum-lists-lcci/
 * 
 * 
给定两个用链表表示的整数，每个节点包含一个数位。

这些数位是反向存放的，也就是个位排在链表首部。

编写函数对这两个整数求和，并用链表形式返回结果。

示例：

输入：(7 -> 1 -> 6) + (5 -> 9 -> 2)，即617 + 295
输出：2 -> 1 -> 9，即912
进阶：思考一下，假设这些数位是正向存放的，又该如何解决呢?

示例：

输入：(6 -> 1 -> 7) + (2 -> 9 -> 5)，即617 + 295
输出：9 -> 1 -> 2，即912

*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let isJinWei = false
  let head = new ListNode(0)
  let p1 = head
  while (l1 || l2) {
    const v1 = (l1 && l1.val) || 0
    const v2 = (l2 && l2.val) || 0
    let res = isJinWei ? v1 + v2 + 1 : v1 + v2
    isJinWei = false
    if (res >= 10) {
      isJinWei = true
      res = res % 10
    }
    const node = new ListNode(res)
    p1.next = node
    p1 = node

    l1 = l1 && l1.next
    l2 = l2 && l2.next
  }
  if (isJinWei) {
    p1.next = new ListNode(1)
  }
  return head.next
}

write('algorithms: 面试题 02.05. 链表求和', 'title')

const node1_1 = new ListNode(7)
const node1_2 = new ListNode(1)
const node1_3 = new ListNode(6)
const node1_4 = new ListNode(5)
const node1_5 = new ListNode(9)
const node1_6 = new ListNode(2)

node1_1.next = node1_2
node1_2.next = node1_3

node1_4.next = node1_5
node1_5.next = node1_6

write(addTwoNumbers(node1_1, node1_4)) // 2->1->9

// tag: 链表；
