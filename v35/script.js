// //function nama(parameter = default){
//     -- script
// }

function add(x, y) {
	return x + y
}

console.log(add(100, 2))
// x dan y adalah parameter
//100 dan 200 argument

//tanpa default parameter

function say(message) {
	message = typeof message !== "undefined" ? message : "Hai"
	console.log(message)
}

say()
say("Hello")

function say2(message = " hai2") {
	console.log(message)
}

say()
say("hello 2")

function createDev(
	height = "100px",
	width = "100px",
	border = "solid 1px red",
	marginTop = "10px"
) {
	let div = document.createElement("div")
	div.style.height = height
	div.style.width = width
	div.style.border = border
	div.style.marginTop = marginTop
	document.body.appendChild(div)
	return div
}

createDev()
createDev(undefined, undefined, "solid 5px blue", "20px")

// evaluasi parameter

function put(toy, toybox = []) {
	toybox.push(toy)
	return toybox
}

console.log(put("Toy Box"))
console.log(put("Toy Card"))
console.log(put("Toy Card 1", put("Toy card 2")))

// menggunakan parameter lain untuk default

function add(x = 1, y = 2, z = x + y) {
	return x + y + z
}

console.log(add(3))

let taxRate = () => 0.1
let getPrice = function (price, tax = price * taxRate()) {
	return price + tax
}

console.log(getPrice(10))

function add(x, y = 1, z = 2) {
	console.log(arguments.length)
	return x + y + z
}

console.log(add(10, 30))
