//Sejak ES6 terdapat prototype constructor

function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}
Person.prototype.getFullName = function () {
	return this.firstName + " " + this.lastName
}

console.log(new Person("aldo", "wiranata").getFullName())
console.log(new Person("Alwi", "wiranata").getFullName())

class Person2 {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}
	getFullName() {
		return this.firstName + " " + this.lastName
	}
}

let p1 = new Person2("aldo ", "wiranata")
let p2 = new Person2(" Wiranata", "Aldo")
console.log(p1.getFullName())
console.log(p2.getFullName())
