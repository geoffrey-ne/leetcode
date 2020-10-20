/**
 * [中等]105. 从前序与中序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 
 * 
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]
返回如下的二叉树：

    3
   / \
  9  20
    /  \
   15   7

     1
   /   \
  2     3
 / \  /  \
4   5 6   7
*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) {
    return null
  }
  if (preorder.length === 1 || inorder.length === 1) {
    return new TreeNode(preorder[0])
  }
  const node = new TreeNode(preorder[0])
  const rootIndexInInorder = inorder.indexOf(node.val)
  node.left = buildTree(
    preorder.slice(1, rootIndexInInorder + 1),
    inorder.slice(0, rootIndexInInorder)
  )
  node.right = buildTree(
    preorder.slice(rootIndexInInorder + 1),
    inorder.slice(rootIndexInInorder + 1)
  )
  return node
}

write('algorithms: 105. 从前序与中序遍历序列构造二叉树', 'title')

write(buildTree([1, 2, 3], [3, 2, 1])) // [1,2,null,3]
write(buildTree([1, 2, 4, 5, 3, 6, 7], [4, 2, 5, 1, 6, 3, 7])) // [1,2,3,4,5,6,7]
write(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])) // [3,9,20,null,null,15,7]

// tag: 树；遍历；递归
