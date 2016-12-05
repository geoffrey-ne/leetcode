/**
 * [★]038. Count and Say
 * finish: 2016-12-01
 * https://leetcode.com/problems/count-and-say/
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var res = "1";
    for(var i = 1; i < n; i++){
        var pre = res;
        res = "";
        for(var j = 0; j < pre.length; j++) {
            var cur = pre[j];
            var count = 0;
            while(j < pre.length && cur === pre[j]){
                count++;
                j++;
            }
            res += count + cur.toString();
            j--;
        }
    }
    return res;
};

write('algorithms: 38. Count and Say', 'title');
write(countAndSay(10));