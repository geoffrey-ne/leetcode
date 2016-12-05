/**
 * [★]66. Plus One
 * finish: 2016-12-05
 * https://leetcode.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (var i = digits.length - 1; i >= 0; i--) {
        digits[i] += 1;
        if (digits[i] === 10) {
            digits[i] = 0;
        } else {
            return digits;
        }
    }
    return [1].concat(digits);
};

write('algorithms: 66. Plus One', 'title');
write(plusOne([1, 2, 3, 4, 5]));
write(plusOne([9, 9, 9, 9, 9]));