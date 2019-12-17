/**
 * 图像渲染：https://leetcode-cn.com/explore/learn/card/queue-stack/220/conclusion/891/
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  const initalColor = image[sr][sc]
  if (initalColor === newColor) {
    return image
  }

  const visits = []
  for (let i = 0; i < image.length; i++) {
    visits[i] = []
  }

  const queue = [[sr, sc]]
  while (queue.length > 0) {
    const [curSr, curSc] = queue.shift()
    if (
      curSr >= 0 &&
      curSr < image.length &&
      curSc >= 0 &&
      curSc < image[0].length &&
      !visits[curSr][curSc] &&
      image[curSr][curSc] === initalColor
    ) {
      image[curSr][curSc] = newColor
      visits[curSr][curSc] = 1
      queue.push([curSr - 1, curSc], [curSr + 1, curSc], [curSr, curSc - 1], [curSr, curSc + 1])
    }
  }
  return image
}

write('queueAndStack 15. floodFill', 'title')

write(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1]
    ],
    1,
    1,
    2
  )
)

// [ [2,2,2],
//   [2,2,0],
//   [2,0,1]]

write(
  floodFill(
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    0,
    0,
    2
  )
)

// [ [2,2,2],
//   [2,2,2]]
