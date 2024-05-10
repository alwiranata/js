function getName() {
	let firstName = "Aldo",
		lastName = "Wiranata"
	return [firstName, lastName]
}

let name = getName()
console.log(name[0] + " " + name[1])

//ES6

const [firstName, lastName] = getName()
console.log(firstName, lastName)

function getName2() {
	let firstName = "Aldo",
		lastName = "wiranata"
	return {
		firstName: firstName,
		lastName: lastName,
	}
}

let name2 = getName2()
console.log(name2.firstName + " " + name2.lastName)

//Sederahanakan
function getName3() {
	let firstName = "aldo",
		lastName = "Wiranata"
	return {
		firstName,
		lastName,
	}
}
let name3 = getName3()
console.log(name3.firstName, name3.lastName)
