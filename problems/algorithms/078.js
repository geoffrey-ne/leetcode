/**
 * [★★★★]78. Subsets
 * finish: 2016-11-30
 * 
 * https://leetcode.com/problems/subsets/
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if(nums.length === 0) {
        return [[]];
    }
    var res = [[]];
    for(var i = 0; i < nums.length; i++) {
        var count = res.length;
        for(var j = 0; j< count; j++) {
            var clone = res[j].slice(0);
            clone[clone.length] = nums[i];
            res[res.length] = clone;
        }
    }
    return res;
};

write('algorithms: 78. Subsets', 'title');
write(subsets([1, 2, 3]));
write(subsets([1, 2, 3, 4]));
write(subsets([]));