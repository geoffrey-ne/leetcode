/**
 * [★★★]165. Compare Version Numbers
 * finish: 2017-04-07
 * https://leetcode.com/problems/compare-version-numbers/
 */

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    if (parseInt(version1) !== parseInt(version2)) {
        return parseInt(version1) > parseInt(version2) ? 1 : -1;
    }
    var index1 = version1.indexOf('.');
    var index2 = version2.indexOf('.');
    if (index1 === index2 && index1 === 0) {
        return 0;
    } else if (index1 === index2 && index1 !== 0) {
        return arguments.callee(
            index1 > 0 ? version1.substr(index1 + 1) : "0",
            index2 > 0 ? version2.substr(index2 + 1) : "0"
        );
    } else {
        return index1 > index2 ? 1 : -1;
    }
};

write('algorithms: 165. Compare Version Numbers', 'title');
write(compareVersion('1', '1.1'));
write(compareVersion('1.0.1', '1'));
write(compareVersion('2.5', '2.3'));