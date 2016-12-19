/**
 * [★★★★]200. Number of Islands
 * finish: 2016-12-06
 * https://leetcode.com/problems/number-of-islands/
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    var count = 0, i, j;
    for (i = 0; i < grid.length; i++) {
        for (j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) {
                count += 1;
                grid[i] = modify(grid[i], j, 2);
                visitAround(grid, i, j);
            } else {
                grid[i] = modify(grid[i], j, 2);
            }
        }
    }
    return count;
};

function modify(str, index, val) {
    var arr = str.split('');
    arr[index] = val;
    return arr.join('');
}

function visitAround(grid, i, j) {
    // top, right, down, left
    visit(grid, i - 1, j);
    visit(grid, i, j + 1);
    visit(grid, i + 1, j);
    visit(grid, i, j - 1);

}

function visit(grid, row, col) {
    if (typeof grid[row] !== 'undefined' && typeof grid[row][col] !== 'undefined') {
        if (grid[row][col] == 1) {
            grid[row] = modify(grid[row], col, 2);
            visitAround(grid, row, col);
        } else {
            grid[row] = modify(grid[row], col, 2);
        }
    }
}

write('algorithms: 200. Number of Islands', 'title');
write(numIslands(["10101", "11010", "10101", "01010"]));
write(numIslands(["11110", "11010", "11000", "00000"]));