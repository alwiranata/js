function add(x, y) {
	if (typeof x != "number") {
		// throw "Argument pertama bukan number"
		throw new Error("Argumnet Pertama bukan number ")
	}
	if (typeof y != "number") {
		// throw "Argumnet kedua bukan number "
		throw new Error("Argument Kedua bukan number")
	}
	return x + y
}

try {
	const result = add(10, 20)
	console.log(result)
} catch (e) {
	console.error(`${e.name} :  ${e.message}`)
}

class NumberError extends Error {
	constructor(value) {
		super(`${value} bukan number`)
		this.name = "Invailid number"
	}
}

function plus(a, b) {
	if (typeof a != "number") {
		throw new NumberError(a)
	}

	if (typeof b != "number") {
		throw NumberError(b)
	}

	return a + b
}

try {
	const plus1 = plus("2", 30)
	console.log(plus1)
} catch (e) {
	console.error(`${e.name} : ${e.message}`)
}

