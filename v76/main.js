const timeOut = 500
const Data_Load = 5000

function getData() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const msg = "Promise.race() demo"
			resolve(msg)
		}, Data_Load)
	})
}

function showContent(message) {
	document.querySelector("#message").textContent = message
}

function timeout() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject()
		}, timeOut)
	})
}

function showLoadIndicator() {
	document.querySelector("#loader").className = "loader"
}

function hideLoaderIndicator() {
	document.querySelector("#loader").className = ""
}

const btn = document.querySelector("#btnGet")
btn.addEventListener("click", () => {
	reset()
	Promise.race([
		getData().then(showContent).then(hideLoaderIndicator),
		timeout(),
	]).catch(showLoadIndicator)
})

function reset() {
	hideLoaderIndicator()
	showContent("")
}
