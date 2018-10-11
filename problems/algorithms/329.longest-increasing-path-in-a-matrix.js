/**
 * []329. Longest Increasing Path in a Matrix
 * finish: 未完成
 * https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/description/
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (matrix.length === 0) {
        return 0;
    }
    var x = 0,
        y = 0;

    var start = matrix[x][y];
    Point.matrix = matrix;
    Point.list = [];

    for (x = 0; x < matrix.length; x++) {
        for (y = 0; y < matrix[x].length; y++) {
            new Point(x, y);
        }
    }

    return Point.getMax();
};

var Point = function (x, y) {
    this.value = Point.matrix[x][y];
    this._toSmall = 1;
    this._toBig = 1;
    this.toSmallList = [];
    this.toBigList = [];
    this.x = x;
    this.y = y;

    this.lookLeft();
    this.lookTop();
    this.toSmall = this._toSmall;
    this.toBig = this._toBig;
    Point.list.push(this);
}

Point.prototype.lookTop = function () {
    this.helper(this.x - 1, this.y)
};
Point.prototype.lookLeft = function () {
    this.helper(this.x, this.y - 1)
};
Point.prototype.helper = function (x, y) {
    if (x < 0 || y < 0) {
        return;
    }

    var point = Point.findByPosition(x, y);

    if (this.value > point.value) {
        defToBig(this, point);
        defToSmall(point, this);
        this._toSmall = Math.max(point.toSmall + 1, this._toSmall);
        this._toBig = Math.max(1, this._toBig);
    } else if (this.value < point.value) {
        defToBig(point, this);
        defToSmall(this, point);
        this._toBig = Math.max(point.toBig + 1, this._toBig);
        this._toSmall = Math.max(1, this._toSmall);
    }
}
function defToBig(obj, point) {
    obj.toBigList.push(point);
    if (obj['toBig']) {
        return
    }

    Object.defineProperty(obj, 'toBig', {
        get() {
            return obj._toBig;
        },
        set(value) {
            obj.toBigList.forEach(point => {
                point.toBig = Math.max(value + 1, point.toBig);
            });
            obj._toBig = value;
        }
    });
}
function defToSmall(obj, point) {
    obj.toSmallList.push(point);
    if (obj['toSmall']) {
        return
    }

    Object.defineProperty(obj, 'toSmall', {
        get() {
            return obj._toSmall;
        },
        set(value) {
            obj.toSmallList.forEach(point => {
                point.toSmall = Math.max(value + 1, point.toSmall);
            });
            obj._toSmall = value;
        }
    });
}
Point.findByPosition = function (x, y) {
    return Point.list[x * Point.matrix[0].length + y];
};
Point.getMax = function () {
    var max = 1;
    Point.list.forEach(point => {
        max = Math.max(max, point.toBig, point.toSmall, point.toBig + point.toSmall - 1);
    });
    return max;
};

write('algorithms: 329. Longest Increasing Path in a Matrix', 'title');

write(longestIncreasingPath([
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 
    [19, 18, 17, 16, 15, 14, 13, 12, 11, 10], 
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29], 
    [39, 38, 37, 36, 35, 34, 33, 32, 31, 30], 
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 
    [59, 58, 57, 56, 55, 54, 53, 52, 51, 50], 
    [60, 61, 62, 63, 64, 65, 66, 67, 68, 69], 
    [79, 78, 77, 76, 75, 74, 73, 72, 71, 70], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]));

write(longestIncreasingPath([
    [19, 15, 100, 10, 4],
    [100, 14, 13, 12, 3]
]));    // 9


write(longestIncreasingPath([
    [13, 5, 13, 9],
    [5, 0, 2, 9],
    [10, 13, 11, 10],
    [0, 0, 13, 13]
]));    // 6

write(longestIncreasingPath([
    [7, 8, 9],
    [9, 7, 6],
    [7, 2, 3]
]));    // 6

write(longestIncreasingPath([[0], [1], [5], [5]])); // 3

write(longestIncreasingPath([
    [9, 9, 4],
    [6, 6, 8],
    [2, 1, 1]
]));    // 4

write(longestIncreasingPath([
    [3, 4, 5],
    [3, 2, 6],
    [2, 2, 1]
]));    // 4


