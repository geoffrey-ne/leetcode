/**
 * [★★★★]394. Decode String
 * finish: 2017-03-02
 * stack
 * https://leetcode.com/problems/decode-string/
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    if (s.length <= 1) return s;
    var stack1 = [], stack2 = [], res = '', num = '';
    for (var i = 0; i < s.length; i++) {
        if (/[a-z]/.test(s[i])) {
            stack2.push(s[i]);
        } else if (s[i] === '[') {
            var n = num.length > 0 ? parseInt(num) : 1;
            stack1.push(n);
            stack2.push('[');
            num = '';
        } else if (s[i] === ']') {
            stack2.push(helper(stack1, stack2));
        } else {
            num += s[i];
        }
    }
    return stack2.join('');
};

function helper(s1, s2) {
    var times = s1.pop();
    var arr = [], c = s2.pop();
    while (c !== '[' && s2.length > 0) {
        arr.push(c);
        c = s2.pop();
    }
    return new Array(times + 1).join(arr.reverse().join(''));
}

write('algorithms: 394. Decode String', 'title');
write(decodeString("100[leetcode]"));
write(decodeString("3[a]2[bc]")); // "aaabcbc"
write(decodeString("3[a2[c]]")); // "accaccacc"
write(decodeString("2[abc]3[cd]ef")); // "abcabccdcdcdef"