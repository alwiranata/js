// alert("Welcome")
// setTimeout(() => {
// 	alert("Pesan akan Muncul dalam 3 detik")
// }, 3000)

// let result = confirm("Apakah yakin ingin menghapus pesan")
// let msg = result ? "Pesan berhasil di hapus" : "pesan batal Dihapus"
// alert(msg)

// let language = prompt("Masukkan Bahasa favorit anda?")
// let js =
// 	language.toLowerCase() === "javascript"
// 		? "Wow  anda diterima kerja disini"
// 		: `${language}`
// alert(js)
// console.log(language)

let ageStr = Number(prompt("Berapa umur anda?"))
let message =
	ageStr >= 18
		? "Anda dapat melakukan transaksi"
		: "Anda tidak dapat melakukan transaksi"
alert(message)
