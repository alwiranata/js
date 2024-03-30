//global this 2026

const canFach = typeof globalThis.fetch === "function"
console.log(canFach)
console.log(globalThis === window)

//property dan atribut

let person = {
	firstName: "ALdo",
	lastName: "Wiranata",
}

person = {}
person.age = 25

delete person.age
console.log(person.age)

// ;("use strict")
// person = {}
// Object.defineProperty(person, "ssn", {
// 	configurable: false,
// 	value: 123434,
// })

// delete person.ssn

person = {}
person.age = 26
person.ssn = "2183129819"
for (let property in person) {
	console.log("p1", property)
}

Object.defineProperty(person, "ssn", {
	enumerable: false,
})

for (let property in person) {
	console.log(property)
}

//properti pengakeses

person = {
	firstName: "Aldo",
	lastName: "Wiranata",
}

Object.defineProperty(person, "fullName", {
	get: function () {
		if (this.firstName === undefined) {
			throw "firstName Undifined"
		} else if (this.lastName == undefined) {
			throw "lastName Undifined"
		} else {
			return this.firstName + " " + this.lastName
		}
	},

	set: function (value) {
		let part = value.split(" ")
		if (part.length === 2) {
			this.firstName = part[0]
			this.lastName = part[1]
		} else {
			throw "Invailid  Input"
		}
	},
})

console.log(person.fullName)

person = {
	firstName: "alwi",
	lastName: "wiranata",
}

let decriptor = Object.getOwnPropertyDescriptor(person, "firstName")

console.log(decriptor)
