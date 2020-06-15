/**
 * [中等]2. 两数相加
 * https://leetcode-cn.com/problems/add-two-numbers/
 * 
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
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
  let jinWei = false

  let res = null
  let p = null
  while (l1 || l2) {
    let sum = getVal(l1) + getVal(l2) + (jinWei ? 1 : 0)
    if (sum >= 10) {
      jinWei = true
      sum -= 10
    } else {
      jinWei = false
    }
    if (p) {
      p.next = new ListNode(sum)
      p = p.next
    } else {
      res = p = new ListNode(sum)
    }

    l1 = getNext(l1)
    l2 = getNext(l2)
  }
  if (jinWei) {
    p.next = new ListNode(1)
  }
  return res
}

function getVal(node) {
  return node ? node.val : 0
}

function getNext(node) {
  return node ? node.next : null
}

const node1_1 = new ListNode(2)
const node1_2 = new ListNode(4)
const node1_3 = new ListNode(3)

node1_1.next = node1_2
node1_2.next = node1_3

const node2_1 = new ListNode(5)
const node2_2 = new ListNode(6)
const node2_3 = new ListNode(4)

node2_1.next = node2_2
node2_2.next = node2_3

write('algorithms: 2. 两数相加', 'title')
write(addTwoNumbers(node1_1, node2_1))
