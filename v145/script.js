let btn = document.querySelector("#btn")
function add() {
	alert("Hello World")
}

// btn.addEventListener("click", add)

// btn.addEventListener("click", (event) => {
// 	console.log(event.type)
// })

let goggle = document.querySelector("a")
goggle.addEventListener("click", (event) => {
	console.log("di Klik")
	event.preventDefault()
})

document.body.addEventListener("click", (event) => {
	console.log("body sudah diklik")
})
btn.addEventListener("click", function (event) {
	console.log("tombol sudah diklik")
	event.stopPropagation()
})
