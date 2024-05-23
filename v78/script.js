const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise 1 Finsih")
		resolve(10)
	}, 1 * 1000)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise 2 Failed")
		reject(20)
	}, 2 * 1000)
})

Promise.allSettled([p1, p2]).then((data) => {
	console.log(data)
})
