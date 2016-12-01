/**
 * [★★]058. Length of Last Word
 * finish: 2016-12-01
 * Array.split & Reg || Array.lastIndexOf
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.replace(/\s*$/, '').split(" ");
    return arr[arr.length - 1].length;
};

write('algorithms: 58. Length of Last Word', 'title');
write(lengthOfLastWord("hello world"));
write(lengthOfLastWord(" hello "));