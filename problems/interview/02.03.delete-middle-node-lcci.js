/**
 * [简单]面试题 02.03. 删除中间节点
 * https://leetcode-cn.com/problems/delete-middle-node-lcci/
 * 
 * 
实现一种算法，删除单向链表中间的某个节点（即不是第一个或最后一个节点），假定你只能访问该节点。

示例：

输入：单向链表a->b->c->d->e->f中的节点c
结果：不返回任何数据，但该链表变为a->b->d->e->f

*/

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let pre
  while (node.next) {
    pre = node
    node.val = node.next.val
    node = node.next
  }
  pre.next = null
}

write('algorithms: 面试题 02.03. 删除中间节点', 'title')

const node1_1 = new ListNode('a')
const node1_2 = new ListNode('b')
const node1_3 = new ListNode('c')
const node1_4 = new ListNode('d')
const node1_5 = new ListNode('e')
const node1_6 = new ListNode('f')

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6

deleteNode(node1_3)
write(node1_1) // a->b->d->e->f

const node2_1 = new ListNode(4)
const node2_2 = new ListNode(5)
const node2_3 = new ListNode(1)
const node2_4 = new ListNode(9)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4

deleteNode(node2_2)
write(node2_1) // 4->1->9

// tag: 链表；快慢指针
