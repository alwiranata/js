const person = {
	firstName: "Aldo",
	lastName: "Wiranata",
}

console.log(person.firstName + " " + person.lastName)

//Facorty function / function penghasil object
//contoh

let person1 = {
	firstName: "Alwi   ",
	lastName: "Wiranata",
	getFullName() {
		return this.firstName + " " + this.lastName
	},
}

console.log(person1.getFullName())

let person2 = {
	firstName: "Alwi2",
	lastName: "Wiranata",
	getFullName() {
		return this.firstName + " " + this.lastName
	},
}

console.log(person2.getFullName())

console.log("----------------------")

//factory function

function createPerson(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName,
		getFullName() {
			return firstName + " " + lastName
		},
	}
}

person1 = createPerson("aldo", "wiranata")
console.log(person1.getFullName())

person2 = createPerson("alwi", "wiranata")
console.log(person2.getFullName())

console.log("--------------------------")

function createPerson2(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName,
	}
}

var personAction = {
	getFullName() {
		return this.firstName + " " + this.lastName
	},
}

let person3 = createPerson2("aldo3", "wiranata")
let person4 = createPerson2("aldo4", "wiranata")

person3.getFullName = personAction.getFullName
person4.getFullName = personAction.getFullName

console.log(person3.getFullName())
console.log(person4.getFullName())

console.log("-----------------------------------")

var personAction3 = {
	getFullName() {
		return this.firstName + " " + this.lastName
	},
}

function createPerson3(firstName, lastName) {
	let person = Object.create(personAction3)
	person.firstName = firstName
	person.lastName = lastName
	console.log(Object.getOwnPropertyNames(person))
	let allData = {
		firstName: person.firstName,
		lastName: person.lastName,
		fullName: person.getFullName(),
	}

	console.log(allData)

	return person
}

const profile = createPerson3("Aldo Wirnanata", "16")
console.log(profile.getFullName())
console.log(profile.firstName)
console.log(profile.lastName)
console.log(profile)
