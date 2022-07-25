/**
 * [中等]919. 完全二叉树插入器
 * https://leetcode-cn.com/problems/complete-binary-tree-inserter/
 * 
 * 
完全二叉树 是每一层（除最后一层外）都是完全填充（即，节点数达到最大）的，并且所有的节点都尽可能地集中在左侧。

设计一种算法，将一个新节点插入到一个完整的二叉树中，并在插入后保持其完整。

实现 CBTInserter 类:

CBTInserter(TreeNode root) 使用头节点为 root 的给定树初始化该数据结构；
CBTInserter.insert(int v)  向树中插入一个值为 Node.val == val的新节点 TreeNode。使树保持完全二叉树的状态，并返回插入节点 TreeNode 的父节点的值；
CBTInserter.get_root() 将返回树的头节点。
 

示例 1：

  1         1             1
 /         / \           / \
2         2   3         2   3
                       /
                      4

输入
["CBTInserter", "insert", "insert", "get_root"]
[[[1, 2]], [3], [4], []]
输出
[null, 1, 2, [1, 2, 3, 4]]

解释
CBTInserter cBTInserter = new CBTInserter([1, 2]);
cBTInserter.insert(3);  // 返回 1
cBTInserter.insert(4);  // 返回 2
cBTInserter.get_root(); // 返回 [1, 2, 3, 4]
 

提示：

树中节点数量范围为 [1, 1000] 
0 <= Node.val <= 5000
root 是完全二叉树
0 <= val <= 5000 
每个测试用例最多调用 insert 和 get_root 操作 104 次

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

/**
 * @param {TreeNode} root
 */
var CBTInserter = function (root) {
  this.root = root
  this.list = [root]
}

/**
 * @param {number} val
 * @return {number}
 */
CBTInserter.prototype.insert = function (val) {
  while (this.list[0].left && this.list[0].right) {
    this.list.push(this.list[0].left, this.list[0].right)
    this.list.shift()
  }
  if (!this.list[0].left) {
    this.list[0].left = new TreeNode(val)
  } else {
    this.list[0].right = new TreeNode(val)
  }
  return this.list[0].val
}

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function () {
  return this.root
}

// 二进制解法
var CBTInserter1 = function (root) {
  this.cnt = 0
  this.root = root

  const queue = []
  queue.push(root)

  while (queue.length) {
    ++this.cnt
    const node = queue.shift()
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}

CBTInserter1.prototype.insert = function (val) {
  ++this.cnt
  const child = new TreeNode(val)
  let node = this.root
  const highbit = ('' + this.cnt.toString(2)).length - 1
  for (let i = highbit - 1; i >= 1; --i) {
    if ((this.cnt & (1 << i)) !== 0) {
      node = node.right
    } else {
      node = node.left
    }
  }
  if ((this.cnt & 1) !== 0) {
    node.right = child
  } else {
    node.left = child
  }
  return node.val
}

CBTInserter1.prototype.get_root = function () {
  return this.root
}

/**
 * Your CBTInserter object will be instantiated and called as such:
 * var obj = new CBTInserter(root)
 * var param_1 = obj.insert(val)
 * var param_2 = obj.get_root()
 */

write('algorithms: 919. 完全二叉树插入器', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)

node1_1.left = node1_2

var obj = new CBTInserter(root)
write(obj.insert(3)) // 1
write(obj.insert(4)) // 2
write(obj.get_root()) // node1_1

// tag: 二叉树；完全二叉树；队列；二进制
