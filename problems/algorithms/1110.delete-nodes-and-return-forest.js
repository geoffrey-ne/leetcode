/**
 * [中等]1110. 删点成林
 * https://leetcode-cn.com/problems/delete-nodes-and-return-forest/
 * 
 * 
给出二叉树的根节点 root，树上每个节点都有一个不同的值。
如果节点值在 to_delete 中出现，我们就把该节点从树上删去，最后得到一个森林（一些不相交的树构成的集合）。
返回森林中的每棵树。你可以按任意顺序组织答案。

示例 1：

输入：root = [1,2,3,4,5,6,7], to_delete = [3,5]
输出：[[1,2,null,4],[6],[7]]

示例 2：

输入：root = [1,2,4,null,3], to_delete = [3]
输出：[[1,2,4]]
 
提示：

树中的节点数最大为 1000。
每个节点都有一个介于 1 到 1000 之间的值，且各不相同。
to_delete.length <= 1000
to_delete 包含一些从 1 到 1000、各不相同的值。

*/

/**
 * 我的解答
 *
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes1 = function (root, to_delete) {
  const res = [root]
  helper(root, null, to_delete, res)
  return res
}

function helper(node, parantNode, to_delete, res) {
  if (!node || to_delete.length === 0) {
    return
  }
  const index = to_delete.indexOf(node.val)
  if (index > -1) {
    to_delete.splice(index, 1)
    const indexOfRes = res.indexOf(node)
    if (indexOfRes > -1) {
      res.splice(indexOfRes, 1)
    }
    if (node.left) {
      res.push(node.left)
    }
    if (node.right) {
      res.push(node.right)
    }
    if (parantNode) {
      if (parantNode.left === node) {
        parantNode.left = null
      }
      if (parantNode.right === node) {
        parantNode.right = null
      }
    }
  }
  helper(node.left, node, to_delete, res)
  helper(node.right, node, to_delete, res)
}

/**
 * 官方解答
 *
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function (root, to_delete) {
  const toDeleteSet = new Set(to_delete)
  const roots = []
  dfs(root, true, toDeleteSet, roots)
  return roots
}

function dfs(node, isRoot, toDeleteSet, roots) {
  if (!node) {
    return null
  }
  const deleted = toDeleteSet.has(node.val)
  node.left = dfs(node.left, deleted, toDeleteSet, roots)
  node.right = dfs(node.right, deleted, toDeleteSet, roots)
  if (deleted) {
    return null
  } else {
    if (isRoot) {
      roots.push(node)
    }
    return node
  }
}

write('algorithms: 1110. 删点成林', 'title')

// tag: 二叉树；递归
