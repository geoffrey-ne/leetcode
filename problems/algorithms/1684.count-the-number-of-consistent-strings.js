/**
 * [简单]1684. 统计一致字符串的数目
 * https://leetcode-cn.com/problems/count-the-number-of-consistent-strings/
 * 
 * 
给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。

请你返回 words 数组中 一致字符串 的数目。


示例 1：

输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
输出：2
解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
示例 2：

输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
输出：7
解释：所有字符串都是一致的。
示例 3：

输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
输出：4
解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。
 

提示：

1 <= words.length <= 104
1 <= allowed.length <= 26
1 <= words[i].length <= 10
allowed 中的字符 互不相同 。
words[i] 和 allowed 只包含小写英文字母。

*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  const dict = new Set(allowed.split(''))
  let res = 0
  for (const word of words) {
    let satisfy = true
    for (let i = 0; i < word.length; i++) {
      if (!dict.has(word[i])) {
        satisfy = false
        break
      }
    }
    if (satisfy) res++
  }
  return res
}

write('algorithms: 1684. 统计一致字符串的数目', 'title')

write(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])) // 2
write(countConsistentStrings('abc', ['a', 'b', 'c', 'ab', 'ac', 'bc', 'abc'])) // 7
write(countConsistentStrings('cad', ['cc', 'acd', 'b', 'ba', 'bac', 'bad', 'ac', 'd'])) // 4

// tags:
