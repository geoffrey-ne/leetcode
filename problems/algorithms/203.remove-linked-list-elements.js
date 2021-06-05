/**
 * [简单]203. 移除链表元素
 * https://leetcode-cn.com/problems/remove-linked-list-elements/
 * 
 * 
给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。

示例 1：

输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
示例 2：

输入：head = [], val = 1
输出：[]
示例 3：

输入：head = [7,7,7,7], val = 7
输出：[]

提示：

列表中的节点在范围 [0, 104] 内
1 <= Node.val <= 50
0 <= k <= 50

 */

/**
 * Definition for singly-linked list.
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const preHead = new ListNode(-1)
  preHead.next = head
  let p1 = preHead
  while (p1) {
      const next = p1.next
      if (next && next.val === val) {
          p1.next = next.next
          next.next = null
      } else {
          p1 = p1.next
      }
  }
  const newHead = preHead.next
  preHead.next = null
  delete preHead
  return newHead
};

write(countPrimes(10)) // 4
write(countPrimes(0)) // 0
write(countPrimes(1)) // 0

// tag: 链表
