/**
 * [★★]319. Bulb Switcher
 * finish: 2018-07-25
 * https://leetcode.com/problems/bulb-switcher/description/
 */

/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
  return Math.floor(Math.sqrt(n));
};

write('algorithms: 319. Bulb Switcher', 'title');

write(bulbSwitch(4));    // 2