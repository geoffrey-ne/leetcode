/**
 * [中等]337. 打家劫舍 III
 * https://leetcode-cn.com/problems/house-robber-iii/
 * 
 * 
在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。

计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。

示例 1:

输入: [3,2,3,null,3,null,1]

     3
    / \
   2   3
    \   \ 
     3   1

输出: 7 
解释: 小偷一晚能够盗取的最高金额 = 3 + 3 + 1 = 7.
示例 2:

输入: [3,4,5,1,3,null,1]

     3
    / \
   4   5
  / \   \ 
 1   3   1

输出: 9
解释: 小偷一晚能够盗取的最高金额 = 4 + 5 = 9.

 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function (root, map = new Map()) {
  if (!root) {
    return 0
  }
  if (map.has(root)) {
    return map.get(root)
  }
  let withRoot = root.val
  if (root.left) {
    withRoot += rob(root.left.left, map) + rob(root.left.right, map)
  }
  if (root.right) {
    withRoot += rob(root.right.left, map) + rob(root.right.right, map)
  }
  const withoutRoot = rob(root.left, map) + rob(root.right, map)
  map.set(root, Math.max(withRoot, withoutRoot))
  return map.get(root)
}

write('algorithms: 337. 打家劫舍 III', 'title')

const node1_1 = new TreeNode(3)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(3)
const node1_5 = new TreeNode(1)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.right = node1_4
node1_3.right = node1_5

write(rob(node1_1)) // 7

const node2_1 = new TreeNode(3)
const node2_2 = new TreeNode(4)
const node2_3 = new TreeNode(5)
const node2_4 = new TreeNode(1)
const node2_5 = new TreeNode(3)
const node2_6 = new TreeNode(1)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_3.right = node2_6

write(rob(node2_1)) // 9

// tag: dp
