/**
 * [★★★★★]470. Implement Rand10() Using Rand7()
 * finish: 2018-08-28
 * https://leetcode.com/problems/implement-rand10-using-rand7
 */

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function() {
  do {
    var res = 0;
    let
      rand1 = rand7() - 1,
      rand2 = rand7() - 1;

    res = rand1 * 7 + rand2;
  } while (res > 39)
  return res % 10 + 1;
};

write('algorithms: 470. Implement Rand10() Using Rand7()', 'title');