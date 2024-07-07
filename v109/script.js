//Array Every

let numbers = [1, 2, 3]
let result = true
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i])
	if (numbers[i] <= 0) {
		result = false
		break
	}
}
console.log(result)

///arrow
result = numbers.every((e) => e > 0)
console.log(result)

//normal
result = numbers.every(function (e) {
	return e < 0
})
console.log(result)

//Is Even
numbers = [2, 4, 6]
let isEven = numbers.every((e) => {
	return e % 2 == 0
})
console.log(isEven)

//is Odd
numbers = [1, 3, 5]
let isOdd = numbers.every((e) => {
	return Math.abs(e % 2 == 1)
})
console.log(isOdd)

//

let range = {
	min: 0,
	max: 10,
}

let isInRange = numbers.every(function (e) {
	return e >= this.min && e <= this.max
}, range)

console.log(isInRange)

//
let getZero = [].every((e) => e > 0)
console.log(getZero)

//
let getZero1 = [].every((e) => e < 0)
console.log(getZero1)
