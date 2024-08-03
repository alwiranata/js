const app = document.querySelector("#app")
let lists = ["Typescript", "React", "JS"]
let nodes = lists.map((item) => {
	let li = document.createElement("li")
	li.textContent = item
	return li
})
app.prepend(...nodes)

const app2 = document.querySelector("#app2")
app2.prepend("prepend() demo")
console.log(app2.textContent)
