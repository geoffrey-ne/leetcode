/**
 * [中等]179. 最大数
 * https://leetcode-cn.com/problems/largest-number/
 * 
 * 
给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。

注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。

示例 1：

输入：nums = [10,2]
输出："210"
示例 2：

输入：nums = [3,30,34,5,9]
输出："9534330"
示例 3：

输入：nums = [1]
输出："1"
示例 4：

输入：nums = [10]
输出："10"
 

提示：

1 <= nums.length <= 100
0 <= nums[i] <= 109

*/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber1 = function (nums) {
  const arr = new Array(10).fill(0).map((item) => [])
  for (const value of nums) {
    const index = getFirst(value)
    fillArray(value, arr[index])
  }
  let res = ''
  for (let i = arr.length - 1; i >= 0; i--) {
    const curArr = arr[i]
    for (let j = curArr.length - 1; j >= 0; j--) {
      res += curArr[j]
    }
  }
  return res.indexOf('0') === 0 ? '0' : res
}

function getFirst(num) {
  while (num >= 10) {
    num = Math.floor(num / 10)
  }
  return num
}

function fillArray(num, curArr) {
  for (let i = 0; i < curArr.length; i++) {
    if (!isGte(num, curArr[i])) {
      if (i === 0) {
        curArr.unshift(num)
      } else {
        curArr.splice(i, 0, num)
      }
      return
    }
  }
  curArr.push(num)
}

function isGte(n1, n2) {
  let strN1 = n1.toString()
  let strN2 = n2.toString()
  if (strN1.length === strN2.length) {
    return n1 >= n2
  } else {
    return strN1 + strN2 >= strN2 + strN1
  }
}

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const arr = [nums[0].toString()]
  for (let i = 1; i < nums.length; i++) {
    const strNum = nums[i].toString()
    let j = 0
    for (; j < arr.length; j++) {
      if (strNum + arr[j] >= arr[j] + strNum) {
        arr.splice(j, 0, strNum)
        break
      }
    }
    if (j === arr.length) {
      arr.push(strNum)
    }
  }
  let res = ''
  for (const value of arr) {
    res += value
  }
  return res.indexOf('0') === 0 ? '0' : res
}

write('algorithms: 179. 最大数', 'title')

write(largestNumber([0, 0])) // '0'
write(largestNumber([1, 16, 128])) // '161281'
write(largestNumber([10, 2])) // '210'
write(largestNumber([3, 30, 34, 5, 9])) // '9534330'
write(largestNumber([1])) // '1'

// tag: 数组；快排
