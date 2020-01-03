/**
 * 设计链表：https://leetcode-cn.com/explore/learn/card/linked-list/193/singly-linked-list/741/
 */
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
  this.head = null
  this.length = 0
}

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  const curNode = this.getNode(index)
  return curNode ? curNode.val : -1
}

MyLinkedList.prototype.getNode = function(index) {
  if (index > this.length - 1) {
    return null
  }
  let curNode = this.head
  while (index-- > 0) {
    curNode = curNode.next
  }
  return curNode
}

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
  const node = { val, next: this.head }
  this.head = node
  this.length++
}

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  const tailNode = this.getNode(this.length - 1)
  tailNode.next = { val, next: null }
  this.length++
}

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
  if (index === 0) {
    this.addAtHead(val)
  } else if (index === this.length) {
    this.addAtTail(val)
  } else if (index < this.length) {
    let prevNode = this.head
    let curNode = this.head.next
    while (--index > 0) {
      prevNode = curNode
      curNode = curNode.next
    }
    const node = { val, next: curNode }
    prevNode.next = node
    this.length++
  }
}

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
  if (index > this.length - 1) {
    return
  } else if (this.length === 1) {
    this.head = null
    this.length--
  } else if (index === 0) {
    this.head = this.head.next
  } else {
    let prevNode = this.head
    let curNode = this.head.next
    while (--index > 0) {
      prevNode = curNode
      curNode = curNode.next
    }
    prevNode.next = curNode.next
    curNode.next = null
    this.length--
  }
}

/** 
 * 
  设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。

  在链表类中实现这些功能：

  get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
  addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
  addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
  addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
  deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
  

  示例：

  MyLinkedList linkedList = new MyLinkedList();
  linkedList.addAtHead(1);
  linkedList.addAtTail(3);
  linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
  linkedList.get(1);            //返回2
  linkedList.deleteAtIndex(1);  //现在链表是1-> 3
  linkedList.get(1);            //返回3
  

  提示：

  所有val值都在 [1, 1000] 之内。
  操作次数将在  [1, 1000] 之内。
  请不要使用内置的 LinkedList 库。
 */

write('linkedList 0. MyLinkedList', 'title')

const linkedList = new MyLinkedList()
linkedList.addAtHead(1)
linkedList.addAtTail(3)
linkedList.addAtIndex(1, 2) //链表变为1-> 2-> 3
write(linkedList.get(1)) //返回2
linkedList.deleteAtIndex(1) //现在链表是1-> 3
write(linkedList.get(1)) //返回3

const linkedList1 = new MyLinkedList()
linkedList.addAtHead(1)
linkedList.deleteAtIndex(0)

const linkedList2 = new MyLinkedList()
linkedList2.addAtHead(7)
linkedList2.addAtHead(2)
linkedList2.addAtHead(1)
linkedList2.addAtIndex(3, 0)
linkedList2.deleteAtIndex(2)
linkedList2.addAtHead(6)
linkedList2.addAtTail(4)
write(linkedList2.get(4)) // 4
linkedList2.addAtHead(4)
linkedList2.addAtIndex(5, 0)
linkedList2.addAtHead(6)
console.log(linkedList2) // 6 4 6 1 2 0 0 4

const linkedList3 = new MyLinkedList()
linkedList3.addAtHead(1)
linkedList3.addAtTail(3)
linkedList3.addAtIndex(1, 2)
write(linkedList3.get(1)) // 2
linkedList3.deleteAtIndex(0)
write(linkedList3.get(0)) // 2
console.log(linkedList3) // 2 3
