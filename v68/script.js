let add = function (a, y) {
	return a + y
}

console.log(add(10, 2))

//ES6

let add2 = (x, y) => x + y

console.log(add2(10, 20))

let add3 = (x, y) => {
	return x + y
}

console.log(add3(10, 21))

console.log(typeof add3)
console.log(add3 instanceof Function)

//arrow function dengan banyak parameter

let number = [10, 4, 6]
number.sort(function (a, b) {
	return b - a
})

console.log(number)

let number2 = [4, 2, 6]
number2.sort((a, b) => b - a)
console.log(number2)

//durasi panah dengan 1 parameter

let names = ["Aldo", "Wiranata", "pw"]
let length = names.map((names) => names.length)
let s = length.sort((a, b) => b - a)
console.log(length)

//tanpa parameter
let log = () => console.log(window.document)
log()

let multiPlay = (x, y) => x + y
console.log(multiPlay(10, 20))

//fungsi panah untuk objec literal

let setColor = (color) => ({
	color,
})

let bakcgrounColor = setColor("blue")
console.log(bakcgrounColor.color)

let setColor2 = (color) => ({
	color,
})

let myColor = setColor2("red")
console.log(myColor.color)

function Car() {
	this.speedUp = function (speed = 0) {
		this.speed = speed
		let self = this
		setTimeout(function () {
			console.log(self.speed)
		}, 1000)
	}
}
let car = new Car()
car.speedUp()

function Car3() {
	this.speed = 0

	this.speedUp = (speed = 0) => {
		this.speed = speed
		let self = this
		setTimeout(() => {
			console.log(self.speed)
		}, 2000)
	}
}

let car3 = new Car3()
car3.speedUp(2230)
