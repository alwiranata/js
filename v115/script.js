function arrayFromArgs() {
	var result = []
	for (var i = 0; i < arguments.length; i++) {
		result.push(arguments[i])
	}
	return result
}

var fruits = arrayFromArgs("Banana", "Appel")

console.log(fruits)

//s5 ke bawah
function arrayFromargs() {
	return Array.prototype.slice.call(arguments)
}

var fruits = arrayFromArgs("Banana", "Appel", "Pear")

console.log(fruits)

//ES 6 Ke atas
function arrayFromArgs3() {
	return Array.from(arguments)
}
var fruits1 = arrayFromArgs3("Pir", "Carrot", "cucumber")
console.log(fruits1)

function add() {
	return Array.from(arguments, (e) => e + 1)
}
console.log(add(1, 2, 3))

let doubler = {
	factor: 2,
	double(x) {
		return x * this.factor
	},
}
let scores = [2, 4, 6]
let newScores = Array.from(scores, doubler.double, doubler)
console.log(newScores)
