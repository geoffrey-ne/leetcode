/**
 * [中等]740. 删除并获得点数
 * https://leetcode-cn.com/problems/delete-and-earn/
 * 
 * 
给你一个整数数组 nums ，你可以对它进行一些操作。

每次操作中，选择任意一个 nums[i] ，删除它并获得 nums[i] 的点数。
之后，你必须删除每个等于 nums[i] - 1 或 nums[i] + 1 的元素。

开始你拥有 0 个点数。返回你能通过这些操作获得的最大点数。

示例 1：

输入：nums = [3,4,2]
输出：6
解释：
删除 4 获得 4 个点数，因此 3 也被删除。
之后，删除 2 获得 2 个点数。总共获得 6 个点数。
示例 2：

输入：nums = [2,2,3,3,3,4]
输出：9
解释：
删除 3 获得 3 个点数，接着要删除两个 2 和 4 。
之后，再次删除 3 获得 3 个点数，再次删除 3 获得 3 个点数。
总共获得 9 个点数。
 

提示：

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 104

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const hashMap = {}
  for (const val of nums) {
    hashMap[val] = typeof hashMap[val] === 'undefined' ? 1 : hashMap[val] + 1
  }
  const keys = Object.keys(hashMap).sort((n1, n2) => n1 - n2)
  let pre = Number(keys[0])
  let dp = hashMap[pre] * pre
  let res = [dp]
  for (let i = 1; i < keys.length; i++) {
    const cur = Number(keys[i])
    const curRes = hashMap[cur] * cur
    if (Math.abs(pre - cur) === 1) {
      res.push(Math.max(curRes + (res[i - 2] || 0), res[i - 1]))
    } else {
      res.push(res[i - 1] + curRes)
    }
    pre = cur
  }
  return res[res.length - 1]
}

write('algorithms: 740. 删除并获得点数', 'title')

write(deleteAndEarn([3, 4, 2])) // 6
write(deleteAndEarn([2, 2, 3, 3, 3, 4])) // 9

// tag: 数组;dp
