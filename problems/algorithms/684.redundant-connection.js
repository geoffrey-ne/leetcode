/**
 * [★★★★★]684. Redundant Connection
 * 无向图找环
 * finish: 2018-03-14
 * https://leetcode.com/problems/redundant-connection/description/
 */

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    let parent = new Array(2001)

    for (let i = 0; i < parent.length; i++) {
        parent[i] = i
    }

    let res = [0, 0] 
    edges.forEach(edge => {
        let f = edge[0], t = edge[1]

        if (find(parent, f) == find(parent, t)) {
            res = edge
            return
        } else {
            parent[find(parent, f)] = find(parent, t)
        }
    })
    return res
}

function find (parent, f) {
    if (f != parent[f]) {
        parent[f] = find(parent, parent[f])
    }
    return parent[f]
}

write('algorithms: 684. Redundant Connection', 'title');
write(findRedundantConnection([[1,2], [1,3], [2,3]]));  // [2,3]
write(findRedundantConnection([[1,2], [2,3], [3,4], [1,4], [1,5]]));  // [1,4]
write(findRedundantConnection([[9,10],[5,8],[2,6],[1,5],[3,8],[4,9],[8,10],[4,10],[6,8],[7,9]]));  // [4,10]