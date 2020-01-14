/**
 * 两数相加：https://leetcode-cn.com/explore/learn/card/linked-list/197/conclusion/763/
 */

/** 
 * 
  给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

  如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

  您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

  示例：

  输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
  输出：7 -> 0 -> 8
  原因：342 + 465 = 807
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
var addTwoNumbers = function(l1, l2) {
  let jinwei = 0
  let head = null
  let tail = head
  let cur
  while (l1 && l2) {
    let sum = l1.val + l2.val + jinwei
    if (sum >= 10) {
      sum %= 10
      jinwei = 1
    } else {
      jinwei = 0
    }
    cur = new ListNode(sum)
    if (!tail) {
      head = cur
    } else {
      tail.next = cur
    }
    tail = cur
    l1 = l1.next
    l2 = l2.next
  }

  while (l1) {
    let sum = l1.val + jinwei
    if (sum >= 10) {
      sum %= 10
      jinwei = 1
    } else {
      jinwei = 0
    }
    cur = new ListNode(sum)
    if (!tail) {
      head = cur
    } else {
      tail.next = cur
    }
    tail = cur
    l1 = l1.next
  }

  while (l2) {
    let sum = l2.val + jinwei
    if (sum >= 10) {
      sum %= 10
      jinwei = 1
    } else {
      jinwei = 0
    }
    cur = new ListNode(sum)
    if (!tail) {
      head = cur
    } else {
      tail.next = cur
    }
    tail = cur
    l2 = l2.next
  }

  if (jinwei) {
    cur = new ListNode(1)
    tail.next = cur
  }

  return head
}

var addTwoNumbers1 = function(l1, l2) {
  if (l1 == null && l2 == null) {
    return null
  }
  l1 = l1 ? l1 : new ListNode(0)
  l2 = l2 ? l2 : new ListNode(0)
  l1.val += l2.val
  if (l1.val > 9) {
    l1.val -= 10
    l1.next = l1.next ? l1.next : new ListNode(0)
    l1.next.val++
  }
  l1.next = addTwoNumbers(l1.next, l2.next)
  return l1
}

write('linkedList 10. addTwoNumbers', 'title')

var node1_1 = new ListNode(2)
var node1_2 = new ListNode(4)
var node1_3 = new ListNode(3)

node1_1.next = node1_2
node1_2.next = node1_3

var node2_1 = new ListNode(5)
var node2_2 = new ListNode(6)
var node2_3 = new ListNode(4)

node2_1.next = node2_2
node2_2.next = node2_3

write(addTwoNumbers(node1_1, node2_1)) // 7 -> 0 -> 8
