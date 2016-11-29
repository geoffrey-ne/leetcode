/**
 * 456. 132 pattern
 * finish: 2016-11-25
 * 无状态转移方程的dp
 * https://leetcode.com/problems/132-pattern/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    if (nums.length < 3) return false;

    // 定义滑块及最小值
    var p2 = nums.length - 1,
        p1 = p2 - 1,
        min, isMin = false;

    while (p1 >= 0) {
        if (isMin && nums[p1] < min) {
            console.log(nums[p1], min);
            return true;
        }

        // 左值 > 右值
        if(nums[p1] > nums[p2]) {
            isMin = true;
            min = typeof min === 'undefined' ? nums[p2++] : min;
            while(p2 < nums.length) {
                if(nums[p2] >= min && nums[p2] < nums[p1]) {
                    // 设定允许的最小值
                    min = nums[p2];                    
                } else {
                    break;
                }
                p2 += 1;
            }
        }
        p2 = p1;
        p1 -= 1;
    }
    return false;
}

console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-2, 1, 2, -2, 1, 2]));
console.log(find132pattern([1, 2, 3, 4]));
console.log(find132pattern([3, 1, 4, 2]));
console.log(find132pattern([-1, 3, 2, 0]));
console.log(find132pattern([3, 5, 0, 3, 4]));