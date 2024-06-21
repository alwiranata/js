let numbers = [30, 40]
let length = numbers.unshift(20)
console.log(length)
console.log(numbers)

length = numbers.unshift(0, 10)
console.log(length)
console.log(numbers)

let days = ["Mon", "Tue", "Wed ", "Thu", "Fri"]
let wekkends = ["Sat", "Sun"]

// for (const wekkend of wekkends) {
// 	days.unshift(wekkend)
// }
// console.log(days)

days.unshift(...wekkends)

console.log(days)

let greetings = {
	0: "Hai ",
	1: "Hello",
	length: 2,
	add(message) {
		;[].unshift.call(this, message)
		return this.lentgh
	},
}
greetings.add("Aldo")
console.log(greetings)
