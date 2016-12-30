/**
 * [★★★]290. Word Pattern
 * finish: 2016-12-21
 * https://leetcode.com/problems/word-pattern/
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    var patternArr = pattern.split('');
    var strArr = str.split(' ');
    if (patternArr.length !== strArr.length) {
        return false;
    }
    var map1 = {}, map2 = {};
    for (var i = 0; i < strArr.length; i++) {
        if (typeof map1[patternArr[i]] === 'undefined') {
            map1[patternArr[i]] = strArr[i];
        } else if (map1[patternArr[i]] !== strArr[i]) {
            return false;
        }

        if (typeof map2[strArr[i]] === 'undefined') {
            map2[strArr[i]] = patternArr[i];
        } else if (map2[strArr[i]] !== patternArr[i]) {
            return false;
        }
    }
    return true;
};

write('algorithms: 290. Word Pattern', 'title');
write(wordPattern("abba", "dog cat cat dog"));
write(wordPattern("abcba", "dog cat dog cat dog"));
write(wordPattern("abba", "dog cat cat fish"));