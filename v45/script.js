//Object Property (bukan dari turunannya)

const person = {
	firstName: "Aldo ",
	lastName: " Wiranata",
}

//object turunan
const employee = Object.create(person, {
	job: {
		value: "JS developer",
		enumerable: true,
	},
})

console.log(employee.hasOwnProperty("job"))
console.log(employee.hasOwnProperty("firstName"))

//cara mengakses value atribut sebelum es 2017
console.log("---------------------------------")

let person2 = {
	firstName: " Aldo",
	lastName: "Wiranata",
	age: "17",
}

for (const key in employee) {
	if (employee.hasOwnProperty(key)) {
		console.log(employee[key])
	}
}

const profile = Object.values(employee)
console.log(profile)

//ES2017 -> Object.entries();
console.log("---------------------")
const ssn = Symbol("ssn")
const person3 = {
	firstName: "Aldo ",
	lastName: "Wiranata",
	age: 30,
	[ssn]: "12345678",
}

const kw = Object.entries(person3)
console.log(kw)

//memerikas 2 objeck yang sama /tidak

console.log("-------------------")
let amount = +0
volume = -0
console.log(amount === volume)
console.log(Object.is(amount, volume))

let quantity = NaN
console.log(quantity === quantity)
console.log(Object.is(quantity, quantity))
