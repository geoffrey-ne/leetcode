/**
 * [中等]90. 子集 II
 * https://leetcode-cn.com/problems/subsets-ii/
 * 
 * 
给定一个可能包含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
说明：解集不能包含重复的子集。
示例:
输入: [1,2,2]
输出:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]

[1, 2, 2, 4]

[1]
[2]
[3]
[4]
[1, 2]
[1, 4]
[2, 4]
[1, 2, 2]
[1, 2, 4]
[1, 2, 2, 4]

1
2 4
4 2

 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (nums.length === 0) {
    return [[]]
  }
  const hashMap = {}
  for (let i of nums) {
    hashMap[i] = hashMap[i] ? hashMap[i] + 1 : 1
  }
  const res = [[]]
  Object.keys(hashMap).forEach((num) => {
    const resCount = res.length
    for (let i = 0; i < resCount; i++) {
      let clone = [...res[i]]
      for (let j = 0; j < hashMap[num]; j++) {
        clone = [...clone, num]
        res.push(clone)
      }
    }
  })
  return res
}

write('algorithms: 子集 II', 'title')

write(subsetsWithDup([1, 2, 3]))
write(subsetsWithDup([1, 2, 2]))

// tag: 数组；子集
