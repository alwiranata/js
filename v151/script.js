let message = document.getElementById("message")
// message.addEventListener("keydown", (event) => {
// 	console.log("keydownn :" + event.key)
// 	console.log("keydownn : " + event.location)
// })

// message.addEventListener("keypress", (event) => {
// 	console.log("keypress : " + event.key)
// 	console.log("keypress :" + event.location)
// })

// message.addEventListener("keyup", (event) => {
// 	console.log("keyup :" + event.key)
// 	console.log("keyup:" + event.location)
// })

message.addEventListener("keyup", (event) => {
	if (event.key == "Enter" || event.which == "13") {
		let msg = document.getElementById("msg")
		msg.textContent = message.value + " key :" + event.key
	}
})
