/**
 * [中等]1419. 数青蛙
 * https://leetcode-cn.com/problems/minimum-number-of-frogs-croaking/
 * 
 * 
给你一个字符串 croakOfFrogs，它表示不同青蛙发出的蛙鸣声（字符串 "croak" ）的组合。由于同一时间可以有多只青蛙呱呱作响，所以 croakOfFrogs 中会混合多个 “croak” 。

请你返回模拟字符串中所有蛙鸣所需不同青蛙的最少数目。

要想发出蛙鸣 "croak"，青蛙必须 依序 输出 ‘c’, ’r’, ’o’, ’a’, ’k’ 这 5 个字母。如果没有输出全部五个字母，那么它就不会发出声音。如果字符串 croakOfFrogs 不是由若干有效的 "croak" 字符混合而成，请返回 -1 。

示例 1：

输入：croakOfFrogs = "croakcroak"
输出：1 
解释：一只青蛙 “呱呱” 两次
示例 2：

输入：croakOfFrogs = "crcoakcroakcroakroak"
输出：2 
解释：最少需要两只青蛙，“呱呱” 声用黑体标注
第一只青蛙 "crcoakroak"
第二只青蛙 "crcoakroak"
示例 3：

输入：croakOfFrogs = "croakcrook"
输出：-1
解释：给出的字符串不是 "croak" 的有效组合。
 

提示：

1 <= croakOfFrogs.length <= 105
字符串中的字符只有 'c', 'r', 'o', 'a' 或者 'k'

*/

/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  const aim = ['c', 'r', 'o', 'a', 'k']
  const lastChar = getTopStack(aim)
  const stack1 = []
  const stack2 = []
  let ans = 0
  let prePerfectFix = false
  for (let i = 0; i < croakOfFrogs.length; i++) {
    const curChar = croakOfFrogs[i]
    if (curChar !== lastChar) {
      stack1.push(curChar)
    } else {
      let preIndex = aim.length - 2
      let perfectFix = true
      while (stack1.length > 0 && preIndex >= 0) {
        const top = stack1.pop()
        if (top === aim[preIndex]) {
          preIndex--
        } else {
          perfectFix = false
          stack2.push(top)
        }
      }

      if (preIndex === -1) {
        if (!(prePerfectFix && perfectFix)) {
          ans++
        }
        while (stack2.length) {
          stack1.push(stack2.pop())
        }
      } else {
        return -1
      }

      prePerfectFix = perfectFix
    }
  }
  return stack1.length > 0 ? -1 : ans
}

function getTopStack(stack) {
  return stack[stack.length - 1]
}

write('algorithms: 1419. 数青蛙', 'title')

// write(minNumberOfFrogs('croakcroak')) // 1
// write(minNumberOfFrogs('crcoakroak')) // 2
write(minNumberOfFrogs('crcoakcroakcroakroak')) // 3
// write(minNumberOfFrogs('crcoacroakcroakkroak')) // 3
// write(minNumberOfFrogs('croakcrook')) // -1

// tags: 双栈；wip - 当前case不正确
