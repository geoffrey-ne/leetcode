/**
 * [中等]面试题 10.02. 变位词组
 * https://leetcode-cn.com/problems/group-anagrams-lcci/
 * 
编写一种方法，对字符串数组进行排序，将所有变位词组合在一起。变位词是指字母相同，但排列不同的字符串。

注意：本题相对原题稍作修改

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"],
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dicts = []
  res = []
  for (const str of strs) {
    const dictIndex = findOrInsertDict(str, dicts)
    if (typeof res[dictIndex] === 'undefined') {
      res[dictIndex] = [str]
    } else {
      res[dictIndex].push(str)
    }
  }
  return res
}

function findOrInsertDict(str, dicts) {
  let index = -1
  let strDict = {}
  for (let i = 0; i < str.length; i++) {
    strDict[str[i]] = typeof strDict[str[i]] === 'undefined' ? 1 : strDict[str[i]] + 1
  }
  for (let i = 0; i < dicts.length; i++) {
    if (isSameDict(strDict, dicts[i])) {
      index = i
      break
    }
  }
  if (index === -1) {
    return dicts.push(strDict) - 1
  }
  return index
}

function isSameDict(d1, d2) {
  const keys1 = Object.keys(d1)
  const keys2 = Object.keys(d2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i]
    if (d1[key] !== d2[key]) {
      return false
    }
  }
  return true
}

// 排序版
var groupAnagrams = function (strs) {
  let map = new Map()
  strs.forEach((ele) => {
    let sortStr = ele.split('').sort().join('')
    map.get(sortStr) ? map.get(sortStr).push(ele) : map.set(sortStr, [ele])
  })

  return [...map.values()]
}

write('algorithms: 面试题 10.02. 变位词组', 'title')

write(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// tag: 数组
