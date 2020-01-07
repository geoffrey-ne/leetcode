/**
 * 回文链表：https://leetcode-cn.com/explore/learn/card/linked-list/195/classic-problems/754/
 */

/** 
 * 
  请判断一个链表是否为回文链表。

  示例 1:

  输入: 1->2
  输出: false
  示例 2:

  输入: 1->2->2->1
  输出: true
  进阶：
  你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    // 没有或者只有一个节点，认为是回文
    return true
  } else if (!head.next.next) {
    // 两个节点是直接判断值是否相等
    return head.val === head.next.val
  }
  let preTail = head
  let tail = head
  while (tail.next) {
    preTail = tail
    tail = tail.next
  }

  if (head.val === tail.val) {
    head = head.next
    preTail.next = null
    return isPalindrome(head)
  }
  return false
}

// 先反转后半列表，对比。
var isPalindrome1 = function(head) {
  var p = head
  var len = 0
  // 计算链表长度
  while (p != null) {
    p = p.next
    len++
  }
  len = Math.ceil(len / 2)
  // p指向后半链表的开头
  p = head
  while (len) {
    p = p.next
    len--
  }
  // 反转从p开始的链表
  var pre = null
  var helper = null
  while (p != null) {
    helper = p.next
    p.next = pre
    pre = p
    p = helper
  }
  // 对比前半和反转后的后半是否相等
  while (pre != null) {
    if (pre.val != head.val) return false
    pre = pre.next
    head = head.next
  }
  return true
}

write('linkedList 7. oddEvenList', 'title')

var node1_1 = new ListNode(1)
var node1_2 = new ListNode(2)

node1_1.next = node1_2

write(isPalindrome1(node1_1)) // false

var node2_1 = new ListNode(1)
var node2_2 = new ListNode(2)
var node2_3 = new ListNode(2)
var node2_4 = new ListNode(1)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4

write(isPalindrome1(node2_1)) // true
