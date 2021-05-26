/**
 * [中等]面试题 17.22. 单词转换
 * https://leetcode-cn.com/problems/word-transformer-lcci/
 * 
 * 
给定字典中的两个词，长度相等。写一个方法，把一个词转换成另一个词， 但是一次只能改变一个字符。每一步得到的新词都必须能在字典中找到。

编写一个程序，返回一个可能的转换序列。如有多个可能的转换序列，你可以返回任何一个。

示例 1:

输入:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

输出:
["hit","hot","dot","lot","log","cog"]
示例 2:

输入:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

输出: []

解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  const visitedMap = {}
  for (const word of wordList) {
    visitedMap[word] = false
  }
  if (typeof visitedMap[endWord] === 'undefined') {
    return []
  }
  const res = [endWord]
  visitedMap[endWord] = true
  helper(beginWord, endWord, wordList, visitedMap, res)
  return res
}

function helper(beginWord, endWord, wordList, visitedMap, res) {
  if (beginWord === endWord) {
    return [endWord].concat(res)
  }

  for (let i = 0; i < wordList.length; i++) {
    const word = wordList[i]
    if (!visitedMap[word] && distance1(word, endWord)) {
      visitedMap[word] = true
      res.unshift(word)
      helper(beginWord, endWord, wordList, visitedMap, res)
      res.shift(word)
      visitedMap[word] = false
    }
  }
}

function distance1(w1, w2) {
  let diff = 0
  for (let i = 0; i < w1.length; i++) {
    if (w1[i] !== w2[i]) {
      diff++
      if (diff > 1) {
        return false
      }
    }
  }
  return diff === 1
}

write('algorithms: 面试题 17.22. 单词转换', 'title')

write(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])) // ["hit","hot","dot","lot","log","cog"]
write(findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])) // []

// tag:未完成
