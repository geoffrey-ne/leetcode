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

badc  adbc

baa c

b aa

gr eat
rg eat

eargt

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
  if (s1.length !== s2.length) {
    return false
  }
  return helper(s1, s2)
}

function helper(s1, s2) {
  if (s1 === s2) {
    return true
  }
  if (s1.length === 2 && s1[0] === s2[1] && s2[0] === s1[1]) {
    return true
  }
  const index = s2.indexOf(s1[0])
  if (index === 0) {
    return helper(s1.slice(1), s2.slice(1))
  } else if (index === -1 || index === s2.length - 1) {
    return false
  } else {
    return (
      helper(s1.slice(0, index + 1), s2.slice(0, index + 1)) &&
      helper(s1.slice(index + 1), s2.slice(index + 1))
    )
  }
}

write('algorithms: 87. 扰乱字符串', 'title')

write(isScramble('great', 'rgeat')) // true
write(isScramble('abcde', 'caebd')) // false

// tag: 字符串
