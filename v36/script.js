//objeck adalah kumpulan pasangan fungsi dan nilai
//example
let person = {
	firstName: "Aldo",
	lateName: "Wiranata",
}

person.add = function () {
	console.log("Add")
}

person.add()

function deleteN() {
	console.log("Delete")
}

person.delete = deleteN
person.delete()

person = {
	spasi: " ",
	firstName: "Aldo",
	lastName: "Wiranata",
	deleteF: function () {
		console.log(`delete ${this.firstName}${this.spasi}${this.lastName} `)
	},
}

person.deleteF()

//sejak es6
person = {
	spasi: " ",
	firstName: "Aldo",
	lastName: "Wiranata 2",
	deleteF() {
		console.log(`delete ${this.firstName}${this.spasi}${this.lastName} `)
	},
}

person.deleteF()

person = {
	add1: "Tambah",
	spasi: " ",
	firstName: "Alwi",
	lastName: "Wiranata",
	add() {
		return this.add1 + this.spasi + this.firstName + this.spasi + this.lastName
	},
}

console.log(person.add())
