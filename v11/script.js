//Tambah(+)
//Kuramg (-)
//Bagi (/)
//Kali(*)

//tambah
let sum = 10 + 20
console.log(sum)

//pengurangan
//untuk mendeklarasikan var di tempat yang sama gunakan (,) untuk pemisah
let price = 7.99,
	pay = 8.99
console.log(price - pay)

//penjumlah string
let x = "10",
	y = "20"
console.log(x + y)

//penjumlahAan string dengan numeric
let tambah = 10 + "20"
console.log(tambah)

//pengurangan string dengan numeric
let kurang = 20 - "20"
console.log(kurang)

//perkalian string dengan numeric
let kali = 20 * "20"
console.log(kali)

//pembagian string dengan numeric
let bagi = 20 / "20"
console.log(bagi)

//object
let energy = {
	valueOf() {
		return 100
	},
}
let energyNow = energy - 10
console.log(energyNow) //90 -10
console.log(energyNow + 10) //90+10
console.log(energyNow * 2) //90*2
console.log(energyNow / 2) //90/2
