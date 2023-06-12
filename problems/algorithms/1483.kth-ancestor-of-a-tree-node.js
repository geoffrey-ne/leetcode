/**
 * [困难]1483. 树节点的第 K 个祖先
 * https://leetcode-cn.com/problems/kth-ancestor-of-a-tree-node/
 * 
 * 
给你一棵树，树上有 n 个节点，按从 0 到 n-1 编号。树以父节点数组的形式给出，其中 parent[i] 是节点 i 的父节点。树的根节点是编号为 0 的节点。

树节点的第 k 个祖先节点是从该节点到根节点路径上的第 k 个节点。

实现 TreeAncestor 类：

TreeAncestor（int n， int[] parent） 对树和父数组中的节点数初始化对象。
getKthAncestor(int node, int k) 返回节点 node 的第 k 个祖先节点。如果不存在这样的祖先节点，返回 -1 。
 

示例 1：

      0
    /   \
   1     2
  / \   / \
 3   4 5   6

输入：
["TreeAncestor","getKthAncestor","getKthAncestor","getKthAncestor"]
[[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]

输出：
[null,1,0,-1]

解释：
TreeAncestor treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);

treeAncestor.getKthAncestor(3, 1);  // 返回 1 ，它是 3 的父节点
treeAncestor.getKthAncestor(5, 2);  // 返回 0 ，它是 5 的祖父节点
treeAncestor.getKthAncestor(6, 3);  // 返回 -1 因为不存在满足要求的祖先节点
 

提示：

1 <= k <= n <= 5 * 104
parent[0] == -1 表示编号为 0 的节点是根节点。
对于所有的 0 < i < n ，0 <= parent[i] < n 总成立
0 <= node < n
至多查询 5 * 104 次

*/

/**
 * 暴力法
 *
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor1 = function (n, parent) {
  this.parents = parent
}

/**
 * @param {number} node
 * @param {number} k
 * @return {number}
 */
TreeAncestor1.prototype.getKthAncestor = function (node, k) {
  while (k > 0 && node >= 0) {
    node = typeof this.parents[node] !== 'undefined' ? this.parents[node] : -1
    k--
  }
  return node >= 0 ? node : -1
}

/**
 * 倍增；Binary Lifting
 * 
 * 其实就是可以做预处理
 */
const LOG = 16
var TreeAncestor = function (n, parent) {
  ancestors = new Array(n).fill(0).map(() => new Array(LOG).fill(-1))
  for (let i = 0; i < n; i++) {
    ancestors[i][0] = parent[i]
  }
  for (let j = 1; j < LOG; j++) {
    for (let i = 0; i < n; i++) {
      if (ancestors[i][j - 1] !== -1) {
        ancestors[i][j] = ancestors[ancestors[i][j - 1]][j - 1]
      }
    }
  }
}

TreeAncestor.prototype.getKthAncestor = function (node, k) {
  for (let j = 0; j < LOG; j++) {
    if (((k >> j) & 1) !== 0) {
      node = ancestors[node][j]
      if (node === -1) {
        return -1
      }
    }
  }
  return node
}

write('algorithms: 1483. 树节点的第 K 个祖先', 'title')

/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */

var obj = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2])

write(obj.getKthAncestor(3, 1)) // 1
write(obj.getKthAncestor(5, 2)) // 0
write(obj.getKthAncestor(6, 3)) // -1

// tags: 树；倍增；Binary Lifting
