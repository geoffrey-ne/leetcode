/**
 * [简单]783. 二叉搜索树节点最小距离
 * https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes/
 * 
 * 
 * 注意：本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/ 相同
给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。

示例：

输入: [4,2,6,1,3]

          4
         / \
        2   6
       / \ 
      1   3 

输出: 1


[90,69,null,49,89,null,52]

        90
       /
      69
     /  \
   49    89
    \
     52

输出: 1

 */

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * 递归
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST1 = function (root) {
  if (!root) {
    return 0
  }
  const res = [Number.MAX_SAFE_INTEGER]
  helper(root, res)
  return res[0]
}

function helper(node, res) {
  let minVal = node.val
  let maxVal = node.val
  if (node.left) {
    const [minValInChild, maxValInChild] = helper(node.left, res)
    res[0] = Math.min(Math.abs(node.val - maxValInChild), res[0])
    minVal = minValInChild
  }
  if (node.right) {
    const [minValInChild, maxValInChild] = helper(node.right, res)
    res[0] = Math.min(Math.abs(node.val - minValInChild), res[0])
    maxVal = maxValInChild
  }
  return [minVal, maxVal]
}

/**
 * 中序遍历
 *
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1
  const dfs = (root) => {
    if (root === null) {
      return
    }
    dfs(root.left)
    if (pre == -1) {
      pre = root.val
    } else {
      ans = Math.min(ans, root.val - pre)
      pre = root.val
    }
    dfs(root.right)
  }
  dfs(root)
  return ans
}

write('algorithms: 783. 二叉搜索树节点最小距离', 'title')

/**
 [1,null,5,3]

  1
    \
    5
    /
  3
 */

/**
 * 
[96,12,null,null,13,null,52,29]

        96
       /
      12
        \
         13
          \
           52
          /
        29
*/

const node3_1 = new TreeNode(96)
const node3_2 = new TreeNode(12)
const node3_3 = new TreeNode(13)
const node3_4 = new TreeNode(52)
const node3_5 = new TreeNode(29)

node3_1.left = node3_2
node3_2.right = node3_3
node3_3.right = node3_4
node3_4.left = node3_5

write(minDiffInBST(node3_1)) // 1

/**
 * 
[90,69,null,49,89,null,52]

        90
       /
      69
     /  \
   49    89
    \
     52
*/

const node2_1 = new TreeNode(90)
const node2_2 = new TreeNode(69)
const node2_3 = new TreeNode(49)
const node2_4 = new TreeNode(89)
const node2_5 = new TreeNode(52)

node2_1.left = node2_2
node2_2.left = node2_3
node2_2.right = node2_4
node2_3.right = node2_5

write(minDiffInBST(node2_1)) // 1

const node1_1 = new TreeNode(4)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(6)
const node1_4 = new TreeNode(1)
const node1_5 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3
node1_2.left = node1_4
node1_2.right = node1_5

write(minDiffInBST(node1_1)) // 1

// tag: 树；递归；中序遍历
