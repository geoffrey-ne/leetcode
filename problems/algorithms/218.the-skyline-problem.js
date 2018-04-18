/**
 * [★★★]218. The Skyline Problem
 * finish: 2018-03-30
 * https://leetcode.com/problems/the-skyline-problem/description/
 */

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
var getSkyline = function (buildings) {
    var len = buildings.length

    if (len <= 0) {
        return []
    }

    var splitBuildings = splitBuilding(buildings)

    return splitBuildings.reduce((pre, buildings, index, arr) => {
        var res = hepler(buildings)
        return [...pre, ...res]
    }, [])
}

function splitBuilding(buildings) {
    var arr = []

    var start = buildings[0][0],
        end = buildings[0][1],
        height = buildings[0][2]

    var sub = [buildings[0]]

    for (i = 1; i < buildings.length; i++) {
        var cur = buildings[i]
        var curStart = cur[0],
            curEnd = cur[1],
            curHeight = cur[2]

        if (end >= curStart) {
            // 交叉
            sub.push(cur)
            end = end > curEnd ? end : curEnd
        } else {
            arr.push(sub)
            sub = [cur]
            start = cur[0]
            end = cur[1]
        }
    }
    arr.push(sub)
    return arr
}

function hepler(buildings) {
    var len = buildings.length

    if (len === 1) {
        var rectangle = buildings[0]
        return [[rectangle[0], rectangle[2]], [rectangle[1], 0]]
    }

    var width = getWidth(buildings, len)
    var points = initPoints(width + 2)

    for (var i = 0, l = len; i < l; i++) {
        // switch point to 1 if it inside the rectangle
        setRectangle(buildings[i], points)
    }

    var startPoint = getStartPoint(buildings, len),
        endPoint = [width, 0]

    return getCriticalPoint(startPoint, endPoint, points)
}

function getWidth(buildings, len) {
    var width = 0
    for (var i = 0; i < len; i++) {
        var curWidth = buildings[i][1]
        width = curWidth > width ? curWidth : width
    }
    return width
}

function getStartPoint(buildings, len) {
    var startX = buildings[0][0],
        startY = buildings[0][2]

    for (var i = 1; i < len; i++) {
        var cur = buildings[i]
        if (cur[0] === startX) {
            startY = startY > cur[2] ? startY : cur[2]
        } else {
            break
        }
    }
    return [startX, startY]
}

function initPoints(len) {
    var points = new Array(len)

    for (var i = 0; i < len; i++) {
        points[i] = []
        // var row = points[i] = new Array(len)
        // for (var j = 0; j < len; j++) {
        //     row[j] = 0
        // }
    }
    return points
}

function setRectangle(rectangle, points) {
    var rowStart = rectangle[0],
        rowEnd = rectangle[1],
        high = rectangle[2]

    for (var i = 0; i <= high; i++) {
        for (var j = rowStart; j <= rowEnd; j++) {
            points[j][i] = 1
        }
    }
}

function getCriticalPoint(startPoint, endPoint, points) {
    var res = [startPoint]
    toRight(startPoint, endPoint, points, res)
    return res
}

/**
 * [2, 10]
 * x = 2, y = 10
 * isToTop = true
 * 
 * y = 11
 * 
 * while(!points[2][11]) => true
 * while(!points[3][11]) => false
 * 
 */
function toRight(curPoint, endPoint, points, res) {
    var safeCount = 100000

    var x = curPoint[0],
        y = curPoint[1],
        topStatus = false

    while (!isEqual([x, y], endPoint) && safeCount) {
        x++
        safeCount--

        if (!points[x][y + 1] === topStatus) {
            toTop([x, y + 1], endPoint, points, res)
            break
        }

        if (y > 0 && !points[x][y]) {
            x--
            toDown([x, y], endPoint, points, res)
            break
        }
    }
}

/**
 * [3, 11]
 * 
 */
function toTop(curPoint, endPoint, points, res) {
    var x = curPoint[0],
        y = curPoint[1],
        safeCount = 100000

    while (points[x][y] && safeCount) {
        y++
        safeCount--
    }
    y--
    res.push(curPoint = [x, y])
    if (!isEqual(curPoint, endPoint)) {
        toRight(curPoint, endPoint, points, res)
    }
}

function toDown(curPoint, endPoint, points, res) {
    var x = curPoint[0],
        y = curPoint[1],
        rightStatus = !!points[x + 1][y]
    safeCount = 100000

    while (!isEqual([x, y], endPoint) && safeCount) {
        y--
        safeCount--

        if (y === 0) {
            res.push(curPoint = [x, y])
            toRight(curPoint, endPoint, points, res)
            break
        }

        if (!points[x + 1][y] === rightStatus) {
            res.push(curPoint = [x, y])
            toRight(curPoint, endPoint, points, res)
            break
        }
    }
}


function isEqual(point1, point2) {
    return point1[0] === point2[0] && point1[1] === point2[1]
}

write('algorithms: 218. The Skyline Problem', 'title');

write(getSkyline([
    [3, 10, 20],
    [3, 9, 19],
    [3, 8, 18],
    [3, 7, 17],
    [3, 6, 16],
    [3, 5, 15],
    [3, 4, 14]
]))
write(getSkyline([
    [2, 9, 10],
    [3, 7, 15],
    [5, 12, 12],
    [15, 20, 10],
    [19, 24, 8]
])) // [ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]

write(getSkyline([
    [1, 2, 1],
    [2147483646, 2147483647, 2147483647]
]))
write(getSkyline([
    [1, 2, 1],
    [1, 2, 2],
    [1, 2, 3]
]))
write(getSkyline([
    [0, 2147483647, 2147483647]
]))

