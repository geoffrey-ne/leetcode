/**
 * [困难]42. 接雨水
 * https://leetcode-cn.com/problems/trapping-rain-water/
 * 

给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。

上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢 Marcos 贡献此图。

       |
   |   || |
_|_||_||||||

示例:

输入: [0,1,0,2,1,0,1,3,2,1,2,1]
输出: 6

0 + [0,1,0,2,1,0,1,3,2,1,2,1]
1 + [2,1,0,1,3,2,1,2,1]
1 + 4 + [3,2,1,2,1]

 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let startIndex = 0
  while (startIndex < height.length && height[startIndex] === 0) {
    startIndex++
  }
  if (startIndex < height.length) {
    return helper(height, startIndex, 0)
  }
  return 0
}

function helper(height, startIndex, count) {
  const leftHeight = height[startIndex]
  if (leftHeight === 0 || startIndex >= height.length - 2) {
    return count
  }

  // 紧挨着的柱子比现在的高，当前柱子无意义
  if (height[startIndex + 1] >= leftHeight) {
    return helper(height, startIndex + 1, count)
  }

  // 和紧挨着的柱子无法存水，所以+2
  let p = startIndex + 2
  let maxHeightLowerThanLeftHeightIndex = p
  let maxHeightLowerThanLeftHeight = 0
  while (p < height.length && height[p] < leftHeight) {
    if (maxHeightLowerThanLeftHeight < height[p]) {
      maxHeightLowerThanLeftHeight = height[p]
      maxHeightLowerThanLeftHeightIndex = p
    }
    p++
  }
  if (p === height.length) {
    // 没有找到比左边一样或者更高的柱子，则根据次高柱子计算
    p = maxHeightLowerThanLeftHeightIndex
  }

  // 总蓄水量 - 柱子占用的数量
  const usefulHieght = Math.min(leftHeight, height[p])
  let curCount = (p - startIndex - 1) * usefulHieght
  for (let i = startIndex + 1; i < p; i++) {
    curCount -= Math.min(height[i], usefulHieght)
  }
  return helper(height, p, curCount + count)
}

write('algorithms: 42. 接雨水', 'title')

write(trap([2, 0, 2])) // 2
write(trap([4, 9, 4, 5, 3, 2])) // 1
write(trap([5, 4, 1, 2])) // 1
write(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])) // 6

// tag: 数组

/**
 * 
123 i
321 j

i 0 j 0 = 0
i 0 j 1 = 1
i 1 j 0 = 1
i 1 j 1 = 2
    3
   2
  1
   6
  4
 2
  9
 6
3    
39483
 */

function test(str1, str2) {
  const resArr = []
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      const mul = (str1[i] - '0') * (str2[j] - '0')
      addRes(resArr, i + j, mul)
    }
  }
  console.log(resArr)
  return arrToString(resArr)
}

function addRes(resArr, index, num) {
  if (num < 10) {
    addResLess10(resArr, index, num)
  } else {
    addResLess10(resArr, index, num % 10)
    addResLess10(resArr, index + 1, Math.floor(num / 10))
  }
}

function addResLess10(resArr, index, num) {
  if (typeof resArr[index] === 'undefined') {
    resArr[index] = [num]
  } else {
    resArr[index].push(num)
  }
}

function arrToString(arr) {
  let jinwei = 0
  let res = ''
  arr.forEach((list) => {
    let sum = 0
    list.forEach((num) => {
      sum += num
    })
    sum += jinwei
    res = `${sum % 10}${res}`
    jinwei = Math.floor(sum / 10)
  })
  return res
}
