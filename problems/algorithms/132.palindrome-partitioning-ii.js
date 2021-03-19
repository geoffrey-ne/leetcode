/**
 * [困难]132. 分割回文串 II
 * https://leetcode-cn.com/problems/palindrome-partitioning-ii/
 * 
 * 
给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是回文。

返回符合要求的 最少分割次数 。

示例 1：

输入：s = "aab"
输出：1
解释：只需一次分割就可将 s 分割成 ["aa","b"] 这样两个回文子串。
示例 2：

输入：s = "a"
输出：0
示例 3：

输入：s = "ab"
输出：1
 

提示：

1 <= s.length <= 2000
s 仅由小写英文字母组成

abba aaa b

a bbaa aa b
a b baaaab

a b 

a b baaaab

a b baaaab

*/

/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {
  const len = s.length
  if (len === 0 || len === 1) {
    return 0
  }
  let res = [s[0]]
  for (let i = 1; i < len; i++) {}
}

write('algorithms: 132. 分割回文串 II', 'title')

// tag: DP
