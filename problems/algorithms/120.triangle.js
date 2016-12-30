/**
 * [★★★★]120. Triangle
 * finish: 
 * https://leetcode.com/problems/triangle/
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    var n = triangle.length;
    var minlen = triangle[n - 1].slice(0);
    for (var layer = n - 2; layer >= 0; layer--) {
        for (var i = 0; i <= layer; i++) {
            minlen[i] = Math.min(minlen[i], minlen[i + 1]) + triangle[layer][i];
        }
    }
    return minlen[0];
};

write('algorithms: 120. Triangle', 'title');
write(minimumTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]));    // 2 + 3 + 5 + 1 = 11