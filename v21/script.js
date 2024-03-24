// if ... else  percabangan boolean diantara true dan false
/* 
  if{
    --statement1
  }else {
    --statment 2
  }
*/

//tidak menggunakan {}
let age = 18
if (age == 18) console.log(`Your age ${age}, Can Login`)
else console.log("Dont Login access")

//menggunakan {}
if (age >= 19) {
	console.log("You Have access for Login")
} else {
	console.log("Dont have access Login")
}

age = 17
let country = "ID"
if (age == 17 && country == "ID") {
	console.log("Login Success")
} else {
	console.log("Login Failed")
}

let no = prompt("Masukan Hari")
let hari
if (no == 0) {
	hari = "Sunday"
} else if (no == 1) {
	hari = "Monday"
} else if (no == 2) {
	hari = "Tuesday"
} else if (no == 3) {
	hari = "Wednesday"
} else if (no == 4) {
	hari = "Thursday"
} else if (no == 5) {
	hari = "friday"
} else {
	hari = "saturday"
}
console.log(hari)

