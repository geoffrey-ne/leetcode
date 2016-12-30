/**
 * [★★★]300. Longest Increasing Subsequence
 * finish: 2016-12-23
 * https://leetcode.com/problems/longest-increasing-subsequence/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length < 0) return 0;
    var lis = [], max = -Number.MAX_SAFE_INTEGER;
    for (var i = 0; i < nums.length; i++) {
        lis[i] = 1;
        for (var j = 0; j < i; j++) {
            if (nums[i] > nums[j] && lis[j] + 1 > lis[i]) {
                lis[i] = lis[j] + 1;
            }
        }
        if (lis[i] > max) {
            max = lis[i];
        }
    }
    return max;
};

write('algorithms: 300. Longest Increasing Subsequence', 'title');
// write(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));   // 4
write(lengthOfLIS([1,3,6,7,9,4,10,5,6])); // 6