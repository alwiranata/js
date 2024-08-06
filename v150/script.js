let btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
	console.log("anda mengklik tombol")
})

btn.addEventListener("mouseover", () => {
	btn.style.backgroundColor = "gray"
})

btn.addEventListener("mouseout", () => {
	btn.style.backgroundColor = "white"
})

let box = document.getElementById("box")
box.addEventListener("mousedown", () => {
	console.log("anda menekan tombol mouse")
})

box.addEventListener("mouseup", () => {
	console.log("anda Melepas tombol mouse")
})

box.addEventListener("dblclick", () => {
	box.style.backgroundColor = "gray"
})

let btn2 = document.querySelector("#btn2")
btn2.addEventListener("contextmenu", (e) => {
	e.preventDefault()
})

btn2.addEventListener("mouseup", (e) => {
	console.log(e)
	let msg = document.querySelector("#message")
	switch (e.button) {
		case 0:
			msg.textContent = "anda mengklik mouse kiri"
			break
		case 1:
			msg.textContent = "anda Mengklik tombol tengah"
			break
		case 2:
			msg.textContent = "anda mengklik tombol kanan"
			break
		default:
			msg.textContent = "anda belum mengklik"
			break
	}
})
