/**
 * [中等]面试题 08.04. 幂集
 * https://leetcode-cn.com/problems/power-set-lcci/
 * 
幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

说明：解集不能包含重复的子集。

示例:

 输入： nums = [1,2,3]
 输出：
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]]
  for (let i = 0; i < nums.length; i++) {
    res = res.concat([...res].map((item) => [...item, nums[i]]))
  }
  return res
}

write('algorithms: 面试题 08.04. 幂集', 'title')

write(subsets([1, 2, 3]))
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

// tag: 数组
