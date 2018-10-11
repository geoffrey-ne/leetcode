/**
 * [★]236. Lowest Common Ancestor of a Binary Tree
 * finish: 2018-07-09
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor1 = function (root, p, q) {
  if (!root || p === root || q === root) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  return left || right;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var root = new TreeNode(3);
var child1 = new TreeNode(5),
  child2 = new TreeNode(1),
  child3 = new TreeNode(6),
  child4 = new TreeNode(2),
  child5 = new TreeNode(0),
  child6 = new TreeNode(8),
  child7 = new TreeNode(7),
  child8 = new TreeNode(4);

root.left = child1;
root.right = child2;

child1.left = child3;
child1.right = child4;

child2.left = child5;
child2.right = child6;

child4.left = child7;
child4.right = child8;

write('algorithms: 238. Lowest Common Ancestor of a Binary Tree', 'title');
write(lowestCommonAncestor(root, child1, child2));
// [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]
// 5
// 1
// => 3

function tree2Array(queue, list, p, q) {
  let isFindP = false, isFindQ = false;
  while (!isEmpty(queue) && !(isFindP && isFindQ)) {
    const curNode = queue.shift();
    isFindP = isFindP || curNode === p;
    isFindQ = isFindQ || curNode === q;
    if (curNode) {
      list.push(curNode);
      queue.push(curNode.left);
      queue.push(curNode.right);
    } else {
      list.push(null);
      queue.push(null);
      queue.push(null);
    }
  }
}

function isEmpty(queue) {
  return queue.length === 0 || queue.filter(item => item != null).length === 0
}

function lowestCommonAncestor(root, p, q) {
  const queue = [root], list = [];
  tree2Array(queue, list, p, q);
  let
    nodeBefore = p,
    nodeAfter = q,
    indexBefore = list.indexOf(p),
    indexAfter = list.indexOf(q);

  if (indexBefore > indexAfter) {
    [nodeBefore, nodeAfter] = [nodeAfter, nodeBefore];
    [indexBefore, indexAfter] = [indexAfter, indexBefore];
  }
  while (nodeBefore != nodeAfter) {
    indexAfter = Math.floor((indexAfter - 1) / 2);
    nodeAfter = list[indexAfter];
    if (indexBefore > indexAfter) {
      [nodeBefore, nodeAfter] = [nodeAfter, nodeBefore];
      [indexBefore, indexAfter] = [indexAfter, indexBefore];
    }
  }

  return nodeBefore;
}
