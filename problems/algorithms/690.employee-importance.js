/**
 * [简单]690. 员工的重要性
 * https://leetcode-cn.com/problems/employee-importance/
 * 
 * 
给定一个保存员工信息的数据结构，它包含了员工 唯一的 id ，重要度 和 直系下属的 id 。

比如，员工 1 是员工 2 的领导，员工 2 是员工 3 的领导。他们相应的重要度为 15 , 10 , 5 。
那么员工 1 的数据结构是 [1, 15, [2]] ，
员工 2的 数据结构是 [2, 10, [3]] ，
员工 3 的数据结构是 [3, 5, []] 。
注意虽然员工 3 也是员工 1 的一个下属，但是由于 并不是直系 下属，因此没有体现在员工 1 的数据结构中。

现在输入一个公司的所有员工信息，以及单个员工 id ，返回这个员工和他所有下属的重要度之和。


示例：

输入：[[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
输出：11
解释：
员工 1 自身的重要度是 5 ，他有两个直系下属 2 和 3 ，而且 2 和 3 的重要度均为 3 。因此员工 1 的总重要度是 5 + 3 + 3 = 11 。
 

提示：

一个员工最多有一个 直系 领导，但是可以有多个 直系 下属
员工数量不超过 2000 。

*/

/**
 * Definition for Employee.
 */

function Employee(id, importance, subordinates) {
  this.id = id
  this.importance = importance
  this.subordinates = subordinates
}

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
  const hashMap = {}
  for (const employee of employees) {
    hashMap[employee.id] = employee
  }
  let indexs = [id]
  let res = 0
  while (indexs.length > 0) {
    const e = hashMap[indexs.shift()] || {}
    res += e.importance
    indexs = indexs.concat(e.subordinates)
  }
  return res
}

write('algorithms: 690. 员工的重要性', 'title')

const node1_1 = new Employee(1, 5, [2])
const node1_2 = new Employee(2, 3, [3])
const node1_3 = new Employee(3, 3, [])

write(GetImportance([node1_1, node1_2, node1_3], 1)) // 11

// tag: 数组；查找；二分查找
