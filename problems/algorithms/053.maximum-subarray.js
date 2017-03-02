/**
 * [★★★★★]53. Maximum Subarray
 * finish: 2016-12-23
 * dp
 * https://leetcode.com/problems/maximum-subarray/
 */

/**
 * @param {number[]} nums
 * @return {number}
 * 方法一：
 *  真，穷举：Time Limit Exceeded
 *  改进穷举：500ms+
 */
var maxSubArray1 = function (nums) {
    var max = -Number.MAX_SAFE_INTEGER, sum = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            sum = 0;
            for (var k = i; k <= j; k++) {
                sum += nums[k];
            }
            if (sum > max) {
                max = sum;
            }
            // sum += nums[j];
            // if (sum > max) {
            //     max = sum;
            // }
        }
    }
    return max;
};

/**
 * @param {number[]} nums
 * @return {number}
 * 方法二：分治:125 ms; 122ms; 123 ms
 */
var maxSubArray2 = function (nums) {
    return getMaxSub(nums, 0, nums.length - 1);
}

function getMaxSub(nums, left, right) {
    if (left >= right) {
        return nums[left];
    }

    var mid = left + parseInt((right - left) / 2);

    // 分别求左右最大值
    var leftans = getMaxSub(nums, left, mid - 1);
    var rightans = getMaxSub(nums, mid + 1, right);

    // 求取中间最大值
    var leftMax = nums[mid],
        rightMax = nums[mid],
        tmp = 0, i;

    for (i = mid; i >= left; i--) {
        tmp += nums[i];
        leftMax = Math.max(leftMax, tmp);
    }
    tmp = 0;
    for (i = mid; i <= right; i++) {
        tmp += nums[i];
        rightMax = Math.max(rightMax, tmp);
    }
    var midMax = Math.max(leftMax, rightMax, leftMax + rightMax - nums[mid]);
    // 求最终最大值
    return Math.max(leftans, midMax, rightans);
}

/**
 * @param {number[]} nums
 * @return {number}
 * 方法三：动态规划:138ms; 106ms; 105ms
 */
var maxSubArray = function (nums) {
    var nStart = nums[0];
    var nAll = nums[0];
    for (var i = 1; i < nums.length; i++) {
        nStart = Math.max(nums[i], nStart + nums[i]);
        nAll = Math.max(nStart, nAll);
    }
    return nAll;
};

write('algorithms: 53. Maximum Subarray', 'title');
write(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));    // 6