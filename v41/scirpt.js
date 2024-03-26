//Note kata kuncti this
//example
let counter = {
	count: 0,
	next: function () {
		return ++this.count
	},
}
let out = counter.next()
console.log(out)

console.log(this === window)

this.color = "red"
console.log(window.color)

//note konteks pemanggilan this

function show() {
	console.log(this === window)
}
show()

//method this ketat
;("use stric")
function show2() {
	console.log(this === undefined)
}
show2()

let car = {
	brand: "beat",
	getBrand: function () {
		return this.brand
	},
}

console.log(car.getBrand())

let brand = car.getBrand

console.log(brand)
console.log(brand())

brand = car.getBrand.bind(car)
console.log(brand())

let bike = {
	brand: "polygon",
}

brand = car.getBrand.bind(bike)
console.log(brand())

//this di constructor
function Car(brand) {
	this.brand = brand
}

Car.prototype.getBrand = function () {
	return this.brand
}

mobil = new Car("BMW")
console.log(mobil.getBrand())

var honda = Car("honda")
console.log(honda)

//cek supaya di definikan sebagai constructor
// function Car(brand) {
// 	if (!(this instanceof Car)) {
// 		throw Error("Gunakan new untuk fungsi")
// 	}
// 	this.brand = brand
// }

//ES6
// function Car(brand) {
// 	if (!new.target) {
// 		throw Error("Input New")
// 	}
// 	this.brand = brand
// }

//DOA
function getBrand(prefix) {
	console.log(prefix + this.brand)
}

let toyota = {
	brand: "Toyota",
}

let audi = {
	brand: "Audi",
}

getBrand.call(toyota, "Ini Adalah ")
getBrand.call(audi, "Ini Adalah ")

let motor = {
	brand: "Beat",
}

getBrand.apply(motor, ["Ini adalah motor "])

//ES6 diperkenalkan fungsi =>
let getThis = () => this
console.log(getThis() == window)

function Mobil() {
	this.speed = 120
}

Mobil.prototype.getSpeed = function () {
	return this.speed
}

var mobil = new Mobil()
console.log(mobil.getSpeed())
