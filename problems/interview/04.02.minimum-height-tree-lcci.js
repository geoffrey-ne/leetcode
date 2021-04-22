/**
 * [简单]面试题 04.02. 最小高度树
 * https://leetcode-cn.com/problems/minimum-height-tree-lcci/
 * 
 * 
给定一个有序整数数组，元素各不相同且按升序排列，编写一个算法，创建一棵高度最小的二叉搜索树。

示例:
给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

          0 
         / \ 
       -3   9 
       /   / 
     -10  5 

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums = [], start = 0, end = nums.length) {
  const len = end - start
  if (len <= 0) {
    return null
  } else if (len === 1) {
    return new TreeNode(nums[start])
  }
  const mid = Math.floor((start + end) / 2)
  const root = new TreeNode(nums[mid])
  root.left = sortedArrayToBST(nums, start, mid)
  root.right = sortedArrayToBST(nums, mid + 1, end)
  return root
}

write('algorithms: 面试题 04.02. 最小高度树', 'title')

write(sortedArrayToBST([-10, -3, 0, 5, 9])) // TreeNode

// tag: 二叉树
