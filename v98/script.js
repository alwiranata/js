let numbers = [10, 20, 30]
let number = numbers.shift()
console.log(numbers)
console.log(number)

numbers = [10, 20, 30]
while ((number = numbers.shift()) != undefined) {
	console.log(number)
}

let gretings = {
	0: "Hai",
	1: "hello",
	length: 2,
	removeFirst() {
		return [].shift.call(this)
	},
}

const greting1 = gretings.removeFirst()
console.log(greting1)
console.log(gretings)
