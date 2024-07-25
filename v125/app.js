const apps = {
	Goggle: "https://www.google.com/",
	Ios: "https://www.apple.com/",
}

let os_platform = "android"
const platform = () => {
	if (os_platform == "goggle") {
		return "Goggle"
	} else if (os_platform == "ios") {
		return "Ios"
	} else {
		return "Android"
	}
}

const redirect = () => {
	let os = platform()
	if (os in apps) {
		location.href = apps[os]
	} else {
		const message = document.querySelector(".message")
		message.innerHTML = "Platform not found"
	}
}

redirect()
