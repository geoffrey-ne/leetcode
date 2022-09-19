/**
 * [中等]652. 寻找重复的子树
 * https://leetcode-cn.com/problems/find-duplicate-subtrees/
 * 
 * 
给定一棵二叉树 root，返回所有重复的子树。

对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

如果两棵树具有相同的结构和相同的结点值，则它们是重复的。

 

示例 1：

   1
 2  3
4  2 4
  4
输入：root = [1,2,3,4,null,2,4,null,null,4]
输出：[[2,4],[4]]
示例 2：



输入：root = [2,1,1]
输出：[[1]]
示例 3：



输入：root = [2,2,2,3,null,3,null]
输出：[[2,3],[3]]
 

提示：

树中的结点数在[1,10^4]范围内。
-200 <= Node.val <= 200

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const seen = new Map()
  const repeat = new Set()
  const dfs = (node) => {
    if (!node) {
      return ''
    }
    let sb = ''
    sb += node.val
    sb += '('
    sb += dfs(node.left)
    sb += ')('
    sb += dfs(node.right)
    sb += ')'
    if (seen.has(sb)) {
      repeat.add(seen.get(sb))
    } else {
      seen.set(sb, node)
    }
    return sb
  }
  dfs(root)
  return [...repeat]
}

write('algorithms: 652. 寻找重复的子树', 'title')

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)
const node1_4 = new TreeNode(4)
const node1_5 = new TreeNode(2)
const node1_6 = new TreeNode(4)
const node1_7 = new TreeNode(4)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_3.left = node1_5
node1_3.right = node1_6
node1_5.left = node1_7

write(findDuplicateSubtrees(node1_1)) // [node1_2, node1_4]

const node2_1 = new TreeNode(2)
const node2_2 = new TreeNode(1)
const node2_3 = new TreeNode(1)

node2_1.left = node2_2
node2_1.right = node2_3

write(findDuplicateSubtrees(node2_1)) // [node2_2]

const node3_1 = new TreeNode(2)
const node3_2 = new TreeNode(2)
const node3_3 = new TreeNode(2)
const node3_4 = new TreeNode(3)
const node3_5 = new TreeNode(3)

node3_1.left = node3_2
node3_1.right = node3_3
node3_2.left = node3_4
node3_3.left = node3_5

write(findDuplicateSubtrees(node3_1)) // [node3_2, node3_4]

// tag: 树；序列化
// 树的序列化参照：
// - https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
// - https://leetcode.cn/problems/xu-lie-hua-er-cha-shu-lcof/
