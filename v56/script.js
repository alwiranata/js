function Person(name) {
	this.name = name
}

Person.prototype.getName = function () {
	return this.name
}

Person.createAnonimous = function (gender) {
	let name = gender === "male" ? "John" : "Jane"
	return new Person(name)
}

console.log(Person.createAnonimous("male").getName())

//ES6

class Person2 {
	constructor(name) {
		this.name = name
	}

	getName() {
		return this.name
	}

	static createAnonimous(gender) {
		let name = gender == "male" ? "john" : undefined
		return new Person(name)
	}
}

let anonim = Person2.createAnonimous("male")
console.log(anonim.name)
