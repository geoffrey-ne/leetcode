/**
 * [★★★★★]679. 24 Game
 * finish: 2018-11-16
 * https://leetcode.com/problems/24-game/description/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var judgePoint24 = function(nums) {
  const len = nums.length

  if (len === 1) {
    return Math.abs(nums[0] - 24) < 0.001
  }

  let flag = false

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const restNums = getRestNums(i, j, nums)

      let 
        num1 = nums[i],
        num2 = nums[j]

      flag = judgePoint24([num1 + num2, ...restNums])
      if (flag) return flag
      flag = judgePoint24([Math.abs(num2 - num1), ...restNums])
      if (flag) return flag
      flag = judgePoint24([num2 * num1, ...restNums])
      if (flag) return flag
      if (num1 !== 0) {
        flag = judgePoint24([num2 / num1, ...restNums])
        if (flag) return flag
      }
      if (num2 !== 0) {
        flag = judgePoint24([num1 / num2, ...restNums])
        if (flag) return flag
      }
    }
  }
  return flag
}

// 获取nums去掉索引i,j值之后的数组
function getRestNums(i, j, nums) {
  const copyNums = nums.slice()
  copyNums.splice(j, 1)
  copyNums.splice(i, 1)
  return copyNums
}

write('algorithms: 679. 24 Game', 'title');
write(judgePoint24([1, 3, 4, 6]));  // true
write(judgePoint24([4, 1, 8, 7]));  // true

