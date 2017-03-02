/**
 * [★★★★★]209. Minimum Size Subarray Sum
 * finish: 2017-01-03
 * dp
 * https://leetcode.com/problems/minimum-size-subarray-sum/
 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 方法一：穷举：312ms
 */
var minSubArrayLen1 = function (s, nums) {
    var min = Number.MAX_SAFE_INTEGER, sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum = 0;
        for (var j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= s && min > j - i + 1) {
                min = j - i + 1;
                break;
            }
        }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 方法二：分治：ms
 */
var minSubArrayLen2 = function (s, nums) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= s) {
            return 1;
        }
    }
    var min = getMinSub(s, nums, 0, nums.length - 1);
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

function getMinSub(s, nums, left, right) {
    var min = Number.MAX_SAFE_INTEGER;
    if (left >= right) {
        return Number.MAX_SAFE_INTEGER;
    }
    var mid = left + parseInt((right - left) / 2);

    //求取中间最小值
    var midMin = 1, sum = 0, i, j;

    for (i = mid; i >= left; i--) {
        sum += nums[mid];
        if (sum >= s) {
            min = mid - i + 1;
            break;
        }
    }

    for (j = mid; j <= right; j++) {

    }



    // 分别求左右最小值
    var leftMin = getMinSub(s, nums, left, mid - 1);
    var rightMin = getMinSub(s, nums, mid + 1, right);
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


/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 * 方法二：分治：102ms;92ms
 */
var minSubArrayLen = function (s, nums) {
    var sums = [0], i;
    for (i = 1; i < nums.length + 1; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }
    var min = Number.MAX_SAFE_INTEGER;

    for (i = 0; i < sums.length; i++) {
        var end = helper(i + 1, sums.length - 1, sums[i] + s, sums);
        if (end === sums.length) break;
        if (end - i < min) min = end - i;
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
}

function helper (left, right, key, sums) {
    while (left <= right) {
        var mid = left + parseInt((right - left) / 2);
        if (sums[mid] >= key) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

write('209. Minimum Size Subarray Sum', 'title');
write(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));    // 2