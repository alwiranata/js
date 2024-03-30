const person = {
	firsName: "aldo",
	lastName: "Wiranata",
}

person.age = 25

for (const key in person) {
	console.log(key + " : " + person[key])
}

Object.defineProperty(person, "ssn", {
	enumerable: true,
	value: 921923912030,
})

console.log("---------------------------")
for (const key in person) {
	console.log(key + " : " + person[key])
}

//Contoh es6
const Person2 = {
	firstName: "aldo",
	lastName: "wiranata",
}

Person2.age = 30

Object.defineProperty(Person2, "nisn", {
	enumerable: false,
	value: 29913910930,
})

console.log(Person2.propertyIsEnumerable("firstName"))
console.log(Person2.propertyIsEnumerable("lastName"))
console.log(Person2.propertyIsEnumerable("nisn"))
console.log(Person2.propertyIsEnumerable("age"))


//enumerable bisa di set true / false 
// bisa dicek dalam es6