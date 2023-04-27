/**
 * [中等]1048. 最长字符串链
 * https://leetcode-cn.com/problems/longest-string-chain/
 * 
 * 
给出一个单词数组 words ，其中每个单词都由小写英文字母组成。

如果我们可以 不改变其他字符的顺序 ，在 wordA 的任何地方添加 恰好一个 字母使其变成 wordB ，那么我们认为 wordA 是 wordB 的 前身 。

例如，"abc" 是 "abac" 的 前身 ，而 "cba" 不是 "bcad" 的 前身
词链是单词 [word_1, word_2, ..., word_k] 组成的序列，k >= 1，其中 word1 是 word2 的前身，word2 是 word3 的前身，依此类推。一个单词通常是 k == 1 的 单词链 。

从给定单词列表 words 中选择单词组成词链，返回 词链的 最长可能长度 。
 

示例 1：

输入：words = ["a","b","ba","bca","bda","bdca"]
输出：4
解释：最长单词链之一为 ["a","ba","bda","bdca"]
示例 2:

输入：words = ["xbc","pcxbcf","xb","cxbc","pcxbc"]
输出：5
解释：所有的单词都可以放入单词链 ["xb", "xbc", "cxbc", "pcxbc", "pcxbcf"].
示例 3:

输入：words = ["abcd","dbqca"]
输出：1
解释：字链["abcd"]是最长的字链之一。
["abcd"，"dbqca"]不是一个有效的单词链，因为字母的顺序被改变了。
 

提示：

1 <= words.length <= 1000
1 <= words[i].length <= 16
words[i] 仅由小写英文字母组成。

*/

/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  words.sort((word1, word2) => word1.length - word2.length)
  const res = new Array(words.length).fill(1)
  for (let i = 1; i < words.length; i++) {
    for (let j = 0; j < i; j++) {
      if (isPredecessor(words[j], words[i])) {
        res[i] = Math.max(res[i], res[j] + 1)
      }
    }
  }
  return Math.max(...res)
}

function isPredecessor(word1, word2) {
  if (word1.length + 1 !== word2.length) {
    return false
  }
  let i = 0
  let j = 0
  let count = 0
  while (i < word1.length && j < word2.length) {
    if (word1[i] === word2[j]) {
      i++
      j++
    } else {
      count++
      if (count > 1) {
        return false
      }
      j++
    }
  }
  return true
}


/**
 * 字典查找
 * 
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  const cnt = new Map();
  words.sort((a, b) => a.length - b.length);
  let res = 0;
  for (const word of words) {
      cnt.set(word, 1);
      for (let i = 0; i < word.length; i++) {
          const prev = word.substring(0, i) + word.substring(i + 1);
          if (cnt.has(prev)) {
              cnt.set(word, Math.max(cnt.get(word), cnt.get(prev) + 1));
          }
      }
      res = Math.max(res, cnt.get(word));
  }
  return res;
};


write('algorithms: 1048. 最长字符串链', 'title')

write(longestStrChain(['a', 'b', 'ba', 'bca', 'bda', 'bdca'])) // 4
write(longestStrChain(['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc'])) // 5
write(longestStrChain(['abcd', 'dbqca'])) // 1

// tag: 字符串；字典查找
