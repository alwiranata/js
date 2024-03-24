// Ternary -> untuk mengeksekusi block dengan pengecekan boolean yang lebih sederhana
//
let age = 18
let message
if (age >= 16) {
	message = "You can get driving"
} else {
	message = "you can't get drive"
}
console.log(message)

//sederhanakan

age >= 19 ? (message = " you can get drive") : (message = "you can't get drive")
console.log(message)

//alternatif

message = age >= 19 ? "you can get drive" : "you can't get drive"
console.log(message)

// let auth = false
// let url = auth
// 	? (alert("Login Success"), "/admin")
// 	: (alert("Can't Login"), "/403")
// console.log(url)

let loced = 1
let changed = loced != 1 ? true : false
console.log(changed)

//sederhanakan
loced = 1
changed = loced != 1
console.log(changed)

//multi
let speed = -2
let run =
	speed >= 120
		? "Sangat Kencang"
		: speed >= 80
		? "Cepat"
		: speed >= 1
		? "Lambat"
		: " Tidak Bergerak"

console.log(run)
