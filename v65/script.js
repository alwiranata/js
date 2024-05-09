let name = "Aldo"
function greeting() {
	let message = "Hai "
	console.log(message + name)
}

greeting()

function greeting2() {
	let message = "Hai"
	function sayHay() {
		console.log(message)
	}
	sayHay()
}

greeting2()

function greeting3() {
	let message = "Hai...."
	function sayHay1() {
		console.log(message)
	}
	return sayHay1
}

let hai = greeting3()
hai()

function greeting4(message) {
	return function (name) {
		return message + " " + name
	}
}

let sayHay = greeting4("Hai...")
console.log(sayHay("aldo"))
