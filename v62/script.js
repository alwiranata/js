function add(x, y) {
	return x + y
}
console.log(add instanceof Function)

let result = add(10, 20)
console.log(result)
let result2 = add.call(this, 10, 20)
console.log(result2)

var greeting = "HI"
var message = {
	greeting: "HELOO",
}

function say(name) {
	console.log(this.greeting + " " + name)
}

say.call(this, "Aldo")
say.call(message, "Aldo")

//Menggunakan call untuk merangkai constructor

function Box(height, width) {
	this.height = height
	this.width = width
}

function Width(height, width, color) {
	Box.call(this, height, width)
	this.color = color
}

let width = new Width(100, 200, "Red")
console.log(width)

//menggunakn method call untuk meminjam fungsi

const car = {
	name: "car",
	start() {
		console.log("Start the " + this.name)
	},
	speedUp() {
		console.log("Speed Up " + this.name)
	},
	stop() {
		console.log("Stop the " + this.name)
	},
}

const aircraft = {
	name: "Aircraft",
	flay() {
		console.log("Run " + this.name)
	},
}

car.start.call(aircraft)
car.speedUp.call(aircraft)
aircraft.flay.call(car)

function isOdd(number) {
	return number % 2 == 1
}

function getOdd() {
	return Array.prototype.filter.call(arguments, isOdd)
}

let result3 = getOdd(10, 1, 2, 3, 4)
console.log(result3)
