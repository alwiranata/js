//operator penggabungan nullish
//jika nilai pertam null / undefined maka ambil nilai ke 2
//nilai1 ?? nilai2

//contoh operasi logika
// let result = value1
// if (result == null || result == undefined) {
// 	result = value2
// }

const nama = null ?? "Aldo Wiranata"
console.log(nama)

let nama2
if (nama2 == null || nama2 == undefined) {
	nama2 = "Alwiranata"
}
console.log(nama2)

const age = undefined ?? 10
console.log(age)

let count
console.log(Boolean(count))

let result = count || 1
console.log(result)

result = undefined ?? console.log("Username")
result = null ?? console.log("Pw")

// result = null || undefined ?? "ok"
result = (null || undefined) ?? "ok"
console.log(result)
