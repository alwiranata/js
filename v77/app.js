function getImageBlob(url) {
	return fetch(url)
		.then((resolve, reject) => {
			if (!resolve.ok) {
				throw new Error(`${resolve.status}`)
			} else {
				return resolve.blob()
			}
		})
		.catch((error) => {
			console.error("HTTP Status", error)
		})
}

let cat = getImageBlob("./image/cat.jpeg")
let dog = getImageBlob("./image/dog")

Promise.any([dog, cat]).then((data) => {
	let objectURL = URL.createObjectURL(data)
	let image = document.createElement("img")
	image.src = objectURL
	document.body.appendChild(image)
})
