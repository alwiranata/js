const p1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise Pertama Success")
		resolve(10)
	}, 1 * 1000)
})

const p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log("Promise kedua ditolak")
		reject(20)
	}, 2 * 1000)
})

Promise.race([p1, p2])
	.then((value) => console.log(value))
	.catch((error) => console.log(error))

    
