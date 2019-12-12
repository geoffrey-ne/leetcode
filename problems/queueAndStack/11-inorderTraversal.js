/**
 * 二叉树中序遍历：https://leetcode-cn.com/explore/learn/card/queue-stack/219/stack-and-dfs/887/
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
var inorderTraversal = function(root) {
  const res = []
  helper(root, res)
  return res
}

var helper = function(node, res) {
  if (!node) {
    return
  }

  if (node.left) {
    helper(node.left, res)
  }
  res.push(node.val)
  helper(node.right, res)
}

var inorderTraversal1 = function(root) {
  if (!root) {
    return
  }
  const stack = []
  const res = []
  let curNode = root

  while (curNode || stack.length > 0) {
    while (curNode) {
      stack.push(curNode)
      curNode = curNode.left
    }
    curNode = stack.pop()
    res.push(curNode.val)
    curNode = curNode.right
  }
  return res
}

write('queueAndStack 11. inorderTraversal', 'title')

const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)

node1.right = node2
node2.left = node3

write(inorderTraversal1(node1)) // [1, 3, 2]
