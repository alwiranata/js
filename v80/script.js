function getUserBy(id) {
	if (typeof id !== "number" || id < 0) {
		throw new Error("Invailid Id")
	}

	return new Promise((resolve, reject) => {
		resolve({
			id: id,
			username: "admin",
		})
	})
}

try {
	getUserBy("10")
		.then((user) => {
			console.log(user.username)
		})
		.catch((error) => console.error(error))
} catch (error) {
	console.error(`Data  ${error}`)
}

//error di dalam promise

let autorize = false
function getUserBy2(id) {
	return new Promise((resolve, reject) => {
		if (!autorize) {
			// throw new Error("Anda tidak mendapatkan akses")
			reject("Anda Tidak diberikan akses")
		} else {
			resolve({
				id: id,
				username: "Aldo",
			})
		}
	})
}

try {
	getUserBy2(10)
		.then((user) => {
			console.log(user.username)
		})
		.catch((err) => console.error(`Terjadi Error : ${err}`))
} catch (err) {
	console.error(`Error By trycatch : ${err}`)
}
