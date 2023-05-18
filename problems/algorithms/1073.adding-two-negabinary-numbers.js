/**
 * [中等]1073. 负二进制数相加
 * https://leetcode-cn.com/problems/adding-two-negabinary-numbers/
 * 
 * 
给出基数为 -2 的两个数 arr1 和 arr2，返回两数相加的结果。

数字以 数组形式 给出：数组由若干 0 和 1 组成，按最高有效位到最低有效位的顺序排列。例如，arr = [1,1,0,1] 表示数字 (-2)^3 + (-2)^2 + (-2)^0 = -3。
数组形式 中的数字 arr 也同样不含前导零：即 arr == [0] 或 arr[0] == 1。

返回相同表示形式的 arr1 和 arr2 相加的结果。两数的表示形式为：不含前导零、由若干 0 和 1 组成的数组。

示例 1：

输入：arr1 = [1,1,1,1,1], arr2 = [1,0,1]
输出：[1,0,0,0,0]
解释：arr1 表示 11，arr2 表示 5，输出表示 16 。
示例 2：

输入：arr1 = [0], arr2 = [0]
输出：[0]
示例 3：

输入：arr1 = [0], arr2 = [1]
输出：[1]
 

提示：

1 <= arr1.length, arr2.length <= 1000
arr1[i] 和 arr2[i] 都是 0 或 1
arr1 和 arr2 都没有前导0

*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var addNegabinary = function (arr1, arr2) {
  const ans = [0, 0, 0]
  for (let i = arr1.length - 1, j = arr2.length - 1; i >= 0 || j >= 0; i--, j--) {
    const cur1 = arr1[i] || 0
    const cur2 = arr2[j] || 0
    let sum = cur1 + cur2 + ans[2]
    let curRes = [0, 0, 0]
    while (sum > 1) {
      if (curRes[1] > 0) {
        curRes[1] -= 1
      } else {
        curRes[0] += 1
        curRes[1] += 1
      }
      sum -= 2
    }
    ans[2] = sum
    ans[1] += curRes[1]
    ans[0] += curRes[0]
    if (ans[0] > 0 && ans[1] > 1) {
      ans[0] -= 1
      ans[1] -= 2
    }
    ans.unshift(0)
  }
  while (ans[0] === 0 && ans.length > 1) {
    ans.shift()
  }
  return ans
}

write('algorithms: 1073. 负二进制数相加', 'title')

write(addNegabinary([1, 1, 1, 1, 1], [1, 0, 1])) // [1,0,0,0,0]
write(addNegabinary([1, 0, 1, 0, 1], [1, 0, 1])) // [1 1 0 1 1 1 0]
write(addNegabinary([0], [0])) // [0]
write(addNegabinary([0], [1])) // [1]

// tag:
