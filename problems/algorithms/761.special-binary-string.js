/**
 * [困难]761. 特殊的二进制序列
 * https://leetcode-cn.com/problems/special-binary-string/
 * 
特殊的二进制序列是具有以下两个性质的二进制序列：

- 0 的数量与 1 的数量相等。
- 二进制序列的每一个前缀码中 1 的数量要大于等于 0 的数量。
给定一个特殊的二进制序列 S，以字符串形式表示。
定义一个操作 为首先选择 S 的两个连续且非空的特殊的子串，然后将它们交换。
（两个子串为连续的当且仅当第一个子串的最后一个字符恰好为第二个子串的第一个字符的前一个字符。)

在任意次数的操作之后，交换后的字符串按照字典序排列的最大的结果是什么？

示例 1:

输入: S = "11011000"
11011000

输出: "11100100"
解释:
将子串 "10" （在S[1]出现） 和 "1100" （在S[3]出现）进行交换。
这是在进行若干次操作后按字典序排列最大的结果。
说明:

S 的长度不超过 50。
S 保证为一个满足上述定义的特殊 的二进制序列。

方便理解：如果吧1比作(，把0比作)
那么：
- 11011000 相当于
- (()(()))

交换的要求就可以理解为相邻且合法的括号

 */

/**
 * 分治解法
 *
 * @param {*} s
 * @returns
 */
var makeLargestSpecial1 = function (s) {
  if (s.length <= 2) {
    return s
  }
  let cnt = 0,
    left = 0
  const subs = []
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '1') {
      ++cnt
    } else {
      --cnt
      if (cnt === 0) {
        // 找到合法的括号时，扒开外层括号，将内层排序
        subs.push('1' + makeLargestSpecial(s.substring(left + 1, i)) + '0')
        left = i + 1
      }
    }
  }
  // 然后外层整体排序
  subs.sort().reverse()
  return subs.join('')
}

/**
 * 构造解法
 *
 * @param {string} s
 * @return {string}
 */
function makeLargestSpecial(s) {
  const list = new Array()
  for (let i = 0, j = 0, k = 0; i < s.length; i++) {
    k += s[i] == '1' ? 1 : -1
    if (k == 0) {
      list.push('1' + makeLargestSpecial(s.substring(j + 1, i)) + '0')
      j = i + 1
    }
  }
  list.sort((a, b) => (b + a).localeCompare(a + b))
  return [...list].join('')
}

write('algorithms: 761. 特殊的二进制序列', 'title')

write(makeLargestSpecial('11011000')) // 11100100

// tag: 字符串；二进制；分治；构造
