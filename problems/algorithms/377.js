/**
 * 377. Combination Sum IV
 * finish: 2016-11-28
 * dp
 * https://leetcode.com/problems/combination-sum-iv/
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum4 = function (candidates, target) {
    var cache = [1];
    return helper(candidates, target, cache);
};

function helper(candidates, target, cache) {
    if(typeof cache[target] !== 'undefined') {
        return cache[target];
    }
    var res = 0;
    for (var i = 0; i < candidates.length; i++){
        if(target >= candidates[i]) {
            res += helper(candidates, target - candidates[i], cache);
        }
    }
    cache[target] = res;
    return res;
}
write('algorithms: 377. Combination Sum IV', 'title');
write(combinationSum4([1, 2, 3], 4));
write(combinationSum4([4, 2, 1], 32));