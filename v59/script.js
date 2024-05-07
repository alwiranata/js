// class Person {
// 	#firstName
// 	#lastName
// 	constructor(firstName, lastName) {
// 		this.#firstName = firstName
// 		this.#lastName = lastName
// 	}

// 	getfullName(format = true) {
// 		return format ? this.#firstLast() : this.#lastFirst()
// 	}

// 	static #validation(name) {
// 		if (typeof name === "string") {
// 			let str = name.trim()

// 			if (str.length == 3) {
// 				return str
// 			}
// 		}

// 		throw "Name harus 3 karakter"
// 	}

// 	#firstLast() {
// 		return `${this.#firstName}  ${this.#lastName}`
// 	}
// 	#lastFirst() {
// 		return `${this.#lastName} ${this.#firstName}`
// 	}
// }

// let person = new Person("aldo", "wiranata")
// console.log(person.getfullName(false)) // Output: wiranata, aldo

class Person2 {
	#firstName
	#lastName
	constructor(firstName, lastName) {
		this.#firstName = Person2.#validation(firstName)
		this.#lastName = Person2.#validation(lastName)
	}

	getfullName(format = true) {
		return format ? this.#firstLast() : this.#lastFirst()
	}

	static #validation(name) {
		if (typeof name === "string") {
			let str = name.trim()

			if (str.length == 3) {
				return str
			}
		}

		throw "Name harus 3 karakter"
	}

	#firstLast() {
		return `${this.#firstName}  ${this.#lastName}`
	}
	#lastFirst() {
		return `${this.#lastName} ${this.#firstName}`
	}
}

let person2 = new Person2("ald0", "Wir")
console.log(person2.getfullName())
