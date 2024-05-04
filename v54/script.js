// //sebelum ES6

// function Animal(legs) {
// 	this.legs = legs
// }

// Animal.prototype.walk = function () {
// 	console.log("Berjalan dengan " + this.legs + " legs")
// }

// function Bird(legs) {
// 	Animal.call(this, legs)
// }

// Bird.prototype = Object.create(Animal.prototype)

// Bird.prototype.constructor = Animal

// Bird.prototype.fly = function () {
// 	console.log("Flaying")
// }

// var pigeon = new Bird(2)
// pigeon.walk()
// pigeon.fly()

//ES6
class Animal2 {
	constructor(legs) {
		this.legs = legs
	}

	walk() {
		console.log("berjalan  dengan " + this.legs + " legs")
	}
}

class Bird2 extends Animal2 {
	constructor(legs, color) {
		super(legs)
		this.color = color
	}

	fly() {
		return "flying"
	}

	getColor() {
		return this.color
	}
}

let bird2 = new Bird2(2, "white")
bird2.walk()
console.log(bird2.fly())
console.log(bird2.getColor())

class Dog extends Animal2 {
	constructor() {
		super(4)
	}
	walk() {
		console.log("Go Walking")
	}
}

let dog = new Dog()

dog.walk()

class Animal3 {
	constructor(legs) {
		this.legs = legs
	}

	walk() {
		console.log("Berjalan 3 dengan " + this.legs + " legs")
	}

	static helloWorld() {
		console.log("hello world")
	}
}

class Birds3 extends Animal3 {
	fly() {
		console.log("Flaying")
	}
}

Birds3.helloWorld()

class Queue extends Array {
	enqueue(e) {
		super.push(e)
	}

	dequeue() {
		return super.shift()
	}

	peek() {
		return !this.empty() ? this[0] : undefined
	}

	empty() {
		return this.length === 0
	}
}

var customers = new Queue()
customers.enqueue(1)

while (!customers.empty()) {
	console.log(customers.dequeue())
}
