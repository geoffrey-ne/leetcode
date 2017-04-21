/**
 * [★★★★]91. Decode Ways
 * finish: 2017-04-20
 * https://leetcode.com/problems/decode-ways/
 */
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    if (s.length === 0 || /(^0)|[3-9]0/.test(s)) {
        return 0;
    }
    return helper(s);
};

function helper(str) {
    var len = str.length;
    if (len < 3) {
        return isActive(str) ? 2 : 1;
    }
    var sub = str.slice(-3);
    var n = helper(str.slice(0, len - 1));
    if (isActive(sub.slice(-2))) {
        if (isActive(sub.slice(0, 2))) {
            n = n * 2 - n / 2;
        } else {
            n = n * 2;
        }
    }
    return n;
}

function isActive(s) {
    return parseInt(s) < 27 && parseInt(s) > 9;
}

write('algorithms: 91. Decode Ways', 'title');
write(numDecodings("12173"));   // 5
write(numDecodings("12713"));   // 4
write(numDecodings("1012123"));   // 8
write(numDecodings('12'));   // 2 : AB；L