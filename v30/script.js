//fungsi  adalah cara menyederhanakan kode yang dipanggil berulang
//fungsi dimabil dari  kata function  diikuti nama fungsnya , parameter dan body
//function namaFunction(parameter){
// --body
//}

// 1.diawali dengan kata kerja
// 2.getName setName

function Hello(pesan) {
	console.log(pesan)
}
Hello("Welcome")

//perbedaan arguments dan parameters
//pesan diatas adalah paramteters
//arguments dibuat ketika mengambil function
//exmaple "Welcome"

let result = Hello("Selamat belajar")
console.log(result)

//return dengan expresi

function add(a, b) {
	return a + b
}
console.log("jumlah  : ", add(10, 20))

function compare(a, b) {
	if (a > b) {
		return -1
	}
	if (a < b) {
		return 1
	}
	return 0
}

console.log(compare(2, 2))

function say(pesan) {
	if (!pesan) return
	console.log(pesan)
}
say("Hai")

function add() {
	let sum = 0
	for (let i = 0; i < arguments.length; i++) {
		sum += arguments[i]
	}
	return sum
}
console.log(add(1, 3))
console.log(add(1, 2, 3))

show()
function show() {
	console.log("Hello")
}
