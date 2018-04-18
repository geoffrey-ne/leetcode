/**
 * [★★★]127. Word Ladder
 * finish: 2018-04-17
 * Two-end BFS
 * https://leetcode.com/problems/word-ladder/description/
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (wordList.size === 0 || !wordList.has(endWord)) {
    return 0
  }

  wordList.delete(endWord)

  let beginSet = new Set([beginWord]),
    endSet = new Set([endWord]),
    visited = new Set()

  let len = 1,
    strLen = beginWord.length

  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) {
      let tmp = beginSet
      beginSet = endSet
      endSet = tmp
    }

    let temp = new Set()
    for (let word of beginSet.keys()) {
      for (let i = 0; i < word.length; i++) {
        let former = i == 0 ? '' : word.slice(0, i)
        let after = word.slice(i + 1)

        for (let j = 0; j < 26; j++) {
          let letter = String.fromCharCode(97 + j)
          let newWord = former + letter + after

          if (endSet.has(newWord)) {
            return len + 1
          }

          if (!visited.has(newWord) && wordList.has(newWord)) {
            temp.add(newWord)
            visited.add(newWord)
          }
        }
      }
    }
    beginSet = temp
    len++
  }
  return 0
}

write('algorithms: 127. Word Ladder', 'title')
write(ladderLength('hit', 'cog', [
  "hot",
  "dot",
  "dog",
  "lot",
  "log",
  "cog"
]))