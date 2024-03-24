//NOTE pass by value dan pass by refrence
//Java script akana menyalin value ke dalam argument
//setiap perubahan pada fungsi tidak mempengaruhi luar
//example

//pass by refrence
function square(x) {
	x = x * x
	return x
}

let y = 10
let result = square(y)
console.log(result)
console.log(y)

//contoh pass by value

let person = {
	name: "ALdo",
	age: 17,
}

function tambahUmur(obj) {
	obj.age += 1
}

tambahUmur(person)
console.log(person)

//tidak bisa  merubah properti
person = {
	name: "Alwi",
	age: 17,
}

function tambahUmur(obj) {
	obj.age += 1
	obj = {name: "Aldo Wiranata", age: 30}
	console.log("aku", obj)
}

tambahUmur(person)
console.log(person)
