/**
 * 70. Climbing Stairs
 * finish: 2016-11-30
 * dp
 * https://leetcode.com/problems/climbing-stairs/
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var cache = [1];
    return helper([1, 2], n, cache);
}

function helper(candidates, target, cache) {
    if (typeof cache[target] !== 'undefined') {
        return cache[target];
    }
    var res = 0;
    for (var i = 0; i < candidates.length; i++) {
        if (target >= candidates[i]) {
            res += helper(candidates, target - candidates[i], cache);
        }
    }
    cache[target] = res;
    return res;
}
write('algorithms: 70. Climbing Stairs', 'title');
write(climbStairs(3));
write(climbStairs(4));