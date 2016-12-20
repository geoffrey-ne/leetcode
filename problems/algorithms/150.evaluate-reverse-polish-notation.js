/**
 * [★★★]150. Evaluate Reverse Polish Notation
 * finish: 2016-12-19
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    var nums = [], oper = [];
    for (var i = 0; i < tokens.length; i++) {
        if (/\d/.test(tokens[i])) {
            nums.push(tokens[i]);
        } else {
            nums.push(cal(nums.splice(nums.length - 2, 2), tokens[i]));
        }
    }
    return parseInt(nums[0]);
};

function cal(arr, operator) {
    num1 = parseInt(arr[0]);
    num2 = parseInt(arr[1]);
    var res = 0;
    switch (operator) {
        case '+':
            res = num1 + num2;
            break;
        case '-':
            res = num1 - num2;
            break;
        case '*':
            res = num1 * num2;
            break;
        case '/':
            res = parseInt(num1 / num2);
            break;
    }
    return res;
}

write('algorithms: 150. Evaluate Reverse Polish Notation', 'title');
write(evalRPN(["18"]));
write(evalRPN(["2", "1", "+", "3", "*"]));
write(evalRPN(["4", "13", "5", "/", "+"]));