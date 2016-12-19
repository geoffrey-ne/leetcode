/**
 * [★★★★]4. Median of Two Sorted Arrays
 * finish: 2016-12-19
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
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