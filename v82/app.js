import {message} from "./message.js"

const msg = message
const h1 = document.createElement("h1")
h1.textContent = msg

document.body.appendChild(h1)

//ambil dari log

// import {pw, setMessage} from "./log.js"

// console.log(pw)
// setMessage("aldo")
// console.log(pw)

//import beberapa bidang
import {a, b, result, sum, multiply} from "./cal.js"

const panjang = a
const lebar = b
const hasil = result
const penjumlahan = sum()

console.log(panjang)
console.log(lebar)
console.log(hasil)
console.log(penjumlahan)
console.log(multiply(10, 10))

//import menggunakan objek
import * as cal from "./cal.js"

console.log(cal.a)
console.log(cal.b)
console.log(cal.result)
console.log(cal.sum())
console.log(cal.multiply(10, 20))
