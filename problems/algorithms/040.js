/**
 * 40. Combination Sum II
 * finish: 2016-11-28
 * dp
 * https://leetcode.com/problems/combination-sum-ii/
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort(sortNumber);
    var res = [], cur = [];
    getResult(candidates, res, cur, target, 0);
    return res;
};

function sortNumber(a, b) {
    return a - b;
}

function getResult(candidates, res, cur, target, start) {
    for (var i = start; i < candidates.length; i++) {
        if(i !== start && candidates[i] === candidates[i - 1]) {
            continue;
        }
        var curValue = candidates[i];
        cur[cur.length] = curValue;
        var sub = target - curValue;
        if (sub < 0) {
            cur.pop();
            break;
        } else if (sub === 0) {
            res[res.length] = cur.slice(0);
            cur.pop();
            break;
        } else {
            getResult(candidates, res, cur, sub, i + 1);
            cur.pop();
        }
    }
}
write(combinationSum([2,5,2,1,2], 5));
write(combinationSum([10, 1, 2, 7, 6, 1, 5], 8));