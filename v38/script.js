let person = {
	nama: "Aldo Wiranata",
}

console.log(person)

//ilustrasi prototype
console.log(typeof Object)
//object anonim yang dapat didefinisikan
console.log(Object.prototype)
//cek prortotype constructor adalah representasi dari objek
console.log(Object.prototype.constructor === Object)

function Person(name) {
	this.name = name
	return name
}

console.log(Person("aldo"))
console.log(Person.prototype)

Person.prototype.greeat = function () {
	if (typeof this.name === "number") {
		return "Id : " + this.name + "!"
	}
	return "Name : " + this.name + "!"
}

let Num = new Person(20)
console.log(Num.greeat())
console.log(Num.toString())
// console.log(Num.flay())

let String1 = new Person("Aku")
console.log(String1.greeat())
//prototype untuk dirinya sendiri

String1.draw = function () {
	return "Ayo menggambar;"
}

console.log(String1.draw())
// console.log(Num.draw())

//method bayargan

Num.greeat = function () {
	console.log("Hello World")
}

console.log(Num.greeat())
