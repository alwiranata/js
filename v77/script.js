const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise 1 Ditolak")
		reject("Data Error")
	}, 1000)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise 2 Ditolak")
		reject("Data Failed")
	}, 2000)
})

const p = Promise.any([p1, p2])
p.catch((e) => {
	console.log("Retruned Promise")
	console.error(e, e.errors)
})
