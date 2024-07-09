//Array Some
let arr = [6, 7, 8, 9, 3]
let lessThenFive = false
console.log(arr.length)
for (let index = 0; index < arr.length; index++) {
	if (arr[index] < 5) {
		lessThenFive = true
		break
	}
}
console.log(lessThenFive)

//arrow
lessThenFive = arr.some((e) => {
	return e > 8
})

console.log(lessThenFive)

lessThenFive = arr.some((e) => e < 2)
console.log(lessThenFive)

//cek
function exist(value, arr) {
	return arr.some((e) => e === value)
}

console.log(exist(3, arr))

let range = {
	min: 0,
	max: 10,
}
let result = arr.some((e) => {
	return e >= range.min && e <= range.max
})

console.log(result)

result = [].some((e) => e > 0)
console.log(result)

result = [].some((e) => e <= 0)
console.log(result)

console.log("thanks")