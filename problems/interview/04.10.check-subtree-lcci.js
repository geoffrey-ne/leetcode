/**
 * [中等]面试题 04.10. 检查子树
 * https://leetcode-cn.com/problems/check-subtree-lcci/
 * 
 * 
检查子树。你有两棵非常大的二叉树：T1，有几万个节点；T2，有几万个节点。设计一个算法，判断 T2 是否为 T1 的子树。

如果 T1 有这么一个节点 n，其子树与 T2 一模一样，则 T2 为 T1 的子树，也就是说，从节点 n 处把树砍断，得到的树与 T2 完全相同。

注意：此题相对书上原题略有改动。

示例1:

 输入：t1 = [1, 2, 3], t2 = [2]
 输出：true
示例2:

 输入：t1 = [1, null, 2, 4], t2 = [3, 2]
 输出：false
提示：

树的节点数目范围为[0, 20000]。

*/

/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val
  this.left = this.right = null
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
var checkSubTree = function (t1, t2, cache = new Map()) {
  if (!t1 && !t2) {
    return true
  } else if (!t1 || !t2) {
    return false
  }
  if (!cache.has(t1)) {
    cache.set(t1, new Map())
  }

  if (cache.get(t1).has(t2)) {
    return cache.get(t1).get(t2)
  }

  if (
    t1.val === t2.val &&
    checkSubTree(t1.left, t2.left, cache) &&
    checkSubTree(t1.right, t2.right, cache)
  ) {
    cache.get(t1).set(t2, true)
    return true
  }
  return checkSubTree(t1.left, t2, cache) || checkSubTree(t1.right, t2, cache)
}

write('algorithms: 面试题 04.10. 检查子树', 'title')

/**
 *      1
       / \
      2   3
 */

const node1_1 = new TreeNode(1)
const node1_2 = new TreeNode(2)
const node1_3 = new TreeNode(3)

node1_1.left = node1_2
node1_1.right = node1_3

write(checkSubTree(node1_1, node1_2)) // true

/**
 *    5
     / \
    3   6
   / \
  2   4
 /   
1
 */
const node2_1 = new TreeNode(5)
const node2_2 = new TreeNode(3)
const node2_3 = new TreeNode(6)
const node2_4 = new TreeNode(2)
const node2_5 = new TreeNode(4)
const node2_6 = new TreeNode(1)

node2_1.left = node2_2
node2_1.right = node2_3
node2_2.left = node2_4
node2_2.right = node2_5
node2_4.left = node2_6

write(checkSubTree(node2_1, node2_4)) // true
write(checkSubTree(node2_1, node1_2)) // false
write(checkSubTree(node2_1, node1_1)) // false

// tag: 二叉树；
