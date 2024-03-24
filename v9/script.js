//javascript object
let kosong = {}
console.log(kosong)

let person = {
	firstName: "Aldo",
	lastName: "wiranata",
}
//view all object
console.log(person)
//view object first
console.log(person.firstName)
//view object second
console.log(person.lastName)

//view get object with array
console.log(person["firstName"] + " " + person["lastName"])
console.log(person["firstName"])
console.log(person["lastName"])

let adress = {
	nomor: "24",
	street: "Kesuma",
	province: "Riau",
}
//just get with array
//not recomented
console.log(adress["nomor"])

//add atribute object person
person.firstName = "Alwi"
console.log(person)

//change atribute object person
person.age = "17"
person.gender = "L"
console.log(person)

//delete atribute object person
delete person.gender
console.log(person)

// cek property objek
console.log("firstName" in person) //ada value ketika di cek  hasilnya  == true
console.log("gender" in person) //tidak ada value karena sudah di delete == false
