let btnSend = document.getElementById("btnSend")
if (btnSend) {
	btnSend.addEventListener("click", () => {
		btnSend.setAttribute("name", "send")
		btnSend.setAttribute("disabled", true)
		check()
	})
}

// getAtribute
let goggle = document.getElementById("google")
if (goggle) {
	let target = goggle.getAttribute("target")
	console.log(target)
	let title = goggle.getAttribute("title")
	console.log(title)
}

let draft = document.getElementById("draft")
if (draft) {
	draft.removeAttribute("disabled")
}

let btn = document.getElementById("btnSend")
if (btnSend) {
	let has = btn.hasAttribute("id")
	console.log(has)
}

function check() {
	let disabled = btn.hasAttribute("disabled")
	console.log(disabled)
}
