/**
 * [★★★]165. Compare Version Numbers
 * finish: 2017-04-07
 * https://leetcode.com/problems/compare-version-numbers/
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    if (parseInt(version1) !== parseInt(version2)) {
        return parseInt(version1) > parseInt(version2) ? 1 : -1;
    }
    var index1 = version1.indexOf('.');
    var index2 = version2.indexOf('.');
    if (index1 === index2 && index1 === 0) {
        return 0;
    } else if (index1 === index2 && index1 !== 0) {
        return arguments.callee(
            index1 > 0 ? version1.substr(index1 + 1) : "0",
            index2 > 0 ? version2.substr(index2 + 1) : "0"
        );
    } else {
        return index1 > index2 ? 1 : -1;
    }
};

// write('algorithms: 165. Compare Version Numbers', 'title');
// write(compareVersion('1', '1.1'));
// write(compareVersion('1.0.1', '1'));
// write(compareVersion('2.5', '2.3'));



var longestPalindrome = function (s) {
    var length = s.length;
    if (length <= 1) {
        return length;
    } 
    var max = 0, cur;
    for(var i = 0; i < length; i++) {
        for(var j = i + 1; j <= length; j++) {
            cur = getPalindromeLen(s.substring(i, j));
            max = max > cur ? max : cur;
        }
    }
    return max;
}

function getPalindromeLen(str) {
    if (str === str.split('').reverse().join('')) {
        return str.length;
    }
    return 0;
}

// function getPalindromeLen(str) {
//     var length = str.length;
//     if (length <= 1) {
//         return length;
//     } 
//     var right, left;
//     if (length % 2 === 0) {
//         right = parseInt(length / 2);
//         left = right - 1;
//     } else {
//         right = parseInt(length / 2) + 1;
//         left = right - 2;
//     }
//     var isHuiwen = true;
//     while (right < length && left > -1) {
//         if (str[right++] !== str[left--]) {
//             isHuiwen = false;
//             break;
//         }
//     }
//     return isHuiwen ? str.length : 0;
// }

write(longestPalindrome('a'));
write(longestPalindrome("zyaayz"));
write(longestPalindrome("baablkj12345432133d"));

