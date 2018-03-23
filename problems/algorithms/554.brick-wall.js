/**
 * [★]554. Brick Wall
 * finish: 2018-03-23
 * https://leetcode.com/problems/brick-wall/description/
 */
/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let edge = {},
        maxGapCount = 0
    wall.forEach(bricks => {
        bricks.reduce((previousValue, value, index, arr) => {
            if (index === arr.length - 1) {
                return
            }
            let cur = previousValue + value
            edge[cur] = edge[cur] ? edge[cur] + 1 : 1
            maxGapCount = maxGapCount > edge[cur] ? maxGapCount : edge[cur]
            return cur
        }, 0)
    })
    return wall.length - maxGapCount
}

write('algorithms: 554. Brick Wall', 'title');
write(leastBricks([
    [1, 2, 2, 1], 
    [3, 1, 2], 
    [1, 3, 2], 
    [2, 4], 
    [3, 1, 2], 
    [1, 3, 1, 1]
])) // 2