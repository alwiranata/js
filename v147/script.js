this.addEventListener("DOMContentLoaded", () => {
	console.log("DOMContentLoaded full loaded")
})

this.addEventListener("load", () => {
	console.log("load full loaded")
})

document.addEventListener("beforeunload", () => {
	console.log("BeforeunLoad full loaded")
})

addEventListener("unload", () => {
	console.log("unload full loaded")
})
