let p = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10)
	}, 3 * 10)
})
p.then((result) => {
	console.log(result)
	return result * 2
})
	.then((result) => {
		console.log(result)
		return result * 3
	})
	.then((result) => {
		console.log(result)
		return result * 4
	})
	.then((result) => {
		console.log(result)
	})

let p2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10)
	}, 3 * 100)
})
p2.then((result) => {
	console.log(result)
	return result * 2
})
p2.then((result) => {
	console.log(result)
	return result * 3
})
p2.then((result) => {
	console.log(result)
	return result * 4
})

let p3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(10)
	}, 3 * 100)
})

p3.then((result) => {
	console.log(result)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(result * 2)
		}, 3 * 100)
	})
})
	.then((result) => {
		console.log(result)
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(result * 3)
			}, 3 * 100)
		})
	})
	.then((result) => {
		console.log(result)
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(result * 4)
			}, 1000)
		})
	})

let p4 = new Promise((resolve, reject) => {
	const n = true
	setTimeout(() => {
		if (n == true) {
			resolve(10)
		} else {
			reject("Data Failed")
		}
	}, 1000)
})

p4.then((result) => {
	console.log(result)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(result * 3)
		}, 1000)
	})
}).catch((error) => {
	console.error(error)
})

function generateNumber(num) {
	return new Promise((resolve, reject) => {
		const status = true
		setTimeout(() => {
			if (status == true) {
				resolve(num)
			} else {
				reject("Failed Data")
			}
		}, 3 * 10)
	})
}

generateNumber(10)
	.then((result) => {
		console.log("function", result)
		return generateNumber(result * 2)
	})
	.then((result) => {
		console.log("function", result)
	})
	.catch((error) => {
		console.error(error)
	})

//operasi async

function getUser(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userId == 1) {
				reject("Failed data")
			} else {
				resolve({
					Id: userId,
					username: "Aldo",
				})
			}
		}, 1000)
	})
}
function getService(user) {
	return new Promise((resolve, reject) => {
		console.log(user.username)
		setTimeout(() => {
			resolve(["EMAIL", "CDN", "VPN"])
		}, 1000)
	})
}

function getServiceCost(service) {
	return new Promise((resolve, reject) => {
		console.log(service)
		setTimeout(() => {
			resolve(service.length * 100)
		}, 1000)
	})
}

getUser(0)
	.then(getService)
	.then(getServiceCost)
	.then(console.log)
	.catch((error) => console.error(error))
