function filter(numbers) {
	let result = []
	for (const number of numbers) {
		if (number % 2 != 0) {
			result.push(number)
		}
	}
	return result
}
let numbers = [1, 2, 3, 4, 5, 6]
console.log(filter(numbers))

//Dinamis

function isOdd(number) {
	return number % 2 != 0
}

function filter2(numbers, fn) {
	let result = []
	for (const number of numbers) {
		if (fn(number)) {
			result.push(number)
		}
	}
	return result
}

let angka = [2, 4, 3]
console.log(filter2(numbers, isOdd))

function genap(number) {
	return number % 2 == 0
}

console.log(filter2(numbers, genap))

//callback fungsi anonim

let oddNumbers = filter2(numbers, function (number) {
	return number % 2 == 0
})

console.log(oddNumbers)

//callback dengan fungsi panah
let oddNumbers2 = filter2(numbers, (number) => number % 2 != 0)
console.log("odd Numbers 2", oddNumbers2)

//

function donwlod(url) {
	setTimeout(() => {
		console.log(`Donwloading  ${url} ...`)
	}, 1000)
}

function process(picture) {
	console.log(`Proses ${picture}`)
}

let url = "https://aldo.org/pic.jpg"
donwlod(url)
process(url)

function donwlod2(url, callback) {
	setTimeout(() => {
		console.log(`Donwloading2 ${url} ...`)
		callback(url)
	}, 1000)
}

donwlod2(url, process)

donwlod2(url, (picture) => {
	console.log(`Processing 3 ${picture} ...`)
})

function donwlod3(url, success, failed) {
	setTimeout(() => {
		!url ? failed(url) : success(url)
	}, 1000)
}

donwlod3(
	"",
	(url) => console.log(`Donwloading ${url} ...`),
	(url) => console.log(`Failed Donwload ...`)
)

const url1 = "https://pw1.com"
const url2 = "https://pw2.com"
const url3 = "https://pw3.com"

donwlod2(url1, (url1) => {
	console.log(`Processing 1 ${url1}`)
	donwlod2(url2, (url2) => {
		console.log(`Processing 2 ${url2}`)
	})
	donwlod2(url3, (url3) => {
		console.log(`Processing 3  ${url3}`)
	})
})
 