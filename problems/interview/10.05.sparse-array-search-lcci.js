/**
 * [简单]面试题 10.05. 稀疏数组搜索
 * https://leetcode-cn.com/problems/sparse-array-search-lcci/
 * 
稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。

示例1:

 输入: words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ta"
 输出：-1
 说明: 不存在返回-1。
示例2:

 输入：words = ["at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""], s = "ball"
 输出：4
提示:

words的长度在[1, 1000000]之间

*/

/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var findString = function (words, s) {
  let left = 0
  let right = words.length - 1
  while (left <= right) {
    if (words[left] === s) {
      return left
    } else if (words[right] === s) {
      return right
    }

    const mid = Math.floor((left + right) / 2)
    let validMid = mid
    while (words[validMid] === '' && validMid > left) {
      validMid--
    }

    if (words[validMid] === s) {
      return validMid
    } else if (words[validMid] === '' || words[validMid] < s) {
      left = mid + 1
    } else {
      right = validMid - 1
    }
  }
  return -1
}

write('algorithms: 面试题 10.05. 稀疏数组搜索', 'title')

write(findString(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ta')) // -1
write(findString(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball')) // 4
write(
  findString(
    ['AX zEfzhxdXXbeCQOKa', 'aLRAEYPIZokU', 'giqyZpvcOHdfPpRqHAD', 'mhQf', 'uwIPRHFftk'],
    'btRVwblGdpLTtSLbjFzB'
  )
) // -1

// tag: 二分
