/**
 * [困难]123. 买卖股票的最佳时机 III
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * 
 * 
给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意: 你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

示例 1:

输入: [3,3,5,0,0,3,1,4]
输出: 6
解释: 在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
示例 2:

输入: [1,2,3,4,5]
输出: 4
解释: 在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3:

输入: [7,6,4,3,1] 
输出: 0 
解释: 在这个情况下, 没有交易完成, 所以最大利润为 0。

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const arr = []
  helper(prices, arr)
  return (arr[0] || 0) + (arr[1] || 0)
}

function helper(prices, arr) {
  if (prices.length <= 1) {
    return 0
  }
  let metric = prices[0]
  let index = 1

  while (index < prices.length && metric >= prices[index]) {
    metric = prices[index]
    index++
  }

  const start = metric

  while (index < prices.length && metric <= prices[index]) {
    metric = prices[index]
    index++
  }
  const res = metric - start

  if (arr.length < 2) {
    arr.push(res)
  } else if (res > arr[0]) {
    arr[0] = res
  } else if (res > arr[1]) {
    arr[1] = res
  }

  helper(prices.slice(index), arr)
}

// 一次交易能获取的最大利润
function maxProfitByOne(prices) {
  if (prices.length <= 1) {
    return 0
  }
  let min = prices[0]
  let res = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i]
    } else {
      res = Math.max(res, prices[i] - min)
    }
  }
  return res
}

write('algorithms: 122. 买卖股票的最佳时机 II', 'title')

write(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])) // 13
write(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])) // 6
write(maxProfit([1, 2, 3, 4, 5])) // 4
write(maxProfit([7, 6, 4, 3, 1])) // 0

// tag: 未完成；动态规划
