/**
 * [简单]653. 两数之和 IV - 输入 BST
 * https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst/
 * 
 * 
给定一个二叉搜索树 root 和一个目标结果 k，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。

示例 1：
    5
   /  \ 
  3    6
 / \    \
2   4    7

输入: root = [5,3,6,2,4,null,7], k = 9
输出: true
示例 2：
    5
   /  \ 
  3    6
 / \    \
2   4    7

输入: root = [5,3,6,2,4,null,7], k = 28
输出: false
 
提示:

二叉树的节点个数的范围是  [1, 104].
-104 <= Node.val <= 104
root 为二叉搜索树
-105 <= k <= 105

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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const set = new Set()
  const helper = (root, k) => {
    if (!root) {
      return false
    }
    if (set.has(k - root.val)) {
      return true
    }
    set.add(root.val)
    return helper(root.left, k) || helper(root.right, k)
  }
  return helper(root, k)
}

/**
 * 中序遍历BST会得到一个升序列表，然后用双指针，根据和的大小，确定移动左边还是右边得到结果
 */
var findTarget1 = function (root, k) {
  const list = []
  const inorderTraversal = (node) => {
    if (!node) {
      return
    }
    inorderTraversal(node.left)
    list.push(node.val)
    inorderTraversal(node.right)
  }
  inorderTraversal(root)
  let left = 0,
    right = list.length - 1
  while (left < right) {
    if (list[left] + list[right] === k) {
      return true
    }
    if (list[left] + list[right] < k) {
      left++
    } else {
      right--
    }
  }
  return false
}

write('algorithms: 653. 两数之和 IV - 输入 BST', 'title')

const node1_1 = new TreeNode(5)
const node1_2 = new TreeNode(3)
const node1_3 = new TreeNode(6)
const node1_4 = new TreeNode(2)
const node1_5 = new TreeNode(4)
const node1_6 = new TreeNode(7)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5
node1_3.right = node1_6

write(findTarget(node1_1, 9)) // true
write(findTarget(node1_1, 28)) // false
write(findTarget(node1_1, 10)) // true

// tag: 树；BST；中序遍历
