/**
 * [★★★★]4. Median of Two Sorted Arrays
 * finish: 2016-12-19
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * 
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。

请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。

你可以假设 nums1 和 nums2 不会同时为空。

 

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var len = nums1.length + nums2.length;
    if (len === 0) return NaN;
    
    var mergeNums = [];
    var i = 0, j = 0, k = 0;
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            mergeNums[k++] = nums1[i++];
        } else {
            mergeNums[k++] = nums2[j++];
        }
    }
    while (i < nums1.length) {
        mergeNums[k++] = nums1[i++];
    }
     while (j < nums2.length) {
        mergeNums[k++] = nums2[j++];
    }
    len = mergeNums.length;
    if (len % 2 === 0) {
        return (mergeNums[len / 2] + mergeNums[len / 2 - 1]) / 2;
    } else {
        return mergeNums[(len - 1) / 2];
    }
};

write('algorithms: 4. Median of Two Sorted Arrays', 'title');
write(findMedianSortedArrays([1, 2, 3], [2]));
write(findMedianSortedArrays([1, 3, 5], [2, 3]));
write(findMedianSortedArrays([], []));
write(findMedianSortedArrays([], [1, 2, 3]));
write(findMedianSortedArrays([1, 2, 3], []));