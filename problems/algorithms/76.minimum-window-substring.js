/**
 * [困难]76. 最小覆盖子串
 * https://leetcode-cn.com/problems/minimum-window-substring/
 * 
 * 
给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。


示例 1：

输入：s = "ADOBECODEBANC", t = "ABC"
输出："BANC"
示例 2：

输入：s = "a", t = "a"
输出："a"
 

提示：

1 <= s.length, t.length <= 105
s 和 t 由英文字母组成

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const hashMap = {}
  const keys = []
  for (let i = 0; i < t.length; i++) {
    if (typeof hashMap[t[i]] === 'undefined') {
      keys.push(t[i])
      hashMap[t[i]] = 0
    } else {
      hashMap[t[i]]--
    }
  }
  let res = ''
  let cur = ''
  let right = 0

  for (; right < s.length; right++) {
    const curChar = s[right]
    if (typeof hashMap[curChar] !== 'undefined') {
      hashMap[curChar]++
    }
    cur += curChar

    while (cur.length > 0 && (typeof hashMap[cur[0]] === 'undefined' || hashMap[cur[0]] > 1)) {
      if (typeof hashMap[cur[0]] !== 'undefined') {
        hashMap[cur[0]]--
      }
      cur = cur.slice(1)
    }

    if (keys.every((key) => hashMap[key] > 0)) {
      res = res === '' || res.length > cur.length ? cur : res
      hashMap[cur[0]]--
      cur = cur.slice(1)
    }
  }
  return res
}

write('algorithms: 76. 最小覆盖子串', 'title')

write(minWindow('ADOBECODEBANC', 'ABC')) // 'BANC'
write(minWindow('a', 'a')) // 'a'
write(minWindow('a', 'aa')) // ''
write(minWindow('aa', 'aa')) // 'aa'
write(minWindow('aa', 'a')) // 'a'

// tag: 字符串；滑动窗口
