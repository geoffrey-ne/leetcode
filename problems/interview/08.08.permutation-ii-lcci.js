/**
 * [中等]面试题 08.08. 有重复字符串的排列组合
 * https://leetcode-cn.com/problems/permutation-ii-lcci/
 * 
有重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合。

示例1:

 输入：S = "qqe"
 输出：["eqq","qeq","qqe"]
示例2:

 输入：S = "ab"
 输出：["ab", "ba"]
提示:

字符都是英文字母。
字符串长度在[1, 9]之间。

*/

/**
 * 先排序，遇到重复的则continue
 *
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  const result = []
  S = S.split('')
  S = S.sort((a, b) => {
    if (a > b) return 1
    return -1
  })
  S = S.join('')
  const backtrack = function (curr, store) {
    // 结束条件
    if (store === '') {
      result.push(curr)
      return
    }
    for (let i = 0; i < store.length; i++) {
      // 跳过不符合条件
      if (i > 0 && store[i] === store[i - 1]) continue
      curr += store[i]
      backtrack(curr, store.slice(0, i).concat(store.slice(i + 1)))
      // 撤销选择
      curr = curr.slice(0, curr.length - 1)
    }
  }
  backtrack('', S)
  return result
}

write('algorithms: 面试题 08.08. 有重复字符串的排列组合', 'title')

write(permutation('qqe')) // ["eqq","qeq","qqe"]
write(permutation('ab')) // ["ab", "ba"]

// tag: 字符串
