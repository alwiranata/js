let numbers = [1, 2, 3]

if (numbers.indexOf(1) != -1) {
	console.log("Lakukan proses 2")
}

let coba = [NaN]

if (coba.indexOf(NaN) != -1) {
	console.log("Jalankan NaN")
}

console.log([1, 2, 3].includes(2))
console.log([3, 2, 1].includes(3, 0))

console.log([NaN].includes(NaN))
console.log([-1].includes(-1))

let bmw = {
	name: "BMW",
}

toyota = {
	name: "toyota",
}

ford = {
	name: "Ford",
}

let cars = [ford, toyota]

console.log(cars.includes(bmw))
console.log(cars.includes(ford))
