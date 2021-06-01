/**
 * [中等]148. 排序链表
 * https://leetcode-cn.com/problems/sort-list/
 * 
 * 
给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。

进阶：

你可以在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序吗？

示例 1：

输入：head = [4,2,1,3]
输出：[1,2,3,4]
示例 2：

输入：head = [-1,5,3,4,0]
输出：[-1,0,3,4,5]
示例 3：

输入：head = []
输出：[]

提示：

链表中节点的数目在范围 [0, 5 * 104] 内
-105 <= Node.val <= 105

*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {}

write('algorithms: 143. 重排链表', 'title')

const node1_1 = new ListNode(4)
const node1_2 = new ListNode(1)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(2)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4

write(sortList(node1_1)) // 1->2->3->4

const node2_1 = new ListNode(3)
const node2_2 = new ListNode(2)
const node2_3 = new ListNode(5)
const node2_4 = new ListNode(4)
const node2_5 = new ListNode(1)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5

write(sortList(node2_1)) // 1->2->3->4->5

// tag: 链表；归并排序；未完成
