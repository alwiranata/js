import {message} from "./message.js"

const msg = message
const h1 = document.createElement("h1")
h1.textContent = msg

document.body.appendChild(h1)

//ambil dari log

import {pw, setMessage} from "./log.js"

console.log(pw)
setMessage("aldo")
console.log(pw)

//import beberapa bidang
import {a, b, result, sum, multiply} from "./cal.js"

console.log(result)
sum()
console.log(result)
console.log(multiply)
multiply()
console.log(result)

//import menggunakan objek
import * as cal from "./cal.js"

cal.a
cal.b
cal.sum()
console.log(cal.result)
cal.multiply()
console.log(cal.result)
