let propName = "c"
const rank = {
	a: 1,
	b: 2,
	[propName]: 3,
}

console.log(rank.c)

let name = "fullName"

class Person {
	constructor(firstname, lastName) {
		this.firstname = firstname
		this.lastName = lastName
	}

	get [name]() {
		return `${this.firstname} ${this.lastName}`
	}
}
let person = new Person("Aldo", "Wiranata")

console.log(person.fullName)
