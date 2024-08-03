const parent = document.getElementById("parent-div")

const newH2 = document.createElement("h2")
const newP1 = document.createElement("p")
const newP2 = document.createElement("p2")

newH2.innerText = "Ini adalah H2 new"
newP1.innerText = "Ini adalah P1 new"
newP2.innerText = "Ini adalah P2 new"

parent.append(newH2, newP1, newP2)

//

let app = document.getElementById("app")
let apps = ["PHP", " REACT", " TYPESCRIPT"]
let nodes = apps.map((item) => {
	let li = document.createElement("li")
	li.textContent = item
	return li
})
app.append(...nodes)

console.log(app.textContent)
