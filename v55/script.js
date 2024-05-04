function Person(name) {
	this.name = name
}

let aldo = new Person("Aldo")
console.log(aldo.name)

Person("Aldo Wiranata")
console.log(window.name)

function Person2(name) {
	if (!new.target) {
		throw "add new please!"
	}
	this.name = name
}

// Person2("Testing")
// console.log(Person2.name)

class Person3 {
	constructor(name) {
		this.name = name
		console.log(new.target.name)
	}

	getName() {
		return this.name
	}
}

class Employe extends Person3 {
	constructor(name, title) {
		super(name)
		this.title = title
	}
}

let aldo2 = new Person3("Aldo")
let pw = new Employe("wira", "212301")
console.log(aldo2.getName())
console.log(pw.name)
console.log(pw.title)
