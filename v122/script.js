let intervalID

function toggleColor() {
	let e = document.getElementById("flashtext")
	e.style.color = e.style.color == "red" ? "blue" : "red"
}

function stop() {
	clearInterval(intervalID)
}

function start() {
	intervalID = setInterval(toggleColor, 1000)
}
