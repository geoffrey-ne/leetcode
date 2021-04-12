/**
 * [中等]508. 出现次数最多的子树元素和
 * https://leetcode-cn.com/problems/most-frequent-subtree-sum/
 * 
 * 
给你一个二叉树的根结点，请你找出出现次数最多的子树元素和。一个结点的「子树元素和」定义为以该结点为根的二叉树上所有结点的元素之和（包括结点本身）。

你需要返回出现次数最多的子树元素和。如果有多个元素出现的次数相同，返回所有出现次数最多的子树元素和（不限顺序）。

示例 1：
输入:

  5
 /  \
2   -3
返回 [2, -3, 4]，所有的值均只出现一次，以任意顺序返回所有值。

示例 2：
输入：

  5
 /  \
2   -5
返回 [2]，只有 2 出现两次，-5 只出现 1 次。

[2 -3 4] => [2 -3 4]
[2 -5 2] => 2

提示： 假设任意子树元素和均可以用 32 位有符号整数表示。

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
 * @return {number[]}
 */
var findFrequentTreeSum = function (root) {
  const hashMap = {}
  helper(root, hashMap)
  const counts = []
  let maxCount = 0
  Object.keys(hashMap).forEach((key) => {
    const curCount = hashMap[key]
    const numKey = Number(key)
    if (typeof counts[curCount] === 'undefined') {
      counts[curCount] = [numKey]
    } else {
      counts[curCount].push(numKey)
    }
    maxCount = Math.max(curCount, maxCount)
  })
  return counts[maxCount] || []
}

function helper(node, hashMap) {
  if (!node) {
    return 0
  }
  const leftSum = helper(node.left, hashMap)
  const rightSum = helper(node.right, hashMap)
  const sum = leftSum + rightSum + node.val
  hashMap[sum] = typeof hashMap[sum] === 'undefined' ? 1 : hashMap[sum] + 1
  return sum
}

write('algorithms: 508. 出现次数最多的子树元素和', 'title')

const node1_1 = new TreeNode(5)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(-3)

node1_1.left = node1_2
node1_1.right = node1_3

write(findFrequentTreeSum(node1_1)) // [2, -3, 4]

const node2_1 = new TreeNode(5)
const node2_2 = new TreeNode(2)
const node2_3 = new TreeNode(-5)

node2_1.left = node2_2
node2_1.right = node2_3

write(findFrequentTreeSum(node2_1)) // false

// tag: 树；
