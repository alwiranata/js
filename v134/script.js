const h1 = document.querySelector("h1")
const p = document.createElement("p")
p.textContent = "Ini adalah JS demo"
h1.after(p)

//lebih dari satu
const list = document.querySelector("ul")
const lists = ["HTML", "CSS", "JS"]
const items = lists.map((item) => {
	const li = document.createElement("li")
	li.innerText = item
	console.log(li)
	return li
})

list.lastChild.after(...items)

const button = document.querySelector("button")
button.firstChild.after(" aja")
