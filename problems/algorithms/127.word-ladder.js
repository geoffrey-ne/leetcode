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
// set 双端
var ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (wordList.size === 0 || !wordList.has(endWord)) {
    return 0
  }

  wordList.delete(endWord)

  let beginSet = new Set([beginWord]),
    endSet = new Set([endWord]),
    len = 1

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

          if (wordList.has(newWord)) {
            temp.add(newWord)
            wordList.delete(newWord)
          }
        }
      }
    }
    beginSet = temp
    len++
  }
  return 0
}
// set 单端
var ladderLength1 = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (wordList.size === 0 || !wordList.has(endWord)) {
    return 0
  }

  wordList.delete(endWord)

  let beginSet = new Set([beginWord]),
    len = 1

  while (beginSet.size > 0) {
    let temp = new Set()
    for (let word of beginSet.keys()) {
      for (let i = 0; i < word.length; i++) {
        let former = i == 0 ? '' : word.slice(0, i)
        let after = word.slice(i + 1)

        for (let j = 0; j < 26; j++) {
          let letter = String.fromCharCode(97 + j)
          let newWord = former + letter + after

          if (newWord === endWord) {
            return len + 1
          }

          if (wordList.has(newWord)) {
            temp.add(newWord)
            wordList.delete(newWord)
          }
        }
      }
    }
    beginSet = temp
    len++
  }
  return 0
}

// 数组 单端
var ladderLength2 = function (beginWord, endWord, wordList) {
  if (wordList.length === 0 || wordList.indexOf(endWord) === -1) {
    return 0
  }

  let begin = [beginWord],
    len = 1

  while (begin.length > 0) {
    let temp = []
    for (let word of begin) {
      for (let i = 0; i < word.length; i++) {
        let former = i == 0 ? '' : word.slice(0, i)
        let after = word.slice(i + 1)

        for (let j = 0; j < 26; j++) {
          let letter = String.fromCharCode(97 + j)
          let newWord = former + letter + after

          if (newWord === endWord) {
            return len + 1
          }

          let index = wordList.indexOf(newWord)
          if (index > -1) {
            temp.push(newWord)
            wordList.splice(index, 1)
          }
        }
      }
    }
    begin = temp
    len++
  }
  return 0
}
// 数组 双端
var ladderLength3 = function (beginWord, endWord, wordList) {
  if (wordList.length === 0 || wordList.indexOf(endWord) === -1) {
    return 0
  }

  let begin = [beginWord],
    end = [endWord],
    len = 1

  while (begin.length > 0 && end.length > 0) {
    if (begin.length > end.length) {
      let tmp = begin
      begin = end
      end = tmp
    }
    let temp = []
    for (let word of begin) {
      for (let i = 0; i < word.length; i++) {
        let former = i == 0 ? '' : word.slice(0, i)
        let after = word.slice(i + 1)

        for (let j = 0; j < 26; j++) {
          let letter = String.fromCharCode(97 + j)
          let newWord = former + letter + after

          if (end.indexOf(newWord) > -1) {
            return len + 1
          }

          let index = wordList.indexOf(newWord)
          if (index > -1) {
            temp.push(newWord)
            wordList.splice(index, 1)
          }
        }
      }
    }
    begin = temp
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