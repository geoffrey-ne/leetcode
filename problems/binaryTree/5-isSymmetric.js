/**
 * 对称二叉树：https://leetcode-cn.com/leetbook/read/data-structure-binary-tree/xoxzgv/
 * 
 * 给定一个二叉树，检查它是否是镜像对称的。
 * 
例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  return helper(root.left, root.right)
}

function helper(p, q) {
  if (!p && !q) {
    return true
  } else if (!p || !q) {
    return false
  }
  return p.val === q.val && helper(p.left, q.right) && helper(p.right, q.left)
}

write('algorithms: 对称二叉树', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_2.left = node1_3

/**
 *    1
 *   2
 *  3
 */

write(isSymmetric(node1_1)) // false

const node2_1 = new TreeNode(1)
const node2_2 = new TreeNode(4)
const node2_3 = new TreeNode(3)
const node2_4 = new TreeNode(2)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4

/**
 *     1
 *   4   3
 *  2
 *
 */

write(isSymmetric(node2_1)) // false

/**
 *  1
   / \
  2   2
 / \ / \
3  4 4  3
 */

const node3_1 = new TreeNode(1)
const node3_2 = new TreeNode(2)
const node3_3 = new TreeNode(2)
const node3_4 = new TreeNode(3)
const node3_5 = new TreeNode(4)
const node3_6 = new TreeNode(4)
const node3_7 = new TreeNode(3)

node3_1.left = node3_2
node3_1.right = node3_3
node3_2.left = node3_4
node3_2.right = node3_5
node3_3.left = node3_6
node3_3.right = node3_7

write(isSymmetric(node3_1)) // true

/**
 *  1
   / \
  2   2
 / \ / \
   3 3 
 */

const node4_1 = new TreeNode(1)
const node4_2 = new TreeNode(2)
const node4_3 = new TreeNode(2)
const node4_4 = new TreeNode(3)
const node4_5 = new TreeNode(3)

node4_1.left = node4_2
node4_1.right = node4_3
node4_2.right = node4_4
node4_3.left = node4_5

write(isSymmetric(node4_1)) // true
