/**
 * [中等]139. 单词拆分
 * https://leetcode-cn.com/problems/word-break/
 * 
 * 
给定一个非空字符串 s 和一个包含非空单词的列表 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

说明：

拆分时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入: s = "leetcode", wordDict = ["leet", "code"]
输出: true
解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
示例 2：

输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
     注意你可以重复使用字典中的单词。
示例 3：

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  wordDict.sort((w1, w2) => w2.length - w1.length)
  const memo = {}
  return helper(s, wordDict, memo)
}

function helper(subStr, wordDict, memo) {
  if (subStr.length === 0) {
    return true
  }
  if (typeof memo[subStr] !== 'undefined') {
    return memo[subStr]
  }
  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i]
    if (subStr.indexOf(word) === 0) {
      const nextStr = subStr.slice(word.length)
      const res = helper(nextStr, wordDict, memo)
      memo[nextStr] = res
      if (res) {
        return true
      }
    }
  }
  return false
}

write('algorithms: 139. 单词拆分', 'title')

// write(wordBreak('leetcode', ['leet', 'code'])) // true
// write(wordBreak('applepenapple', ['apple', 'pen'])) // true
// write(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])) // false

const a =
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
const arr = [
  'a',
  'aa',
  'aaa',
  'aaaa',
  'aaaaa',
  'aaaaaa',
  'aaaaaaa',
  'aaaaaaaa',
  'aaaaaaaaa',
  'aaaaaaaaaa',
]
write(wordBreak(a, arr)) // false
// tag: 回溯；DP；
