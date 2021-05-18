/**
 * [中等]1442. 形成两个异或相等数组的三元组数目
 * https://leetcode-cn.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 * 
 * 
给你一个整数数组 arr 。

现需要从数组中取三个下标 i、j 和 k ，其中 (0 <= i < j <= k < arr.length) 。

a 和 b 定义如下：

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
注意：^ 表示 按位异或 操作。

请返回能够令 a == b 成立的三元组 (i, j , k) 的数目。

示例 1：

输入：arr = [2,3,1,6,7]
输出：4
解释：满足题意的三元组分别是 (0,1,2), (0,2,2), (2,3,4) 以及 (2,4,4)
示例 2：

输入：arr = [1,1,1,1,1]
输出：10
示例 3：

输入：arr = [2,3]
输出：0
示例 4：

输入：arr = [1,3,5,7,9]
输出：3
示例 5：

输入：arr = [7,11,12,9,5,2,7,17,22]
输出：8
 

提示：

1 <= arr.length <= 300
1 <= arr[i] <= 10^8

*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function (arr, cache = {}) {
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i]
    for (let j = i + 1; j < arr.length; j++) {
      let b = arr[j]
      if (a === b) {
        res++
      }
      for (let k = j + 1; k < arr.length; k++) {
        b ^= arr[k]
        if (a === b) {
          res++
        }
      }
      a ^= arr[j]
    }
  }
  return res
}

// 本地重要的是需要推到出S[i] = S[k+1]
var countTriplets1 = function (arr) {
  const n = arr.length
  s = [0]
  for (const num of arr) {
    s.push(s[s.length - 1] ^ num)
  }

  const cnt = new Map(),
    total = new Map()
  let ans = 0
  for (let k = 0; k < n; k++) {
    if (cnt.has(s[k + 1])) {
      ans += cnt.get(s[k + 1]) * k - total.get(s[k + 1])
    }
    cnt.set(s[k], (cnt.get(s[k]) || 0) + 1)
    total.set(s[k], (total.get(s[k]) || 0) + k)
  }

  return ans
}

write('algorithms: 1442. 形成两个异或相等数组的三元组数目', 'title')

write(countTriplets([2, 3, 1, 6, 7])) // 4
write(countTriplets([1, 1, 1, 1, 1])) // 10
write(countTriplets([2, 3])) // 0
write(countTriplets([1, 3, 5, 7, 9])) // 3
write(countTriplets([7, 11, 12, 9, 5, 2, 7, 17, 22])) // 8

// tags: 位运算；异或
