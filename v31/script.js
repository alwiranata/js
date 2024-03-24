// fungsi adalah kelas 1 di js
//example
function add(a, b) {
	return a + b
}
//referensi fungsi
let sum = add
//menjalankan fungsi
console.log(sum(1, 2))

function average(a, b, fm) {
	return fm(a, b) / 2
}

console.log(average(10, 20, sum))

//Mngembalikan fungsi dari fungsi lain

function compare(propertyName) {}

let product = [
	{nama: "Iphone", price: 900},
	{nama: "Samsung Galaxy", price: 850},
	{nama: "Samsung ", price: 750},
	{nama: "Vivo ", price: 700},
]

console.log("Sort By Name :  ")
product.sort(compare("nama"))
console.table(product)

console.log("Sort By Price :")
product.sort(compare("price"))
console.table(product)

//memanggil beberapa fungsi
function cmToIn(length) {
	return length / 2.54
}

function inToCm(length) {
	return length * 2.54
}

function convert(fn, length) {
	return fn(length)
}

let inchi = convert(cmToIn, 10)
console.log(inchi)

console.log(convert(inToCm, 20))
