//destructuring dngan cara lama
function getSource() {
	return [70, 80, 90]
}
let source = getSource()
let x = source[0],
	y = source[1],
	z = source[2]
console.log(x, y, z)

// ES6

let [a, b, c] = source
console.log(a, b, c)

function num() {
	return [10, 20, 30, 40]
}

let [d, e, f] = num()
console.log(d, e, f)

//all

let [h, i, ...args] = num()
console.log(h, i, args)
console.log(args)

//nilai default
function items() {
	return [10, 20]
}

let item = items()
console.log(item)

let cek = item[1] != undefined ? item[1] : 0
console.log(cek)

//ES6
let cek1
;[, , cek1 = 0] = items()
console.log(cek1)

//default with variabel
let p1, p2
;[p1 = 1, p2 = 2] = [10]
console.log(p1)
console.log(p2)

function getItem3() {
	return null
}

;[d = 1, e = 2] = getItem3() || []

console.log(d, e)

function getProfile() {
	return ["Aldo", " Wiranata", [17, "aldowiranata16@gmail.com"]]
}

let [firstName, lastName, [date, email]] = getProfile()
console.log(firstName)
console.log(lastName)
console.log(date)
console.log(email)

//array destructuring

//1 chenge variabel
;(a = 10), (b = 20)
;[a, b] = [b, a]
console.log(a, b)

//menegembalikan banyak nilai

function star(a, b) {
	return [a + b, (b - a) / 2, a - b]
}

let [sum, average, diff] = star(10, 20)
console.log(sum)
console.log(average)
console.log(diff)
