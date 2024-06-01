try {
} catch (error) {
} finally {
	//selalu dijalankan benar /salah
}

const add = (x, y) => x + y
let result = 0

try {
	result = add(10, 20)
	console.log(result)
} catch (e) {
	console.error(`ERROR : ${e}`)
} finally {
	setTimeout(() => {
		console.log("Finish")
	}, 1000)
}

function fn() {
	try {
		return 1
	} catch {
		return 2
	} finally {
		return 3
	}
}
 
console.log(fn())
