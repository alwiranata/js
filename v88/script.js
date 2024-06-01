// //scope
// let x = 10
// if (x == 10) {
// 	let x = 20
// 	console.log(x)
// }
// console.log(x)

// var y = 10
// console.log(window.y)

// let b = 20
// console.log(window.b)

// for (var i = 0; i < 5; i++) {
// 	setTimeout(() => {
// 		console.log(i)
// 	})
// }

// for (var i = 0; i < 6; i++) {
// 	;(function (j) {
// 		setTimeout(() => {
// 			console.log(j)
// 		}, 2000)
// 	})(i)
// }

// //es6

// for (let i = 0; i < 6; i++) {
// 	setTimeout(() => {
// 		console.log("es6", i)
// 	}, 3000)
// }

// for (let i = 0; i < 10; i++) {
// 	setTimeout(() => {
// 		console.log((i += 2))
// 	}, 4000)
// }

var loop = 0
var loop = 20
console.log(loop)

let loop2 = 0
// let loop2 = 20
console.log(loop2)

function cek() {
	console.log(jumlah)
	let jumlah = 20
}
try {
	cek()
} catch (error) {
	console.error(`Error : ${error.message}`)
}

function cek2() {
	console.log(pw)
	var pw = 12345678
}

try {
	cek2()
} catch (e) {
	console.error(`Error :  ${e.message}`)
}

function tes() {
	let log = function () {
		console.log(pesan)
	}
	let pesan = "Hello..."
	log()
}
tes()
