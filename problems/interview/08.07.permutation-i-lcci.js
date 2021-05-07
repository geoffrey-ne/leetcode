/**
 * [中等]面试题 08.07. 无重复字符串的排列组合
 * https://leetcode-cn.com/problems/permutation-i-lcci/
 * 
无重复字符串的排列组合。编写一种方法，计算某字符串的所有排列组合，字符串每个字符均不相同。

示例1:

 输入：S = "qwe"
 输出：["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
示例2:

 输入：S = "ab"
 输出：["ab", "ba"]
提示:

字符都是英文字母。
字符串长度在[1, 9]之间。

*/

/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function (S) {
  return helper(S.split(''), '')
}

function helper(S, cache = {}) {
  if (S.length === 1) {
    return [S[S.length - 1]]
  }
  const rawKey = S.join('')
  if (cache[rawKey]) {
    return cache[rawKey]
  }
  let res = []
  for (let i = 0; i < S.length; i++) {
    const cur = S.splice(i, 1)[0]
    const curRes = helper(S, cache)
    res = res.concat(curRes.map((str) => cur + str))
    res = [...new Set(res)]
    S.splice(i, 0, cur)
  }
  return (cache[rawKey] = res)
}

var permutation = function(S) {
  const result = []
  S = S.split('')
  S = S.sort((a, b) => {
      if(a>b) return 1
      return -1
  })
  S = S.join('')
  const backtrack = function(curr, store) {
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

write('algorithms: 面试题 08.07. 无重复字符串的排列组合', 'title')

write(permutation('qwe')) // ["qwe", "qew", "wqe", "weq", "ewq", "eqw"]
write(permutation('ab')) // ["ab", "ba"]
write(permutation('qDHKARXp'))

// tag: 字符串
