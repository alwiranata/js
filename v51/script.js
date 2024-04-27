//dasar awal
class Person {
	constructor(name) {
		this.name = name
	}
}

let person = new Person("aldo")
console.log(person.name)

//contoh getter dan setter
class Person2 {
	constructor(name) {
		this.setName(name)
	}

	getName() {
		return this.name
	}

	setName(newName) {
		newName = newName.trim()
		if (newName === " ") {
			throw "Name tidak boleh kosong"
		}
		this.name = newName
	}
}

let person2 = new Person2("Aldo")
console.log(person2.getName())

//ES menyediakan getter dan setter khusus\
class Person3 {
	constructor(name) {
		this.name = name
	}

	set name(newName) {
		newName = newName.trim()
		if (newName === "") {
			throw "Nama tidak boleh kosong"
		}
		this._name = newName
	}

	get name() {
		return this._name
	}
}

let person3 = new Person3("aldo wiranata")
console.log(person3.name)

person3.name = "ALdo Wiranata"
console.log(person3.name)

class Person4 {
	constructor(name) {
		this._name = name
	}

	get name() {
		return this._name
	}
}

let person4 = new Person4("Wira")
console.log(person4.name)
person4.name = "wiranata"
console.log(person4.name)

//meggunakan getter and setter untuk objek literal
let meting = {
	attendes: [],
	add(attendes) {
		console.log(`${attendes} Join Meeting`)
		this.attendes.push(attendes)
		return this
	},

	get latet() {
		let count = this.attendes.length
		return count == 0 ? undefined : this.attendes[count - 1]
	},
}

meting.add("aldo wiranata").add("wira").add("pw")
console.log( `Last attends is ${meting.latet}`)

console.log("aldo wiranata 12 ")
