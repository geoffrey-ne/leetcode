/**
 * [中等]12. 整数转罗马数字
 * https://leetcode-cn.com/problems/integer-to-roman/
 * 
罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

1 I   11 XI
2 II  12 XII
3 III 13 XIII
4 IV  14 XIV
5 V   15 XV
6 VI  16 XVI
7 VII 17 XVII
8 VIII 18 XVIII
9 IX 19 XIX
10 X 20 XX

示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.

I             1
V             5
X             10
L             50
C             100
D             500
M             1000
 */

// int[] values = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
// String[] symbols = {"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

/**
 * 贪心算法
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  const symbols = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  let startIndex = 0
  let res = ''
  while (num > 0) {
    const index = findNearlest(num, values, startIndex)
    res += symbols[index]
    num -= values[index]
    startIndex = index
  }
  return res
}

function findNearlest(num, values, startIndex) {
  let i = startIndex
  for (; i < values.length && values[i] > num; i++) {}
  return i
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman1 = function (num) {
  let deep = 0
  let res = ''
  do {
    const curNum = num % 10
    const curMap = getCurMap(deep)
    res = curMap[curNum] + res

    deep++
    num = parseInt(num / 10)
  } while (num > 0)
  return res
}

const map = [
  ['I', 'V', 'X'],
  ['X', 'L', 'C'],
  ['C', 'D', 'M'],
  ['M', '', ''],
]

function getCurMap(deep) {
  const [cur1, cur5, cur10] = map[deep]
  return [
    '',
    `${cur1}`,
    `${cur1}${cur1}`,
    `${cur1}${cur1}${cur1}`,
    `${cur1}${cur5}`,
    `${cur5}`,
    `${cur5}${cur1}`,
    `${cur5}${cur1}${cur1}`,
    `${cur5}${cur1}${cur1}${cur1}`,
    `${cur1}${cur10}`,
  ]
}

write('algorithms: 12. 整数转罗马数字', 'title')

write(intToRoman(3)) // "III"
write(intToRoman(4)) // "IV"
write(intToRoman(9)) // "IX"
write(intToRoman(58)) // "LVIII"
write(intToRoman(1994)) // "MCMXCIV"
