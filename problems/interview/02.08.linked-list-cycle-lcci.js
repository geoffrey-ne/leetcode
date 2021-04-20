/**
 * [中等]面试题 02.08. 环路检测
 * https://leetcode-cn.com/problems/linked-list-cycle-lcci/
 * 
 * 
给定一个链表，如果它是有环链表，实现一个算法返回环路的开头节点。

如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 
为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 
如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。

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
var detectCycle = function (head) {
  if (!head) {
    return null
  }
  let slow = head
  let fast = head
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      // 相交节点，
      let p = head
      while (p !== slow) {
        p = p.next
        slow = slow.next
      }
      return p
    }
  }
  return null
}

write('algorithms: 面试题 02.08. 环路检测', 'title')

const node1_1 = new ListNode(3)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(0)
const node1_4 = new ListNode(-4)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_2

detectCycle(node1_1)

// tag: 链表；快慢指针
