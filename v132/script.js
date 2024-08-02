let div = document.querySelector(".container")
let p = document.createElement("p")
p.textContent = "JS DOM"
div.appendChild(p)

div.innerHTML += "<p>JS </p>"

for (let i = 0; i < 10; i++) {
	let p = document.createElement("p")
	p.textContent = `Paragraf ${i}`
	div.appendChild(p)
}

let fragment = document.createDocumentFragment()
for (let i = 0; i < 10; i++) {
	let p = document.createElement("p")
	p.textContent = `Paragraf ${i}`
	fragment.appendChild(p)
}

div.appendChild(fragment)
