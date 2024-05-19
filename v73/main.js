function load(url) {
	return new Promise((resolve, reject) => {
		const request = new XMLHttpRequest()
		request.onreadystatechange = function (e) {
			if (this.readyState == 4) {
				if (this.status == 200) {
					resolve(this.response)
				} else {
					reject(this.status)
				}
			}
		}
		request.open("GET", url, true)
		request.send()
	})
}

const api = "api.json"
const btn = document.querySelector("#btnGet")
const msg = document.querySelector("#message")

btn.onclick = function () {
	load(api).then(
		(response) => {
			const result = JSON.parse(response)
			msg.innerHTML = result.Message
		},
		(error) => {
			msg.innerHTML = `Error: Gagal menarik data HTTP/${error}`
		}
	)
}
