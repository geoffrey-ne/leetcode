/**
 * [困难]124. 二叉树中的最大路径和
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 
 * 
路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

示例 1：

输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6
示例 2：

输入：root = [-10,9,20,null,null,15,7]

 -10
 / \
9  20
  /  \
 15   7

输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
 

提示：

树中节点数目范围是 [1, 3 * 104]
-1000 <= Node.val <= 1000

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
 * @return {number}
 */
var maxPathSum = function (root) {
  let max = Number.MIN_SAFE_INTEGER

  function helper(node) {
    if (!node) {
      return 0
    }

    const leftMax = Math.max(helper(node.left), 0)
    const rightMax = Math.max(helper(node.right), 0)

    max = Math.max(max, node.val + leftMax + rightMax)

    return node.val + Math.max(leftMax, rightMax)
  }
  helper(root)

  return max
}

write('algorithms: 124. 二叉树中的最大路径和', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(maxPathSum(node1_1)) // 6

const node2_1 = new TreeNode(-10)
const node2_2 = new TreeNode(9)
const node2_3 = new TreeNode(20)
const node2_4 = new TreeNode(15)
const node2_5 = new TreeNode(7)

node2_1.left = node2_2
node2_1.right = node2_3
node2_3.left = node2_4
node2_3.right = node2_5

write(maxPathSum(node2_1)) // 42

// tag: 二叉树；DP；递归
