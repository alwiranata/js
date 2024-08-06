window.addEventListener("load", () => {
	console.log("window Loaded")
})

window.onload = function () {
	console.log("window Onload")
}

async function myFunction() {
	console.log("body Onload")
}

let img = document.querySelector("img")
img.addEventListener("load", () => {
	console.log("Image Loaded")
})
img.src = "profile.jpeg"
img.style.width = "100px"
img.style.borderRadius = "30px"

this.addEventListener("load", () => {
	let logo = document.createElement("img")
	logo.addEventListener("load", () => {
		console.log("logo load dinamis")
	})
	document.body.appendChild(logo)
	logo.src = "profile.jpeg"
	logo.style.width = "100px"
	logo.style.borderRadius = "30px"
})
console.log(body)
