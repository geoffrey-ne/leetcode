/**
 * [简单]872. 叶子相似的树
 * https://leetcode-cn.com/problems/leaf-similar-trees/
 * 
 * 
请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

举个例子，如上图所示，给定一棵叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个根结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

示例 1：

     3               
   /   \
  5     1
 / \   / \
6   2 9   8
   / \
  7   4

     3
   /   \
  5     1
 / \   / \
6   7 4   2
         / \
        9   8

输入：root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
输出：true
示例 2：

输入：root1 = [1], root2 = [1]
输出：true
示例 3：

输入：root1 = [1], root2 = [2]
输出：false
示例 4：

输入：root1 = [1,2], root2 = [2,2]
输出：true
示例 5：

输入：root1 = [1,2,3], root2 = [1,3,2]
输出：false
 

提示：

给定的两棵树可能会有 1 到 200 个结点。
给定的两棵树上的值介于 0 到 200 之间。
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const seq1 = []
  if (root1) {
    dfs(root1, seq1)
  }

  const seq2 = []
  if (root2) {
    dfs(root2, seq2)
  }
  return seq1.toString() === seq2.toString()
}

const dfs = (node, seq) => {
  if (!node.left && !node.right) {
    seq.push(node.val)
  } else {
    if (node.left) {
      dfs(node.left, seq)
    }
    if (node.right) {
      dfs(node.right, seq)
    }
  }
}

write('algorithms: 872. 叶子相似的树', 'title')

/**
 * 
     3
   /   \
  5     1
 / \   / \
6   2 9   8
   / \
  7   4

     3
   /   \
  5     1
 / \   / \
6   7 4   2
         / \
        9   8
 */

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(5)
const node1_3 = new TreeNode(1)
const node1_4 = new TreeNode(6)
const node1_5 = new TreeNode(2)
const node1_6 = new TreeNode(9)
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

const node2_1 = new TreeNode(3)
const node2_2 = new TreeNode(5)
const node2_3 = new TreeNode(1)
const node2_4 = new TreeNode(6)
const node2_5 = new TreeNode(7)
const node2_6 = new TreeNode(4)
const node2_7 = new TreeNode(2)
const node2_8 = new TreeNode(9)
const node2_9 = new TreeNode(8)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_3.left = node2_6
node2_3.right = node2_7
node2_7.left = node2_8
node2_7.right = node2_9

write(leafSimilar(node1_1, node2_1)) // true

// tag: 二叉树；DFS
