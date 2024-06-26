let scorres = [10, 30, 20, 40, 10, 20]

console.log(scorres.indexOf(10))
console.log(scorres.indexOf(20))
console.log(scorres.indexOf(30))

console.log(scorres.indexOf(50, -1)) // 5 (from(indexOf = 5 -1))
console.log(scorres.indexOf(50, -3)) // -2 (from(indexOf = 5 -2))

let users = [
	{name: " ALDO ", age: 10},
	{name: "WIRANATA", age: 11},
	{name: "12 ", age: 10},
]

console.log(
	users.indexOf({
		name: " ALDO ",
		age: 10,
	})
)

function find(nedle, haystack) {
	if (typeof nedle !== "number") {
		throw new TypeError("Masukkan hanya angka")
	}
	var result = []
	var idx = haystack.indexOf(nedle)
	while (idx != -1) {
		result.push(idx)
		idx = haystack.indexOf(nedle, idx + 1)
	}
	return result
}
console.log(find(20, scorres))

console.log(scorres.lastIndexOf(10))
console.log(scorres.indexOf(10))
