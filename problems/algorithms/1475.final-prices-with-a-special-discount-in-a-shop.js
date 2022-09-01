/**
 * [简单]1475. 商品折扣后的最终价格
 * https://leetcode-cn.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * 
 * 
给你一个数组 prices ，其中 prices[i] 是商店里第 i 件商品的价格。

商店里正在进行促销活动，如果你要买第 i 件商品，那么你可以得到与 prices[j] 相等的折扣，其中 j 是满足 j > i 且 prices[j] <= prices[i] 的 最小下标 ，如果没有满足条件的 j ，你将没有任何折扣。

请你返回一个数组，数组中第 i 个元素是折扣后你购买商品 i 最终需要支付的价格。

示例 1：

输入：prices = [8,4,6,2,3]
输出：[4,2,4,2,3]
解释：
商品 0 的价格为 price[0]=8 ，你将得到 prices[1]=4 的折扣，所以最终价格为 8 - 4 = 4 。
商品 1 的价格为 price[1]=4 ，你将得到 prices[3]=2 的折扣，所以最终价格为 4 - 2 = 2 。
商品 2 的价格为 price[2]=6 ，你将得到 prices[3]=2 的折扣，所以最终价格为 6 - 2 = 4 。
商品 3 和 4 都没有折扣。
示例 2：

输入：prices = [1,2,3,4,5]
输出：[1,2,3,4,5]
解释：在这个例子中，所有商品都没有折扣。
示例 3：

输入：prices = [10,1,1,6]
输出：[9,0,1,6]
 
提示：

1 <= prices.length <= 500
1 <= prices[i] <= 10^3

*/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices_0 = function (prices) {
  const stack = [[0, prices[0]]]
  const res = prices.slice(0)
  for (let i = 1; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] <= stack[stack.length - 1][1]) {
      res[stack[stack.length - 1][0]] = stack[stack.length - 1][1] - prices[i]
      stack.pop()
    }
    stack.push([i, prices[i]])
  }
  return res
}

// 看看人家的思路，啧啧啧，单调栈要记得顺序问题
var finalPrices = function (prices) {
  const n = prices.length
  const ans = new Array(n).fill(0)
  const stack = []
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] > prices[i]) {
      stack.pop()
    }
    ans[i] = stack.length === 0 ? prices[i] : prices[i] - stack[stack.length - 1]
    stack.push(prices[i])
  }
  return ans
}

write('algorithms: 1475. 商品折扣后的最终价格', 'title')

write(finalPrices([8, 4, 6, 2, 3])) // [4,2,4,2,3]
write(finalPrices([1, 2, 3, 4, 5])) // [1,2,3,4,5]
write(finalPrices([10, 1, 1, 6])) // [9,0,1,6]
write(finalPrices([8, 7, 4, 2, 8, 1, 7, 7, 10, 1])) // [1,3,2,1,7,0,0,6,9,1]

// tags: 单调栈
