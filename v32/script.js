//Note anonymus function adalah fungsi yang tidak memiliki nama
//(function(){
// -statemenet
//})
//annonymusfunction tidak bisa di acccess jika tidak di simpan dalam var

let show = function () {
	console.log("Annoymus function")
}
show()

//memasuukaan annoymus function ke dalam sebuah fungsi

setTimeout(function () {
	console.log("Jalan setelah 5 detik")
}, 5000)

//fungsi yang  dieksekusi langsung dan tidak memilik nama
;(function () {
	console.log("IIFE")
})()

let person = {
	firstName: " Aldo",
	lastName: "Wiranata",
}
;(function () {
	console.log(person.firstName + " " + person.lastName)
})(person)

//ES6 dikenalakan fungsi panah => (row function)
show = function () {
	console.log("anonymus function 2")
}
show()

show = () => console.log("annonymus Function 3")
show()

let add = function (a, b) {
	return a + b
}

//row function dengan parameter
add = (a, b) => a + b
console.log(add(2, 3))
