/**
 * [★★★★]28. Implement strStr()
 * finish: 2017-03-09
 * https://leetcode.com/problems/implement-strstr/
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    var index = -1;
    for (var i = 0; ; i++) {
        for (var j = 0; ; j++) {
            if (j === needle.length) 
                return i;
            if ( i + j === haystack.length) 
                return -1;
            if (needle[j] !== haystack[i + j]) 
                break;
        }
    }
    return index;
};

write('algorithms: 28. Implement strStr()', 'title');
write(strStr('', '')); // 0
write(strStr('qwdqabcababcdqwdqwd', 'abcd'));  // 9
write(strStr('ababababa', 'babab'));    // 1