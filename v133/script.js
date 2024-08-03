document.addEventListener("DOMContentLoaded", () => {
	let fragment = document.createDocumentFragment()

	const div1 = document.createElement("div")
	const div2 = document.createElement("div")
	const div3 = document.createElement("div")

	div1.textContent = "Element 1"
	div2.textContent = "Element 2"
	div3.textContent = "Element 3"

	fragment.appendChild(div1)
	fragment.appendChild(div2)
	fragment.appendChild(div3)

	const parent = document.getElementById("parent")
	parent.appendChild(fragment)

	let languages = ["JS", "HTML", "CSS", "PHP", "PYTHON", "JAVA"]
	let lang = document.querySelector("#lang")
	let fragment1 = new DocumentFragment()
	languages.forEach((language) => {
		let li = document.createElement("li")
		li.textContent = language
		fragment1.appendChild(li)
	})
	lang.appendChild(fragment1)
})
