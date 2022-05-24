/**
 * [简单]965. 单值二叉树
 * https://leetcode-cn.com/problems/univalued-binary-tree/
 * 
 * 
如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。
只有给定的树是单值二叉树时，才返回 true；否则返回 false。
示例 1：
输入：[1,1,1,1,1,null,1]
输出：true

示例 2：
输入：[2,2,2,5,2]
输出：false
 
提示：

给定树的节点数范围是 [1, 100]。
每个节点的值都是整数，范围为 [0, 99] 。

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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
  if (!root) {
    return true
  }
  const val = root.val
  const stack = [root]
  while (stack.length > 0) {
    const node = stack.shift()
    if (node.val !== val) {
      return false
    }
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  return true
}

write('algorithms: 965. 单值二叉树', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(5)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.right = node1_4
node1_3.right = node1_5

write(isUnivalTree(node1_1)) // false

// tag: 二叉树
