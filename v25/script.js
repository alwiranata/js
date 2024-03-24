//Todo do while adalah perintah perulangan untuk mengeksekusi block sampai bernilai false
//Note ini berbeda dengan while , do while minimal dieksekusi 1 kali ketika dijalankan

/* 
do{
  statement
} while (expression)
*/

let count = 0

do {
	console.log(count)
	count++
} while (count <= 5)

//Game random Number

const MIN = 1
const MAX = 10
let scriptNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN

let guess = 0

let hint = ""

let userNumber = 0
do {
	let input = prompt(`Masukkan nilai antara ${MIN} dan ${MAX}${hint}`)

	if (input === null) {
		// Handle null input (when user cancels the prompt)
		alert("Permainan dibatalkan.")
		break
	}

	userNumber = parseInt(input)

	if (isNaN(userNumber)) {
		// Handle non-numeric input
		alert("Masukkan angka yang valid.")
		continue
	}

	guess++

	if (userNumber > scriptNumber) {
		hint = ", dan lebih kecil dari " + userNumber
	} else if (userNumber < scriptNumber) {
		hint = ", dan lebih besar dari " + userNumber
	} else if (userNumber === scriptNumber) {
		alert(`Selamat! Anda benar setelah ${guess} tebakan.`)
	}
} while (userNumber !== scriptNumber)
