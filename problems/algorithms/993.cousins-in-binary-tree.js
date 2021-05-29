/**
 * [简单]993. 二叉树的堂兄弟节点
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/
 * 
 * 
在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。

如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。

我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。

只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。

示例 1：

    1
   / \
  2   3
 /
4

输入：root = [1,2,3,4], x = 4, y = 3
输出：false
示例 2：

    1
   / \
  2   3
   \   \
    4   5

输入：root = [1,2,3,null,4,null,5], x = 5, y = 4
输出：true
示例 3：

    1
   / \
  2   3
   \
    4

输入：root = [1,2,3,null,4], x = 2, y = 3
输出：false

提示：

二叉树的节点数介于 2 到 100 之间。
每个节点的值都是唯一的、范围为 1 到 100 的整数。

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
  if (x === y) {
    return false
  }
  let flagX = false
  let flagY = false
  const queue = [root]
  let start = 0
  let end = 0
  let parentX = null
  let parentY = null
  while (start <= end) {
    let nextStart = end + 1
    for (let i = start; i <= end; i++) {
      const node = queue[i]
      if (!node) {
        queue.push(null)
        queue.push(null)
        continue
      }
      if (node.val === x) {
        flagX = true
        parentX = queue[Math.floor((i - 1) / 2)]
      }
      if (node.val === y) {
        flagY = true
        parentY = queue[Math.floor((i - 1) / 2)]
      }
      if (flagX && flagY) {
        return parentX !== parentY
      }
      queue.push(node.left)
      queue.push(node.right)
    }
    if (flagX || flagY) {
      return false
    }
    start = nextStart
    end = queue.length - 1
  }
  return false
}

var isCousins1 = function (root, x, y) {
  var arr = [root]
  while (arr.length > 0) {
    var len = arr.length
    while (len-- > 0) {
      var node = arr.shift()
      if (
        node.left != null &&
        node.right != null &&
        ((node.left.val == x && node.right.val == y) || (node.left.val == y && node.right.val == x))
      )
        return false
      if (node.left != null) arr.push(node.left)
      if (node.right != null) arr.push(node.right)
    }
    if (arr.find((a) => a.val == y) && arr.find((a) => a.val == x) != undefined) return true
  }
  return false
}

write('algorithms: 993. 二叉树的堂兄弟节点', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(5)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.right = node1_4
node1_3.right = node1_5

write(isCousins(node1_1, 2, 3)) // false
write(isCousins(node1_1, 4, 5)) // true
write(isCousins(node1_1, 5, 4)) // true
write(isCousins(node1_1, 3, 5)) // false

// tag: 二叉树；层级遍历
