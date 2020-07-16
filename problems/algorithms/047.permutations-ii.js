/**
 * [中等]47. 全排列 II
 * https://leetcode-cn.com/problems/permutations-ii/
 * 
给定一个可包含重复数字的序列，返回所有不重复的全排列。

示例:

输入: [1,1,2]
输出:
[
  [1,1,2],
  [1,2,1],
  [2,1,1]
]

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (nums.length <= 1) {
    return [nums]
  }
  const res = []
  nums.sort((n1, n2) => n1 - n2)
  helper([], nums, res)
  return res
}

function helper(cur, left, res) {
  if (left.length === 0) {
    res.push([...cur])
    return
  }
  for (let i = 0; i < left.length; i++) {
    if (i > 0 && left[i] === left[i - 1]) {
      continue
    }

    const num = left.splice(i, 1)[0]
    cur.push(num)
    helper(cur, left, res)
    cur.pop()
    left.splice(i, 0, num)
  }
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique1 = function (nums) {
  if (nums.length <= 1) {
    return [nums]
  }
  const dict = {}
  const keys = []
  nums.forEach((num) => {
    if (typeof dict[num] !== 'undefined') {
      dict[num]++
    } else {
      dict[num] = 1
      keys.push(num)
    }
  })
  keys.sort((n1, n2) => n1 - n2)
  const total = nums.length
  const res = []
  helper1(dict, keys, [], res, total)
  return res
}

function helper1(dict, keys, trace, res, total) {
  if (trace.length === total) {
    res.push([...trace])
    return
  }

  keys.forEach((num) => {
    if (dict[num] > 0) {
      trace.push(num)
      dict[num] -= 1
      helper1(dict, keys, trace, res, total)
      trace.pop()
      dict[num] += 1
    }
  })
}

write('algorithms: 47. 全排列 II', 'title')

write(permuteUnique([3, 3, 0, 3]))  // [[0,3,3,3],[3,0,3,3],[3,3,0,3],[3,3,3,0]]
write(permuteUnique([1, 1, 2]))
write(permuteUnique([1, 1, 2, 3]))
write(permuteUnique([-1, 2, -1, 2, 1, -1, 2, 1]))

// tag: 数组;回溯
