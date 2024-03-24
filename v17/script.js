// ||= penugasan OR
// &&= penugasan AND
// ??= penugasan penggabungan nullish

// x ||= y => x || (x = y)
// x &&= y => x && (x = y)
// x ??= y => x ?? (x = y)

// ||=
let _ENV

console.log(Boolean(_ENV))

_ENV ||= 3001
console.log(_ENV)

let PORT
console.log(PORT || (PORT = 2000))
console.log(PORT || 2000)

let title = "Tutorial JS"
console.log(Boolean(title))
title ||= "Not File"
console.log(title)

// &&=
let person = {
	namaDepan: "Aldo",
	namaBelakang: "Wiranata",
}
person.namaBelakang &&= "Farel"
console.log(person)

let data
data &&= "kosong"
console.log(data)

data = "x"
console.log(data && (data = "kosong"))
console.log(data && "kosong")

let user = {
	userName: "Alwi",
}
user.nama ??= "Not Name"

console.log(user)
