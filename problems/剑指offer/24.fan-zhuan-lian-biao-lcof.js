/**
 * [简单]剑指 Offer 24. 反转链表
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * 
 * 
定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

示例:

输入: 1->2->3->4->5->NULL
输出: 5->4->3->2->1->NULL
 
限制：

0 <= 节点个数 <= 5000

注意：本题与主站 206 题相同：https://leetcode-cn.com/problems/reverse-linked-list/

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
var reverseList = function (head) {
  let cur = null
  let next = head
  while (next) {
    const tmp = next.next
    next.next = cur
    cur = next
    next = tmp
  }
  return cur
}

write('algorithms: 剑指 Offer 24. 反转链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(4)
const node1_5 = new ListNode(5)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5

write(reverseList(node1_1)) // 5->4->3->2->1->NULL

// tag: 链表
