/**
 * [★★★]036. Valid Sudoku
 * finish: 2016-12-05
 * https://leetcode.com/problems/valid-sudoku/
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    if (board.length !== 9) {
        return false;
    }
    // 扫描行
    var cacheRow = [],
        cacheCol = [],
        cacheCell = [],
        i, j;
    // 初始化
    for(i = 0; i < 9; i++) {
        cacheRow[i] = [];
        cacheCol[i] = [];
        cacheCell[i] = [];
    }
    // 检测
    for (i = 0; i < board.length; i++) {
        var rowStr = board[i];
        for (j = 0; j < rowStr.length; j++) {
            if(rowStr[j] === '.') {
                continue;
            } else {
                // 检测行
                if (typeof cacheRow[i][rowStr[j]] === 'undefined') {
                    cacheRow[i][rowStr[j]] = 1;
                } else {
                    return false;
                }
                // 检测列
                if(typeof cacheCol[j][rowStr[j]] === 'undefined') {
                    cacheCol[j][rowStr[j]] = 1;
                } else {
                    return false;
                }
                // 检测单元格
                var row = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if(typeof cacheCell[row][rowStr[j]] === 'undefined') {
                    cacheCell[row][rowStr[j]] = 1;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
};

write('algorithms: 36. Valid Sudoku', 'title');
write(isValidSudoku(
    ["..4...63.",".........","5......9.","...56....","4.3.....1","...7.....","...5.....",".........","........."]
));
write(isValidSudoku(
    [".87654321", "2........", "3........", "4........", "5........", "6........", "7........", "8........", "9........"]
));


// ??4 ??? 63?
// ??? ??? ???
// 5?? ??? ?9?

// ??? 56? ???
// 4?3 ??? ??1
// ??? 7?? ???

// ??? 5?? ???
// ??? ??? ???
// ??? ??? ???


// ?87 654 321
// 2?? ??? ???
// 3?? ??? ???

// 4?? ??? ???
// 5?? ??? ???
// 6?? ??? ???

// 7?? ??? ???
// 8?? ??? ???
// 9?? ??? ???