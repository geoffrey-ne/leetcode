/**
 * [简单]897. 递增顺序搜索树
 * https://leetcode-cn.com/problems/increasing-order-search-tree/
 * 
 * 
给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。

示例 1：

输入：root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
示例 2：


输入：root = [5,1,7]
输出：[1,null,5,null,7]

   5
 /   \
1     7

1
 \
  5
   \
    7

提示：

树中节点数的取值范围是 [1, 100]
0 <= Node.val <= 1000
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
 * 思路是先中序遍历，再重新创建
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST1 = function (root) {
  const res = []
  inOrder(root, res)
  if (res.length === 0) {
    return null
  }
  const head = new TreeNode(res[0])
  let p1 = head
  for (let i = 1; i < res.length; i++) {
    p1.right = new TreeNode(res[i])
    p1 = p1.right
  }
  return head
}

function inOrder(node, res) {
  if (!node) {
    return
  }
  inOrder(node.left, res)
  res.push(node.val)
  inOrder(node.right, res)
}

/**
 * 思路是遍历的同时改变节点指向
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const dummy = new TreeNode(-1)
  let tmp = dummy
  const inOrder = function (node) {
    if (!node) {
      return
    }
    inOrder(node.left)
    tmp.right = node
    node.left = null
    tmp = node
    inOrder(node.right)
  }
  inOrder(root)
  return dummy.right
}

write('algorithms: 897. 递增顺序搜索树', 'title')

// const node1_1 = new TreeNode(5)
// const node1_2 = new TreeNode(1)
// const node1_3 = new TreeNode(7)

// node1_1.left = node1_2
// node1_1.right = node1_3

// write(increasingBST(node1_1)) // 1 5 7

const node2_1 = new TreeNode(5)
const node2_2 = new TreeNode(3)
const node2_3 = new TreeNode(6)
const node2_4 = new TreeNode(2)
const node2_5 = new TreeNode(4)
const node2_6 = new TreeNode(8)
const node2_7 = new TreeNode(1)
const node2_8 = new TreeNode(7)
const node2_9 = new TreeNode(9)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_3.right = node2_6
node2_4.left = node2_7
node2_6.left = node2_8
node2_6.right = node2_9

write(increasingBST(node2_1)) // 1 2 3 4 5 6 7 8 9

// tag: 二叉树；中序遍历
