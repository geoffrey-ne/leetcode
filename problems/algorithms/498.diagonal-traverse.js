/**
 * [★★★★★]498. Diagonal Traverse
 * finish: 2018-08-28
 * https://leetcode.com/problems/diagonal-traverse/description/
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function (matrix) {
  let len = matrix.length, res = [];
  if (len <= 0) {
    return res;
  }

  let row = len;
  let col = matrix[0].length;
  let colArr = [], rowArr = [];
  let i;
  for (i = 0; i < col; i++) {
    colArr.push(new Point(0, i));
    if (i != 0) {
      rowArr.push(new Point(row - 1, i));
    }
  }
  for (i = 0; i < row; i++) {
    if (i != 0) {
      colArr.push(new Point(i, col - 1));
    }
    rowArr.push(new Point(i, 0));
  }

  rowArr = [...rowArr.slice(col - 1), ...rowArr.slice(0, col)]

  for (i = 0; i < row + col - 1; i++) {
    let startPoint = colArr[i],
      endPoint = rowArr[i];

    if (i % 2 === 0) {
      while(!isSame(startPoint, endPoint)) {
        res.push(matrix[endPoint.x][endPoint.y]);
        endPoint.stepY();
      }
      res.push(matrix[endPoint.x][endPoint.y]);
    } else {
      while(!isSame(startPoint, endPoint)) {
        res.push(matrix[startPoint.x][startPoint.y]);
        startPoint.stepX();
      }
      res.push(matrix[startPoint.x][startPoint.y]);
    }
  }
  return res;
};

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  stepX() {
    this.x += 1;
    this.y -= 1;
  }
  stepY() {
    this.x -= 1;
    this.y += 1;
  }
}

function isSame(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}

write('498. Diagonal Traverse', 'title');
write(findDiagonalOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));

write(findDiagonalOrder([
  [1, 2, 3, 4],
  [4, 5, 6, 7]
]));

write(findDiagonalOrder([
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
]));