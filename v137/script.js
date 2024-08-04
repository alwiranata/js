function myFunction() {
	const h2 = document.getElementById("myH2")
	let html = "<p>My new paragraf</p>"
	h2.insertAdjacentHTML("afterend", html)
}

// contoh 2

let li = document.querySelector("#list")
li.insertAdjacentHTML("afterbegin", "<ul>Hello1</ul>")
li.insertAdjacentHTML("beforebegin", "<ul>Hello2</ul>")
li.insertAdjacentHTML("beforeend", "<ul>Hello3</ul>")
li.insertAdjacentHTML("afterend", "<ul>Hello4</ul>")
