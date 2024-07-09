//defult
let numbers = [2, 1, 10, 3, 30, 20]
numbers.sort()
console.log(numbers)

numbers.sort(function (a, b) {
	if (a > b) return 1

	if (a < b) return -1
	return 0
})

console.log(numbers)

numbers.sort((a, b) => {
	if (a > b) return 1
	if (a < b) return -1
	return 0
})

console.log(numbers)

numbers.sort((a, b) => b - a)
console.log(numbers)

let str = ["cat", "dog", "elephant", "bee", "ant"]
str.sort()
console.log(str)

str.sort(function (a, b) {
	if (a > b) return 1
	if (a < b) return -1
	return 0
})
console.log(str)
str.sort((a, b) => a - b)
console.log(str)

str.sort((a, b) => {
	if (a > b) return -1
	if (a < b) return 1
})
console.log(str)

let mixedCaseAnimals = ["Bee", "Elephant", "Cat", "Dog"]
mixedCaseAnimals.sort()
console.log(mixedCaseAnimals)

mixedCaseAnimals.sort((a, b) => {
	let x = a.toUpperCase()
	y = b.toUpperCase()
	return x == y ? 0 : x > y ? 1 : -1
})

console.log(mixedCaseAnimals)

let playerFotball = [
	{name: "Awiranata", salary: 13000, birtday: "Sept 3, 2005"},
	{name: "Aldoa", salary: 12000, birtday: "July 1,2030"},
	{name: "Alwi", salary: 14000, birtday: "August 2,2002"},
	{name: "Awiranata", salary: 13000, birtday: "Sept 3,2000"},
]
//salary
playerFotball.sort((a, b) => {
	return a.salary - b.salary
})

console.table(playerFotball)

//playerfootball
playerFotball.sort((a, b) => {
	let x = a.name.toUpperCase()
	y = b.name.toUpperCase()
	return x == y ? 0 : x > y ? 1 : -1
})

console.table(playerFotball)

playerFotball.sort((a, b) => {
	let x = new Date(a.birtday)
	y = new Date(b.birtday)
	return x - y
})

console.table(playerFotball)
