const numbers = [1, 2, 3, [4, 5]]
const flatNumbers = numbers.flat()
console.log(numbers)
console.log(flatNumbers)

const numbers2 = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10]]]]
const flatNumbers2 = numbers2.flat(3)
console.log(numbers2)
console.log(flatNumbers2)

const numbers3 = [1, 2, 3, 4, [5, 6, 7, [8, 9, [10, [11]]]]]
const flatNumbers3 = numbers3.flat(Infinity)
console.log(flatNumbers3)

const squance = [1, 2, 3, , 5]
const addClean = squance.flat()
console.log(squance)
console.log(addClean)
