//menghapus element akhir

let numbers = [10, 20, 30]
let last = numbers.pop()

console.log(numbers)
console.log(last)

numbers = []
last = numbers.pop()
console.log(numbers)
console.log(last)

let gretings = {
	0: "Hai",
	1: "Hello",
	2: " Holiday",
	length: 3,
	removeLast() {
		return [].pop.call(this)
	},
}

let greting = gretings.removeLast()
console.log(greting)
console.log(gretings)
