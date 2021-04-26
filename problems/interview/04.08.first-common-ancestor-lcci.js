/**
 * [中等]面试题 04.08. 首个共同祖先
 * https://leetcode-cn.com/problems/first-common-ancestor-lcci/
 * 
 * 
设计并实现一个算法，找出二叉树中某两个节点的第一个共同祖先。不得将其他的节点存储在另外的数据结构中。注意：这不一定是二叉搜索树。

例如，给定如下二叉树: root = [3,5,1,6,2,0,8,null,null,7,4]

    3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
示例 1:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。
示例 2:

输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
输出: 5
解释: 节点 5 和节点 4 的最近公共祖先是节点 5。因为根据定义最近公共祖先节点可以为节点本身。
说明:

所有节点的值都是唯一的。
p、q 为不同节点且均存在于给定的二叉树中。

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
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res = [null]
  helper(root, p, q, res)
  return res[0]
}

function helper(node, p, q, res) {
  if (!node || res[0]) {
    return null
  }
  const left = helper(node.left, p, q, res)
  const right = helper(node.right, p, q, res)
  const isFindOne = node.val === p.val || node.val === q.val
  if ((left && right) || ((left || right) && isFindOne)) {
    res[0] = node
    return
  }
  return left || right || (isFindOne ? node : null)
}

write('algorithms: 面试题 04.08. 首个共同祖先', 'title')

/**
 *  3
   / \
  5   1
 / \ / \
6  2 0  8
  / \
 7   4
 */

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(5)
const node1_3 = new TreeNode(1)
const node1_4 = new TreeNode(6)
const node1_5 = new TreeNode(2)
const node1_6 = new TreeNode(0)
const node1_7 = new TreeNode(8)
const node1_8 = new TreeNode(7)
const node1_9 = new TreeNode(4)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5
node1_3.left = node1_6
node1_3.right = node1_7
node1_5.left = node1_8
node1_5.right = node1_9

write(lowestCommonAncestor(node1_1, node1_2, node1_3)) // node1_1
write(lowestCommonAncestor(node1_1, node1_2, node1_9)) // node1_2

// tag: 二叉树；
