//number
let counter = 120
console.log(typeof counter)

//boolean
counter = false
console.log(typeof counter)

//string
counter = "welcome"
console.log(typeof counter)

//undefined
let counter2
console.log(typeof counter2)
console.log(typeof undefinedVariabel)

//type data null

let obj = null
console.log(typeof null)
console.log(null == undefined)

//float jadi int jika 000.000
//because boros memory
let price = 12.5
console.log(price)
price = 200.0
console.log(price)

console.log(Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(-Number.MAX_VALUE - Number.MAX_VALUE)
console.log(Number.MAX_VALUE + Number.MAX_VALUE)

//NaN
console.log("a" / 2)
console.log(NaN / 2)

//hasilnya false karena memiliki unique sendiri
console.log(NaN == NaN)

//yang diambil yang dekalarasi terakhir
let pesan = "Hai"
pesan = pesan + " " + "Bye"

pesan = "Hai \"I am 'Aldo' Wiranata\""
console.log(pesan)

//type  data boleeean
let progres = true
let completed = false
console.log(typeof completed)

console.log(Boolean("Hi"))
console.log(Boolean(""))
console.log(Boolean(20))
console.log(Boolean(0))
console.log(Boolean(Infinity))
console.log(Boolean({foo: 100}))
console.log(Boolean(null))

//type
let s1 = Symbol()
console.log(typeof s1)

//big int
let page = 121123232312231n
console.log(typeof page)

//type data objek
let emptyobj = {}
let person = {
	namaDepan: "Aldo",
	namaAkhir: "Wiranata",
}
console.log(person)

//get json data
let contact = {
	firstName: "Aldo ",
	lastName: "Wiranata",
	email: "aldowiranata16@gmail.com",
	phone: "0895634889510",
	addres: {
		building: "24",
		street: "Riau",
		city: "Pekanbaru",
		state: "Jadirejo",
		country: "Indonesia",
	},
}

//get data
console.log(contact.firstName)
console.log(contact.lastName)
console.log(contact.email)
//get undefined - no data
console.log(contact.age)

//get object from subobject
console.log("country : ", contact.addres.country)
console.log("bulding : ", contact.addres.building)
console.log("street : ", contact.addres.street)
