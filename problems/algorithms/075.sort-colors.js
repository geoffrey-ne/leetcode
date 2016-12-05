/**
 * [★★★]75. Sort Colors
 * finish: 2016-12-05
 * 快排
 * https://leetcode.com/problems/sort-colors/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    // nums.sort();
    quickSort(nums, 0, nums.length - 1);
};

function quickSort(nums, start, end) {
    if(start >= end) {
        return;
    }
    var first = start,
        last = end,
        key = nums[first];
    while(first < last) {
        while(first < last && nums[last] >= key) {
            last -= 1;
        } 
        nums[first] = nums[last];
        while(first < last && nums[first] <= key) {
            first += 1;
        }
        nums[last] = nums[first];
    }
    nums[first] = key;
    quickSort(nums, start, first - 1);
    quickSort(nums, first + 1, end);
}

write('algorithms: 75. Sort Colors', 'title');
var arr = [1, 2, 0, 2, 1, 0, 1, 1];
sortColors(arr);
write(arr);