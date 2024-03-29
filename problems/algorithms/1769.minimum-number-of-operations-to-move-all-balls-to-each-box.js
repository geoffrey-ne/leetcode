/**
 * [中等]1769. 移动所有球到每个盒子所需的最小操作数
 * https://leetcode-cn.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * 
有 n 个盒子。给你一个长度为 n 的二进制字符串 boxes ，其中 boxes[i] 的值为 '0' 表示第 i 个盒子是 空 的，而 boxes[i] 的值为 '1' 表示盒子里有 一个 小球。

在一步操作中，你可以将 一个 小球从某个盒子移动到一个与之相邻的盒子中。第 i 个盒子和第 j 个盒子相邻需满足 abs(i - j) == 1 。注意，操作执行后，某些盒子中可能会存在不止一个小球。

返回一个长度为 n 的数组 answer ，其中 answer[i] 是将所有小球移动到第 i 个盒子所需的 最小 操作数。

每个 answer[i] 都需要根据盒子的 初始状态 进行计算。

 

示例 1：

输入：boxes = "110"
输出：[1,1,3]
解释：每个盒子对应的最小操作数如下：
1) 第 1 个盒子：将一个小球从第 2 个盒子移动到第 1 个盒子，需要 1 步操作。
2) 第 2 个盒子：将一个小球从第 1 个盒子移动到第 2 个盒子，需要 1 步操作。
3) 第 3 个盒子：将一个小球从第 1 个盒子移动到第 3 个盒子，需要 2 步操作。将一个小球从第 2 个盒子移动到第 3 个盒子，需要 1 步操作。共计 3 步操作。
示例 2：

输入：boxes = "001011"
输出：[11,8,5,4,3,4]
 

提示：

n == boxes.length
1 <= n <= 2000
boxes[i] 为 '0' 或 '1'

*/

/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const res = new Array(boxes.length).fill(0)
  if (boxes.length === 1) {
    return res
  }
  const info = [0, 0] // 小球总数，当前步数
  for (let i = 0; i < boxes.length; i++) {
    const curStep = info[0] + info[1]
    const curBall = hasBall(boxes[i]) ? info[0] + 1 : info[0]
    res[i] += curStep

    info[0] = curBall
    info[1] = curStep
  }
  info[0] = 0
  info[1] = 0
  for (let i = boxes.length - 1; i >= 0; i--) {
    const curStep = info[0] + info[1]
    const curBall = hasBall(boxes[i]) ? info[0] + 1 : info[0]
    res[i] += curStep
    info[0] = curBall
    info[1] = curStep
  }
  return res
}

const hasBall = (char) => char === '1'

write('algorithms: 1769. 移动所有球到每个盒子所需的最小操作数', 'title')

write(minOperations('110')) // [1, 1, 3]
write(minOperations('001011')) // [11,8,5,4,3,4]

// tags: 字符串
