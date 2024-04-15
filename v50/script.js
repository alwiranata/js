//Class adalh bule prin membuat object
//Contoh sebelum ES6

function Person(name) {
	this.name = name
}
Person.prototype.getName = function () {
	return this.name
}

var Aldo = new Person("Aldo")

console.log(Aldo.getName())
console.log(Aldo instanceof Person)
console.log(Aldo instanceof Object)

//Class ES6

class Person2 {
	constructor(name) {
		this.name = name
	}

	getName() {
		return this.name
	}
}

let Alwi = new Person2("Alwi")
console.log(Alwi.getName())
console.log(Alwi instanceof Person2)
console.log(Alwi instanceof Object)

var Contoh = new Person2("aku")
console.log(Contoh.getName())
