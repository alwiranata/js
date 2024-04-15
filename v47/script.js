// let person = {
// 	firstName: "Aldo",
// 	lastName: "Wiranata",
// 	getFullName() {
// 		return this.firstName + " " + this.lastName
// 	},
// }

// const personal = person
// console.log(personal.getFullName())

//Note Object Destructuring

let my = {
	firstName: "Aldo",
	lastName: "Wiranata",
}

// let firstName = my.firstName
// let lastName = my.lastName
// console.log(firstName + " " + lastName)

//ES6

let {firstName, lastName, middelName} = my
console.log(firstName)
console.log(lastName)
console.log(middelName)

console.log("--------------------------------------")

let my2 = {
	firstName2: "Aldo 2",
	lastName2: "Wiranata",
	middelName2: "JS",
	age: 0,
}

let {firstName2, lastName2, middelName2 = "", age = 20} = my2

console.log(middelName2)
console.log(age)

console.log("----------------------------------------")

function getPerson() {
	let firstName3 = "aldo"
	let lastName3 = "wiranata"
	return {firstName3, lastName3}
}
let {firstName3, lastName3} = getPerson()

console.log(firstName3, lastName3)

let employee4 = {
	id: 1001,
	name: {
		firstName4: "aldo4",
		lastName4: "Wiranata",
	},
}

let {
	name: {firstName4, lastName4},
	name,
} = employee4
console.log(firstName4, lastName)
console.log(name)

console.log("argumnet")

let display = (person5) =>
	console.log(`${person5.firstName} ${person5.lastName}`)

let person5 = {
	firstName: "Aldi",
	lastName: "Wiranata",
}

display(person5)

let display2 = ({firstName, lastName}) =>
	console.log(`${firstName} ${lastName}`)
display2(person5)
