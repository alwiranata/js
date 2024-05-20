const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise Pertama diselesaikan")
		resolve(10)
	}, 1 * 1000)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise Kedua diselesaikan")
		resolve(20)
	}, 2 * 1000)
})

const p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise Ketiga diselesaikan")
		resolve(30)
	}, 3 * 1000)
})

Promise.all([p1, p2, p3]).then((result) => {
	setTimeout(() => {
		const total = result.reduce((p, c) => p + c)
		console.log(`Result : ${result}`)
		console.log(`total : ${total}`)
	}, 1000)
})

const access = true
const p4 = new Promise((resolve, reject) => {
	setTimeout(() => {
		if (access == false) {
			console.error("Promise keempat di tolak")
			reject("Failed")
		} else {
			resolve(40)
		}
	}, 5 * 1000)
})

Promise.all([p1, p2, p3, p4]).then(console.log).catch(console.log)
