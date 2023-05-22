/**
 * [中等]1080. 根到叶路径上的不足节点
 * https://leetcode-cn.com/problems/insufficient-nodes-in-root-to-leaf-paths/
 * 
 * 
给你二叉树的根节点 root 和一个整数 limit ，请你同时删除树中所有 不足节点 ，并返回最终二叉树的根节点。

假如通过节点 node 的每种可能的 “根-叶” 路径上值的总和全都小于给定的 limit，则该节点被称之为 不足节点 ，需要被删除。

叶子节点，就是没有子节点的节点。

示例 1：

           1
    2              3
 4    -99     -99     7
8 9 -99 -99  12 13 -99 14

           1
    2              3
 4                    7
8 9                    14


输入：root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1
输出：[1,2,3,4,null,null,7,8,9,null,14]
示例 2：


输入：root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22
输出：[5,4,8,11,null,17,4,7,null,null,null,5]
示例 3：


输入：root = [1,2,-3,-5,null,4,null], limit = -1
输出：[1,null,-3,4]
 

提示：

树中节点数目在范围 [1, 5000] 内
-105 <= Node.val <= 105
-109 <= limit <= 109

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
 * @param {number} limit
 * @return {TreeNode}
 */
var sufficientSubset = function (root, limit) {
  const haveSufficient = checkSufficientLeaf(root, 0, limit)
  return haveSufficient ? root : null
}

var checkSufficientLeaf = function (node, sum, limit) {
  if (node == null) {
    return false
  }
  if (node.left == null && node.right == null) {
    return node.val + sum >= limit
  }
  const haveSufficientLeft = checkSufficientLeaf(node.left, sum + node.val, limit)
  const haveSufficientRight = checkSufficientLeaf(node.right, sum + node.val, limit)
  if (!haveSufficientLeft) {
    node.left = null
  }
  if (!haveSufficientRight) {
    node.right = null
  }
  return haveSufficientLeft || haveSufficientRight
}

write('algorithms: 1080. 根到叶路径上的不足节点', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(-99)
const node1_6 = new TreeNode(-99)
const node1_7 = new TreeNode(7)
const node1_8 = new TreeNode(8)
const node1_9 = new TreeNode(9)
const node1_10 = new TreeNode(-99)
const node1_11 = new TreeNode(-99)
const node1_12 = new TreeNode(12)
const node1_13 = new TreeNode(13)
const node1_14 = new TreeNode(-99)
const node1_15 = new TreeNode(14)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5
node1_3.left = node1_6
node1_3.right = node1_7
node1_4.left = node1_8
node1_4.right = node1_9
node1_5.left = node1_10
node1_5.right = node1_11
node1_6.left = node1_12
node1_6.right = node1_13
node1_7.left = node1_14
node1_7.right = node1_15

write(sufficientSubset(node1_1, 1)) // [1,2,3,4,null,null,7,8,9,null,14]

/**
 * general nodes with array [1,2,-3,-5,null,4,null]
 *
 *      1
 *   2    -3
 * -5    4
 *
 *      1
 *        -3
 *      4
 *
 */
const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(-3)
const node2_4 = new TreeNode(-5)
const node2_5 = new TreeNode(4)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_3.left = node2_5

write(sufficientSubset(node2_1, -1)) // [1, null, -3, 4]

// tag: 二叉树；递归
