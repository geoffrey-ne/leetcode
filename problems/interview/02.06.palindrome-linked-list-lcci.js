/**
 * [中等]面试题 02.06. 回文链表
 * https://leetcode-cn.com/problems/palindrome-linked-list-lcci/
 * 
 * 

编写一个函数，检查输入的链表是否是回文的。

示例 1：

输入： 1->2
输出： false 
示例 2：

输入： 1->2->2->1
输出： true 

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
var isPalindrome = function (head) {
  if (!head) {
    return true
  }
  let slow = head
  let fast = head
  let preStr = `${slow.val}`
  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    preStr += `,${slow.val}`
  }
  if (fast.next) {
    // 偶数链表
    slow = slow.next
  }
  let afterStr = ''
  while (slow) {
    afterStr = slow.val + ',' + afterStr
    slow = slow.next
  }
  return preStr + ',' === afterStr
}

write('algorithms: 面试题 02.06. 回文链表', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(1)
const node1_4 = new ListNode(1)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4

write(isPalindrome(node1_1)) // true

// tag: 链表；快慢指针
