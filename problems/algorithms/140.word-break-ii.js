/**
 * [困难]140. 单词拆分 II
 * https://leetcode-cn.com/problems/word-break-ii/
 * 
 * 
给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。

说明：

分隔时可以重复使用字典中的单词。
你可以假设字典中没有重复的单词。
示例 1：

输入:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
输出:
[
  "cats and dog",
  "cat sand dog"
]
示例 2：

输入:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
输出:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
解释: 注意你可以重复使用字典中的单词。
示例 3：

输入:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
输出:
[]

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  wordDict.sort((w1, w2) => w2.length - w1.length)
  const memo = {}
  helper(s, wordDict, memo)
  console.log(memo)
  return (memo[s] || []).map((arr) => arr.join(' '))
}

function helper(subStr, wordDict, memo) {
  if (subStr.length === 0 || typeof memo[subStr] !== 'undefined') {
    return
  }
  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i]
    if (subStr.indexOf(word) === 0) {
      const nextStr = subStr.slice(word.length)
      if (nextStr === '') {
        memo[subStr] = [[word]]
      } else {
        helper(nextStr, wordDict, memo)
        memo[subStr] = memo[subStr] || []
        if (memo[nextStr]) {
          memo[nextStr].forEach((i) => memo[subStr].push([word, ...i]))
        }
      }
    }
  }
}

write('algorithms: 140. 单词拆分 II', 'title')

write(wordBreak('aaaaaaa', ['aaaa', 'aaa']))
write(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))
write(wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']))
write(wordBreak('leetcode', ['leet', 'code']))
write(wordBreak('applepenapple', ['apple', 'pen']))
write(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']))

// const a =
//   'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
// const arr = [
//   'a',
//   'aa',
//   'aaa',
//   'aaaa',
//   'aaaaa',
//   'aaaaaa',
//   'aaaaaaa',
//   'aaaaaaaa',
//   'aaaaaaaaa',
//   'aaaaaaaaaa',
// ]
// write(wordBreak(a, arr)) // false
// tag: 回溯；DP；
