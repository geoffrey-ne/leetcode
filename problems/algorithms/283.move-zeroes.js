/**
 * [★★]283. Move Zeroes
 * finish: 2016-12-21
 * https://leetcode.com/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var p1 = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[p1++] = nums[i];
        }
    }
    for (; p1 < nums.length; p1++) {
        nums[p1] = 0;
    }
    return nums;
};

write('algorithms: 283. Move Zeroes', 'title');
write(moveZeroes([0, 1, 0, 3, 12]));