/**
 * [★★★]781. Rabbits in Forest
 * finish: 2018-07-30
 * https://leetcode.com/problems/rabbits-in-forest/description/
 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function (answers) {
  let len = answers.length;
  if (len === 0) {
    return 0;
  }

  answers.sort();

  let pointer = 0,
    res = 0;

  while (pointer < len) {
    let curCount = answers[pointer],
      maxLength = pointer + curCount >= len ? len - 1 : pointer + curCount;

    res += curCount + 1;
    if (curCount === answers[maxLength]) {
      pointer += curCount + 1;
      continue;
    }

    while (pointer <= maxLength && curCount === answers[pointer]) {
      pointer++;
    }
  }
  return res;
};

write('algorithms: 781. Rabbits in Forest', 'title');

write(numRabbits([0, 0, 1, 1, 1]));    // 6