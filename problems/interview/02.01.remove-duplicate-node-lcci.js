/**
 * [简单]面试题 02.01. 移除重复节点
 * https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 * 
 * 
编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。

示例1:

 输入：[1, 2, 3, 3, 2, 1]
 输出：[1, 2, 3]
示例2:

 输入：[1, 1, 1, 1, 2]
 输出：[1, 2]
提示：

链表长度在[0, 20000]范围内。
链表元素在[0, 20000]范围内。
进阶：

如果不得使用临时缓冲区，该怎么解决？
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
var removeDuplicateNodes = function (head) {
  if (!head) {
    return head
  }
  const hashSet = new Set([head.val])
  let p1 = head
  let p2 = head.next

  while (p2) {
    if (hashSet.has(p2.val)) {
      // remove
      p1.next = p2.next
      p2.next = null
      p2 = p1.next
    } else {
      hashSet.add(p2.val)
      p1 = p2
      p2 = p2.next
    }
  }
  return head
}

write('algorithms: 面试题 02.01. 移除重复节点', 'title')

const node1_1 = new ListNode(1)
const node1_2 = new ListNode(2)
const node1_3 = new ListNode(3)
const node1_4 = new ListNode(3)
const node1_5 = new ListNode(2)
const node1_6 = new ListNode(1)

node1_1.next = node1_2
node1_2.next = node1_3
node1_3.next = node1_4
node1_4.next = node1_5
node1_5.next = node1_6

write(removeDuplicateNodes(node1_1)) // [1, 2, 3]

const node2_1 = new ListNode(1)
const node2_2 = new ListNode(1)
const node2_3 = new ListNode(1)
const node2_4 = new ListNode(1)
const node2_5 = new ListNode(2)

node2_1.next = node2_2
node2_2.next = node2_3
node2_3.next = node2_4
node2_4.next = node2_5

write(removeDuplicateNodes(node2_1)) // [1, 2]

// tag: 链表
