//komparasi
// < lebih kecil
// > lebih besar
// <= lebih kecil sama dengan
// >= lebih besar sama dengan
// != tidak sama dengan
//=== strict sama dengan
//!== strict tidak sama dengan

let r1 = 20 > 10
let r2 = 20 < 10
let r3 = 10 == 10

console.log(r1, r2, r3)

//perbandigan string berdasarkan huruf pertamanya
let name1 = "alise",
	name2 = "bob"
console.log(name1 < name2)

console.log(name1 === "alise")

//perbadingan huruf besar //menggunakan .toLowerCase()
let f1 = "apple",
	f2 = "Banana"
console.log(f1 < f2)
console.log(f1.toLowerCase() < f2.toLowerCase())

console.log(10 < "20")
console.log(10 == "10")

let apple = {
	valueof: function () {
		return 10
	},
}

let orange = {
	toString: function () {
		return "20"
	},
}

console.log(apple > 11)
console.log(orange == 20)

console.log(true > 0) // nilai true == 1
console.log(false < 1) // nilai false == 0
console.log(true > false)
console.log(false > true)
console.log(true >= false)
console.log(true <= false)
console.log(false <= false)

console.log("hasil : ", null == undefined)
console.log(null == 1)
console.log(NaN == 1)
console.log(NaN == NaN) //karena NaN digenerate mengeluarkan unique number
console.log(NaN != NaN)
console.log(NaN != 1)

//strict type data juga dibandingakn
console.log("10" == 10)
console.log("10" === 10) //type data tidak sama
console.log("10" !== 10) //type data tidak sama true value sama 10
console.log("10" != 10) //type data boleh beda cuman membandingkan value
console.log(10 !== 10)
console.log("10" === "10")
