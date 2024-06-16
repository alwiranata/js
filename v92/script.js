let person = {
	firstName: "Aldo",
	lastName: "Wiranata",
	age: 17,
}

//cara lama

// let first = person.firstName
// let last = person.lastName

// console.log(first, last)

// let {firstName, lastName} = person
// console.log(firstName, lastName)

//default
// let {firstName, lastName, midleName = "Kosong", age = 18} = person

// console.log(midleName)
// console.log(age)

// function getPerson() {
// 	return null
// }

// let {firstName = "NaN", lastName = "Nan"} = getPerson() || {}
// console.log(firstName, lastName)

//object bersarang

let employed = {
	id: 1,
	name: {
		pw: 10,
		firstName: "Aldo",
		lastName: " Wiranata",
	},
}

let {
	id,  
	name,
	name: {pw, firstName, lastName},
} = employed

console.log(id)
console.log(name)
console.log(pw, firstName, lastName)

let display = (person) => {
	console.log(`${person.firstName} ${person.lastName} ${person.age}`)
}
display(person)

let display2 = ({firstName, lastName, age}) => {
	console.log(`${firstName} ,${lastName} , ${age}`)
}
display2(person)
