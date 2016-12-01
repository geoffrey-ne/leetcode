/**
 * [★★★]216. Combination Sum III
 * finish: 2016-11-28
 * dp
 * https://leetcode.com/problems/combination-sum-iii/
 */

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    var candicate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var res = [], cur = [];
    helper(candicate, res, cur, k, n, 0);
    return res;
};

function helper(candicate, res, cur, remainK, remainN, start) {
    if (remainK < 0 || remainN < 0) {
        // return;
    } else if (remainK === 0 && remainN === 0) {
        res[res.length] = cur.slice(0);
    } else {
        for (var i = start; i < candicate.length; i++) {
            cur[cur.length] = candicate[i];
            helper(candicate, res, cur, remainK - 1, remainN - candicate[i], i + 1);
            cur.pop();
        }
    }
}

write('algorithms: 216. Combination Sum III', 'title');
write(combinationSum3(3, 9));
write(combinationSum3(3, 7));