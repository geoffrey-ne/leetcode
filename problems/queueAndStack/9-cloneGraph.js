/**
 * 克隆图：https://leetcode-cn.com/explore/learn/card/queue-stack/219/stack-and-dfs/884/
 */

/**
 * Definition for a Node.
 */

function Node(val, neighbors) {
  this.val = val
  this.neighbors = neighbors
}

const hashMap = new WeakMap()

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  // 无节点
  if (!node) {
    return node
  }

  // 单节点
  if (!node.neighbors || node.neighbors.length === 0) {
    return new Node(node.val, node.neighbors)
  }

  const cloneNode = new Node(node.val, [])

  hashMap.set(node, cloneNode)
  node.neighbors.forEach(neighbor => {
    if (hashMap.has(neighbor)) {
      hashMap.get(node).neighbors.push(hashMap.get(neighbor))
    } else {
      hashMap.get(node).neighbors.push(cloneGraph(neighbor))
    }
  })

  return cloneNode
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)

node1.neighbors = [node4, node2]
node2.neighbors = [node1, node3]
node3.neighbors = [node2, node4]
node4.neighbors = [node3, node1]

const newNode1 = cloneGraph(node1)

write('queueAndStack 9. cloneGraph', 'title')
