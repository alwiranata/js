//statement if akan  mnegeksekusi block jika bernilai true
//if (condition)
//statemnent
/*
  if(condition){
    --statement
  }
 */

//jika tidak menggunakan block statement  maka hanya 1 baris yang dieksekusi
let age = 18
if (age == 18) {
	console.log("umur anda 18")
	console.log("Username")
}

//if berasarang keduunya harus berhasil
age = 17
let state = "ID"
if (age == 17) {
	if (state == "ID") {
		console.log("User active")
	}
}

//penyederhanaan if bersarang
if (state == "ID" && age == 17) {
	console.log("User Active")
}
