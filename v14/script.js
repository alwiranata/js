//Js Unary operator
let x = "10"
let y = +x //fungsi + bisa merubah type dari stirng jadi number
let z = "11"
console.log(typeof y)
console.log(typeof z)

let f = false,
	t = true
console.log(+f) //numeric dari bo0lean false = 0
console.log(+t) //numeric dari boelean true = 1

// Aldo
let person = {
	name: "Aldo Wiranata",
	toString: function () {
		return 25
	},
	valueOf: function () {
		return "30"
	},
}
console.log(typeof +person)

let x1 = 10
let y1 = -x1
console.log(y1)

let age = 17
++age //+ 1
console.log(age)
//=>
age = age + 1
console.log(age)

let weight = 90
--weight
console.log(weight)

weight = ++weight + 5
console.log(weight)

weight = --weight + 5
console.log(weight)
//++weight dijumlahkan dulu baru dioperasikan
//weight++  dioperasikan dulu baru dijumlahkan
let newWeight = weight++ + 5
console.log(weight)
console.log(newWeight)
