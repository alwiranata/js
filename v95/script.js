//add element
let numbers = [10, 20, 30]
let add = numbers.push(35)
let length = numbers.push(40)
console.log(add)
console.log(length)
console.log(numbers)

length = numbers.push(50, 60)
console.log(length)
console.log(numbers)

let colors = ["red", "green", "blue"]
let cmyk = ["clay", "magneta", "yellow", "black"]

// for (const color of cmyk) {
// 	colors.push(color)
// }

console.log(colors)

colors.push(...cmyk)
console.log(colors)

let gretings = {
	0: "Hai",
	1: "Hello",
	length: 2,
	append(message) {
		;[].push.call(this, message)
	},
}
gretings.append("aldo")
gretings.append("wiranata")
console.log(gretings)