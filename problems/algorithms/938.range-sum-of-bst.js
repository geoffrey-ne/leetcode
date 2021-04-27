/**
 * [简单]938. 二叉搜索树的范围和
 * https://leetcode-cn.com/problems/range-sum-of-bst/
 * 
 * 
给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。

示例 1：

输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
输出：32
示例 2：


输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
输出：23
 
提示：

树中节点数目在范围 [1, 2 * 104] 内
1 <= Node.val <= 105
1 <= low <= high <= 105
所有 Node.val 互不相同

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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  if (!root) {
    return 0
  }
  let res = 0
  if (root.val >= low && root.val <= high) {
    res += root.val
  }
  if (root.val > low) {
    res += rangeSumBST(root.left, low, high)
  }
  if (root.val < high) {
    res += rangeSumBST(root.right, low, high)
  }
  return res
}

write('algorithms: 938. 二叉搜索树的范围和', 'title')

const node1_1 = new TreeNode(10)
const node1_2 = new TreeNode(5)
const node1_3 = new TreeNode(15)
const node1_4 = new TreeNode(3)
const node1_5 = new TreeNode(7)
const node1_6 = new TreeNode(18)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5
node1_3.right = node1_6

write(rangeSumBST(node1_1, 7, 15)) // 32

// tag: 二叉树；遍历
