//ES6
function sum(...args) {
	let total = 0
	for (const a of args) {
		total += a
	}
	return total
}

console.log(sum(1, 2, 3, 5))

function sum2(...args) {
	return args

		.filter(function (e) {
			return typeof e === "number"
		})

		.reduce(function (prev, curr) {
			return prev + curr
		})
}

let result = sum2(3, 20, 39, undefined, "5")
console.log(result)

//sebelum ES6
function sum3() {
	return Array.prototype.filter

		.call(arguments, function (a) {
			return typeof a === "number"
		})

		.reduce(function (prev, curr) {
			return prev + curr
		})
}

let result2 = sum3(4, 20, 39, undefined, "5")
console.log(result2)

const combine = (...args) => {
	return args

		.filter(function (e) {
			return typeof e === "number" || "string"
		})

		.reduce(function (prev, curr) {
			return prev + " " + curr
		})
}

let message = combine("Message:", "Hello", 16, "aldowiranata")
console.log(message)

var showNumber = new Function("...numbers", "console.log(numbers)")
showNumber(["1", 2, 3, 4, undefined, 0 === 1])


