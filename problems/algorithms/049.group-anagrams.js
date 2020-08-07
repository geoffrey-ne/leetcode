/**
 * [中等]49. 字母异位词分组
 * https://leetcode-cn.com/problems/group-anagrams/
 * 
给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

示例:

输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
输出:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
说明：

所有输入均为小写字母。
不考虑答案输出的顺序。

      b
    |   |
e - a - t
    |   |
      n

 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const dicts = []
  for (let i = 0; i < strs.length; i++) {
    const dict = strToDictKey(strs[i])
    const index = find(dicts, dict)
    if (index >= 0) {
      dicts[index].res.push(strs[i])
    } else {
      dicts.push({
        key: dict,
        res: [strs[i]],
      })
    }
  }
  return dicts.map((item) => item.res)
}

function strToDictKey(str) {
  const dict = {}
  for (let i = 0; i < str.length; i++) {
    if (typeof dict[str[i]] !== 'undefined') {
      dict[str[i]] += 1
    } else {
      dict[str[i]] = 1
    }
  }
  return dict
}

function find(dicts, dict) {
  let index = -1
  for (let i = 0; i < dicts.length; i++) {
    if (isSameDict(dicts[i].key, dict)) {
      index = i
      break
    }
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

write('algorithms: 49. 字母异位词分组', 'title')

write(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
/**
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
 */

// tag: 数组
