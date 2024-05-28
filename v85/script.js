const add = (x, y) => x + y

try {
	let result = add(10, 20)
	console.log(result)
} catch (e) {
	console.error({
		name: e.name,
		message: e.message,
	})
}

console.log("Bye")

const isValidaitionJSON = (str) => {
	try {
		JSON.parse(str)
		return true
	} catch {
		return false
	}
}
let valid = isValidaitionJSON(`{
    "language" : "Javascript"
}`)

console.log(valid)
