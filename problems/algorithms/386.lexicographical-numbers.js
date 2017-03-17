/**
 * [★★★★★]386. Lexicographical Numbers
 * finish: 2017-03-17

 * https://leetcode.com/problems/lexicographical-numbers/
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    var arr = [], cur = 1;
    for (var i = 1; i <= n; i++) {
        arr.push(cur);
        if (cur * 10 <= n) {
            cur *= 10;
        } else if (cur % 10 != 9 && cur + 1 <= n) {
            cur++;
        } else {
            let tmp = parseInt((cur / 10));
            while(tmp % 10 === 9) {
                cur = tmp;
                tmp = parseInt((tmp / 10));
            }
            cur = tmp + 1;
        }
    }
    return arr;
};

write('algorithms: 386. Lexicographical Numbers', 'title');
write(lexicalOrder(13));    // [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
write(lexicalOrder(100));