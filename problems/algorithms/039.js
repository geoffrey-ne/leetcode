/**
 * [★★★★★]39. Combination Sum
 * finish: 2016-11-25
 * dp
 * https://leetcode.com/problems/combination-sum/
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
        cur[cur.length] = candidates[i];
        var sub = target - candidates[i];
        if (sub < 0) {
            cur.pop();
            break;
        } else if (sub === 0) {
            res[res.length] = cur.slice(0);
            cur.pop();
            break;
        } else {
            getResult(candidates, res, cur, target - candidates[i], i);
            cur.pop();
        }
    }
}

write('algorithms: 39. Combination Sum', 'title');
write(combinationSum([3, 12, 9, 11, 6, 7, 8, 5, 4], 15));