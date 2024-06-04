const add = [1, 2, 3]
const num = [...add, 4, 5, 6]
console.log(num)

function pw(a, b, ...args) {
	console.log(a)
	console.log(b)
	console.log(args)
}

pw(1, 2, 3, 4, 5)

let key1 = [...num, 7, 8]
let key2 = [0, ...key1, 9]
let key3 = [-2, -1, ...key2]
console.log(key1)
console.log(key2)
console.log(key3)

//ES5

function compare(a, b) {
	return a - b
}

let result = compare.apply(undefined, [1, 2])
console.log(result)

//ES6

result = compare(...[1, 2])
console.log(result)

//ES%
let str = ["aldo", "Email", "PW"]
let name = ["Name", "Aldo@gmail.com", "12320"]
;[].push.apply(name, str)
console.log(name)

//ES6

str.push(...name)
console.log(str)

//Memanipulasi array

let arr = ["Aldo", "Wiranata"]
let arg = ["Name : ", ...arr]
console.log(arg)

let add1 = [...arg, ...arr]
console.log(add1)

let score = [70, 80, 90]
let finaly = [...score]
console.log(finaly)

let str1 = ["A", ..."BC", "D"]
console.log(str1)
