/**
 * [中等]146. LRU 缓存机制
 * https://leetcode-cn.com/problems/lru-cache/
 * 
设计和构建一个“最近最少使用”缓存，该缓存会删除最近最少使用的项目。
缓存应该从键映射到值(允许你插入和检索特定键对应的值)，并在初始化时指定最大容量。
当缓存被填满时，它应该删除最近最少使用的项目。

它应该支持以下操作： 获取数据 get 和 写入数据 put 。

获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。
当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。

示例:

LRUCache cache = new LRUCache(2); // 缓存容量

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4

*/

function Node(key, val) {
  this.key = key
  this.val = val
  this.pre = null
  this.next = null
}

function DoubleList() {
  this.head = null
  this.tail = this.head
  this.length = 0
}

DoubleList.prototype.addFirst = function (node) {
  node.next = this.head
  if (this.head) {
    this.head.pre = node
  }
  this.head = node
  if (!this.tail) {
    this.tail = node
  }
  this.length++
}

DoubleList.prototype.remove = function (node) {
  if (!node) {
    return node
  }
  if (node === this.tail) {
    this.tail = node.pre
  }
  if (node === this.head) {
    this.head = node.next
  }
  const pre = node.pre
  const next = node.next
  if (pre) {
    pre.next = next
  }
  if (next) {
    next.pre = pre
  }

  node.pre = null
  node.next = null
  this.length--
  return node
}

DoubleList.prototype.removeLast = function () {
  return this.remove(this.tail)
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.map = new Map()
  this.cache = new DoubleList()
  this.capacity = capacity
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1
  }
  const val = this.map.get(key).val
  this.put(key, val)
  return val
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value)

  if (this.map.has(key)) {
    this.cache.remove(this.map.get(key))
    this.cache.addFirst(node)
    this.map.set(key, node)
  } else {
    if (this.cache.length === this.capacity) {
      const lastNode = this.cache.removeLast()
      this.map.delete(lastNode.key)
    }
    this.cache.addFirst(node)
    this.map.set(key, node)
  }
}

write('algorithms: 146. LRU 缓存机制', 'title')

const cache = new LRUCache(2) // 缓存容量

cache.put(1, 1)
cache.put(2, 2)
write(cache.get(1)) // 返回  1
cache.put(3, 3) // 该操作会使得密钥 2 作废
write(cache.get(2)) // 返回 -1 (未找到)
cache.put(4, 4) // 该操作会使得密钥 1 作废
write(cache.get(1)) // 返回 -1 (未找到)
write(cache.get(3)) // 返回  3
write(cache.get(4)) // 返回  4

const cache1 = new LRUCache(2) // 缓存容量

cache1.put(2, 1)
cache1.put(3, 2)
write(cache1.get(3)) // 2
write(cache1.get(2)) // 1
cache1.put(4, 3)
write(cache1.get(2)) // 1
write(cache1.get(3)) // -1
write(cache1.get(4)) // 3

// tag: 哈希链表
