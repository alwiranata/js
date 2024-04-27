//sebelum ES6

function Animal(legs) {
	this.legs = legs
}

Animal.prototype.walk = function () {
	console.log("Berjalan dengan " + this.legs + " legs")
}

function Bird(legs) {
	Animal.call(this, legs)
}

Bird.prototype = Object.create(Animal.prototype)

Bird.prototype.constructor = Animal

Bird.prototype.fly = function () {
	console.log("Flaying")
}

var pigeon = new Bird(2)
pigeon.walk()
pigeon.fly()
