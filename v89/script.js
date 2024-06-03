let setObject = new Set()

let array = new Set(["A", "B", "C", "A"])

console.log(array)
console.log(typeof array)

let result = array instanceof Set
console.log(result)
console.log(array.size)

array.add("D")
console.log(array)

array.add("E").add("F")
console.log(array)

let cek = array.has("A")
console.log(cek)

array.delete("A")
console.log(array)

array.clear()
console.log(array.size)

let rools = new Set()
rools.add("Programer").add("QA").add("PM")
for (let rool of rools) {
	console.log(rool)
}

rools.forEach((data) => console.log(data.toUpperCase()))

let server = {
	type: "11",
}

let computer = {
	type: "Laptop",
}

let equipment = new WeakSet([server, computer])

if (equipment.has(computer)) {
	console.log(`Computer : ${computer.type}`)
}

if (equipment.has(server)) {
	console.log(`Server : ${server.type}`)
}
