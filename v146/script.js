function show() {
	alert("hello world")
}

let btn = document.getElementById("btn")
btn.onclick = function () {
	alert("add text")
}

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", show)

let btn3 = document.getElementById("btn3")
btn3.addEventListener("click", () => {
	alert("add succes")
})
