/**
 * 环形链表：https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/744/
 */

/** 
 * 
  给定一个链表，判断链表中是否有环。

  为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。


  示例 1：

  输入：head = [3,2,0,-4], pos = 1
  输出：true
  解释：链表中有一个环，其尾部连接到第二个节点。


  示例 2：

  输入：head = [1,2], pos = 0
  输出：true
  解释：链表中有一个环，其尾部连接到第一个节点。


  示例 3：

  输入：head = [1], pos = -1
  输出：false
  解释：链表中没有环。

  进阶：

  你能用 O(1)（即，常量）内存解决此问题吗？
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
var hasCycle = function(head) {
  if (!head || head.length === 0) {
    return false
  }
  let fast = head
  let slow = head
  while (true) {
    if (!(slow = slow.next)) {
      return false
    }

    try {
      if (!(fast = fast.next.next)) {
        return false
      }
    } catch (error) {
      return false
    }
    if (slow === fast) {
      return true
    }
  }
}

write('linkedList 1. hasCycle', 'title')

var node1_1 = new ListNode(3)
var node1_2 = new ListNode(2)
var node1_3 = new ListNode(0)
var node1_4 = new ListNode(-4)
node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_2
write(hasCycle(node1_1)) // true

var node2_1 = new ListNode(1)
var node2_2 = new ListNode(2)
node2_1.next = node2_2
node2_2.next = node2_1
write(hasCycle(node2_1)) // true

var node3_1 = new ListNode(1)
write(hasCycle(node3_1)) // false
