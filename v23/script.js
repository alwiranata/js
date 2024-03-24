// switch adalah cara sederhana untuk if bersarang
//untuk pengecekan Boleean
let day = Number(prompt("Massukkan Angka"))
let nama
switch (day) {
	case 1:
		nama = "Sunday"
		break
	case 2:
		nama = "Monday"
		break
	case 3:
		nama = "Tusday"
		break
	case 4:
		nama = "Wednesday"
		break
	case 5:
		nama = "Thursday"
		break
	case 6:
		nama = "Friday"
		break
	case 7:
		nama = "Satruday"
		break
	default:
		nama = "Tidak valid"
		break
}

console.log(nama)

let year = prompt("Masukkan Tahun")
let y
let month = Number(prompt("Masukkan Bulan"))
let day1
switch (month) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		day1 = "31"
		break

	case 4:
	case 6:
	case 9:
	case 11:
		day1 = "30"
		break

	case 2:
		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			day1 = 29
		} else {
			day1 = 28
		}
		break
	default:
		day1 = "Data Tidak Tersisi"
		month = "Data Tidak Tersisi"
		year = "Data Tidak Tersisi"
		y = "Data Tidak Terisi"
		break
}

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
	y = "Ini Adalah Tahun Kabisat"
} else {
	y = "Ini Bukan Tahun Kabisat"
}

console.log("Tahun :", year, "/", y)
console.log("Bulan :", month)
console.log("Day :", day1)
