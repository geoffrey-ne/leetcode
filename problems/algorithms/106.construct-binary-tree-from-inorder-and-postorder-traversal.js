/**
 * [中等]106. 从中序与后序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * 
 * 
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const len = postorder.length
  if (len === 0) {
    return null
  } else if (len === 1) {
    return new TreeNode(postorder[0])
  }
  const node = new TreeNode(postorder[len - 1])
  const index = inorder.indexOf(node.val)
  node.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
  node.right = buildTree(inorder.slice(index + 1), postorder.slice(index, len - 1))
  return node
}

write('algorithms: 106. 从中序与后序遍历序列构造二叉树', 'title')

write(buildTree([3, 2, 1], [3, 2, 1])) // [1,2,null,3]
write(buildTree([4, 2, 5, 1, 6, 3, 7], [4, 5, 2, 6, 7, 3, 1])) // [1,2,3,4,5,6,7]
write(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])) // [3,9,20,null,null,15,7]

// tag: 树；遍历；递归
