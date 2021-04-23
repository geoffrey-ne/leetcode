/**
 * [中等]面试题 04.06. 后继者
 * https://leetcode-cn.com/problems/successor-lcci/
 * 
 * 
设计一个算法，找出二叉搜索树中指定节点的“下一个”节点（也即中序后继）。

如果指定节点没有对应的“下一个”节点，则返回null。

示例 1:

输入: root = [2,1,3], p = 1

  2
 / \
1   3

输出: 2
示例 2:

输入: root = [5,3,6,2,4,null,null,1], p = 6

      5
     / \
    3   6
   / \
  2   4
 /   
1

输出: null

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function (root, p) {
  if (!root || !p) {
    return null
  }
  // 如果存在右节点，可以直接拿到结果
  if (p.right) {
    let res = p.right
    while (res.left) {
      res = res.left
    }
    return res
  }
  // 否则中序遍历，遍历到该节点时，返回结果
  const stack = []
  let node = root
  let isFindP = false
  while (node || stack.length > 0) {
    while (node) {
      stack.push(node)
      node = node.left
    }
    const cur = stack.pop()
    if (isFindP) {
      return cur
    }
    if (cur === p) {
      isFindP = true
    }
    node = cur.right
  }

  return null
}

write('algorithms: 面试题 04.06. 后继者', 'title')

/**
 *  2
   / \
  1   3
 */

const node1_1 = new TreeNode(2)
const node1_2 = new TreeNode(1)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(inorderSuccessor(node1_1, node1_2)) // node1_1

/**
 *    5
     / \
    3   6
   / \
  2   4
 /   
1
 */

const node2_1 = new TreeNode(5)
const node2_2 = new TreeNode(3)
const node2_3 = new TreeNode(6)
const node2_4 = new TreeNode(2)
const node2_5 = new TreeNode(4)
const node2_6 = new TreeNode(1)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_4.left = node2_6

write(inorderSuccessor(node2_1, node2_5)) // node2_1
write(inorderSuccessor(node2_1, node2_6)) // node2_4
write(inorderSuccessor(node2_1, node2_2)) // node2_5
write(inorderSuccessor(node2_1, node2_3)) // null

// tag: 二叉树；中序遍历（迭代）
