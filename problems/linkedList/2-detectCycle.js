/**
 * 环形链表：https://leetcode-cn.com/explore/learn/card/linked-list/194/two-pointer-technique/744/
 */

/** 
 * 
  给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

  为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

  说明：不允许修改给定的链表。

  示例 1：

  输入：head = [3,2,0,-4], pos = 1
  输出：tail connects to node index 1
  解释：链表中有一个环，其尾部连接到第二个节点。


  示例 2：

  输入：head = [1,2], pos = 0
  输出：tail connects to node index 0
  解释：链表中有一个环，其尾部连接到第一个节点。


  示例 3：

  输入：head = [1], pos = -1
  输出：no cycle
  解释：链表中没有环。

  进阶：
  你是否可以不用额外空间解决此题？
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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || head.length === 0) {
    return null
  }
  let fastStep = 0
  let slowStep = 0
  let fast = head
  let slow = head
  while (true) {
    try {
      fast = fast.next.next
      fastStep += 2
    } catch (error) {
      return null
    }
    slow = slow.next
    slowStep++

    if (slow === fast) {
      break
    }
  }
  slow = head
  const circleLen = fastStep - slowStep
  while (slow) {
    let steps = circleLen
    fast = slow
    while (steps--) {
      fast = fast.next
    }
    if (slow === fast) {
      return slow
    }
    slow = slow.next
  }
}

var detectCycle1 = function(head) {
  let slow = (fast = head)
  let hasCycle = false
  while (slow && fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      hasCycle = true
      break
    }
  }
  if (hasCycle) {
    let q = head
    while (slow !== q) {
      slow = slow.next
      q = q.next
    }
    return q
  }
  return null
}

write('linkedList 2. detectCycle', 'title')

var node1_1 = new ListNode(3)
var node1_2 = new ListNode(2)
var node1_3 = new ListNode(0)
var node1_4 = new ListNode(-4)
node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_2
detectCycle1(node1_1) // node1_2

var node2_1 = new ListNode(1)
var node2_2 = new ListNode(2)
node2_1.next = node2_2
node2_2.next = node2_1
detectCycle1(node2_1) // node2_1

var node3_1 = new ListNode(1)
detectCycle1(node3_1) // null
