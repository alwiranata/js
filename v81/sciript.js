// //before ES6

// function getUser(userId, callback) {
// 	console.log("Ambil data dari database")
// 	console.log("------------------------")
// 	setTimeout(() => {
// 		callback({
// 			userId: userId,
// 			username: "Aldo",
// 		})
// 	}, 1000)
// }

// function getService(user, callback) {
// 	console.log(user.userId)
// 	console.log(`Get User : ${user.username} From API`)
// 	console.log("------------------------")
// 	setTimeout(() => {
// 		callback(["email", "Pw"])
// 	}, 2 * 1000)
// }

// function getServiceCost(services, callback) {
// 	console.log(`Calculate Service Cost ${services} `)
// 	setTimeout(() => {
// 		callback(services.length * 10)
// 	}, 3 * 1000)
// }

// //gunakan callback bersarang
// getUser(1, (user) => {
// 	getService(user, (services) => {
// 		getServiceCost(services, (cost) => {
// 			console.log(`Service Cost adalah ${cost}`)
// 		})
// 	})
// })

//ES6

function getUser2(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (userId == 1) {
				resolve({
					userId: userId,
					username: "aldo",
				})
			} else {
				reject("Login ditolak")
			}
		}, 1000)
	})
}

function getService2(user) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve([user.userId, user.username])
		}, 2 * 1000)
	})
}

function getServiceCost2(services) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(services.length * 100)
		}, 3 * 1000)
	})
}

try {
	getUser2(1)
		.then(getService2)
		.then(getServiceCost2)
		.then(console.log)
		.catch((error) => {
			console.error(error)
		})
} catch (error) {
	console.error("Error : ", error)
}

//ES 2017

async function show() {
	try {
		let user = await getUser2(1) //resolve
		let services = await getService2(user) //resolve
		let Cost = await getServiceCost2(services) //resolve
		console.log("Get Async Await :", Cost) //hasil
	} catch (error) {
		console.error(` ${error}`)
	}
}

show()

//kata kunci async

async function sayHai() {
	return "Hello"
}

async function sayHai2() {
	return Promise.resolve("Hello2")
}

let sayHai3 = async function () {
	return "Haii"
}

sayHai3 = async () => "Haii Ald0"

class Greatter {
	async sayHai3() {
		return "Hai29"
	}
}

let greeting = new Greatter()

greeting.sayHai3().then(console.log)

async function display() {
	let result = await sayHai3()
	console.log(result)
}

display()

async function getUser1(userId) {
	try {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (userId == 1) {
					resolve({
						username: "admin",
					})
				} else {
					reject(new Error("Invailid Id"))
				}
			}, 1000)
		})
	} catch (error) {
		console.error(`Error : ${error}`)
	}
}

try {
	getUser1(20)
		.then((user) => console.log(user.username))
		.catch((err) => console.error(err))
} catch (error) {
	console.error(`Wrong : ${error} `)
}
