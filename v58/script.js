class Circle {
	#radius = 0
	constructor(value) {
		this.#radius = value
	}

	get area() {
		return Math.PI * Math.pow(this.#radius, 2)
	}

	get radius() {
		return this.#radius
	}
}

let circle = new Circle(10)

console.log(circle.area)
console.log(circle.radius)

class Circle2 {
	#radius = 0
	constructor(radius) {
		this.radius = radius
	}

	set radius(value) {
		if (typeof value === "number" && value >= 0) {
			this.#radius = value
		} else {
			throw "Gunakan number"
		}
	}

	get radius() {
		return this.#radius
	}

	get area() {
		return Math.PI * Math.pow(this.radius, 2)
	}
}

let rad = new Circle2(10)
rad.radius = 20

console.log(rad.radius)
console.log(rad.radius)
console.log(rad.area)

class Clynder2 extends Circle2 {
	#hight
	constructor(radius, hight) {
		super(radius)
		this.#hight = hight
		super.radius = radius * hight
	}

	get hight() {
		return this.#hight
	}
}

let clynder = new Clynder2(20, 1)

console.log(clynder.hight)
console.log(clynder.radius)
console.log(clynder.area)

