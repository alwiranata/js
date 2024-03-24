//Note Pewarisan prototype JS
let person = {
	name: "Aldo",
	greeat: function () {
		return "Hai" + " " + this.name
	},
}

console.log(person)
console.log(person.toString())
console.log(person.__proto__)
console.log(person.__proto__ === Object.prototype)

let teacher = {
	teach: function (subject) {
		return "I can teach" + subject
	},
}

teacher.__proto__ = person
console.log(teacher)
console.log(teacher.name)
console.log(teacher.greeat())

let student = Object.create(person)

student.name = "Wira"

student.study = function (subject) {
	return "My name : " + subject
}

let name = student.name
console.log(student.greeat())
console.log(student.study(name))

let student3 = Object.create(person, {
	name: {value: "PPLG"},
	major: {
		value: function (subject) {
			return "My Major " + subject
		},
	},
})

console.log(student3.greeat())
console.log(student3.major("PPLG"))
 
