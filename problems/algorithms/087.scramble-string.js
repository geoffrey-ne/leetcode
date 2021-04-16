/**
 * [困难]87. 扰乱字符串
 * https://leetcode-cn.com/problems/scramble-string/
 * 
 * 
给定一个字符串 s1，我们可以把它递归地分割成两个非空子字符串，从而将其表示为二叉树。

下图是字符串 s1 = "great" 的一种可能的表示形式。

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
在扰乱这个字符串的过程中，我们可以挑选任何一个非叶节点，然后交换它的两个子节点。

例如，如果我们挑选非叶节点 "gr" ，交换它的两个子节点，将会产生扰乱字符串 "rgeat" 。

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
我们将 "rgeat” 称作 "great" 的一个扰乱字符串。

同样地，如果我们继续交换节点 "eat" 和 "at" 的子节点，将会产生另一个新的扰乱字符串 "rgtae" 。

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
我们将 "rgtae” 称作 "great" 的一个扰乱字符串。

给出两个长度相等的字符串 s1 和 s2，判断 s2 是否是 s1 的扰乱字符串。

示例 1:

输入: s1 = "great", s2 = "rgeat"
输出: true

示例 2:

输入: s1 = "abcde", s2 = "caebd"
输出: false

 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
  const length = s1.length
  memo = new Array(length)
    .fill(0)
    .map(() => new Array(length).fill(0).map(() => new Array(length + 1).fill(0)))
  return dfs(0, 0, length, s1, s2, memo)
}

const dfs = function (i1, i2, length, s1, s2, memo) {
  if (memo[i1][i2][length] !== 0) {
    return memo[i1][i2][length] === 1
  }

  // 判断两个子串是否相等
  if (s1.slice(i1, i1 + length) === s2.slice(i2, i2 + length)) {
    memo[i1][i2][length] = 1
    return true
  }

  // 判断是否存在字符 c 在两个子串中出现的次数不同
  if (!checkIfSimilar(i1, i2, length, s1, s2)) {
    memo[i1][i2][length] = -1
    return false
  }

  // 枚举分割位置
  for (let i = 1; i < length; ++i) {
    // 不交换的情况
    if (dfs(i1, i2, i, s1, s2, memo) && dfs(i1 + i, i2 + i, length - i, s1, s2, memo)) {
      memo[i1][i2][length] = 1
      return true
    }
    // 交换的情况
    if (dfs(i1, i2 + length - i, i, s1, s2, memo) && dfs(i1 + i, i2, length - i, s1, s2, memo)) {
      memo[i1][i2][length] = 1
      return true
    }
  }

  memo[i1][i2][length] = -1
  return false
}

const checkIfSimilar = function (i1, i2, length, s1, s2) {
  const freq = new Map()
  for (let i = i1; i < i1 + length; ++i) {
    const c = s1[i]
    freq.set(c, (freq.get(c) || 0) + 1)
  }
  for (let i = i2; i < i2 + length; ++i) {
    const c = s2[i]
    freq.set(c, (freq.get(c) || 0) - 1)
  }
  for (const value of freq.values()) {
    if (value !== 0) {
      return false
    }
  }
  return true
}

write('algorithms: 87. 扰乱字符串', 'title')

write(isScramble('abb', 'bba')) // true
write(isScramble('abb', 'bab')) // true
write(isScramble('abca', 'caba')) // true
write(isScramble('great', 'rgeat')) // true
write(isScramble('abcde', 'caebd')) // false
write(isScramble('abcdbdacbdac', 'bdacabcdbdac')) // true

// tag: 字符串；dp；
