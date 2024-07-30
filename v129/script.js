let div = document.createElement("div")
div.innerHTML = "<h1>Hello World</h1>"
document.body.appendChild(div)

//menambahkan text ke dalam element
let div2 = document.createElement("div")
div2.id = "content"
div2.className = "note"
let text2 = document.createTextNode("Contoh Text")
div2.appendChild(text2)

let h2 = document.createElement("h2")
h2.textContent = "Tambahkan h2 ke tag div"
div2.appendChild(h2)

const menu = document.querySelector("#menu")
let li = document.createElement("li")
li.textContent = "Produk"
menu.appendChild(li)

let contact = document.createElement("li")
contact.textContent = "Contact"
menu.appendChild(contact)
document.body.appendChild(div2)

function loadJSAsic(url) {
	let script = document.createElement("script")
	script.src = url
	script.async = true
	document.body.appendChild(script)
}

loadJSAsic("s.js")
