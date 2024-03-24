//Modulus / sisa bagi is symbol %
//perintah dasar modulus devided % devisor

let remain = 5 % -2
console.log(remain) //-2 * -2 = 4 -> 5 - 4 = 1

remain = 5 % 2
console.log(remain) // 2 * 2 = 4 -> 5 - 4 = 1

remain = -5 % 3
console.log(remain) // -1 * 3 = -3 -> -5 - (-3) = -2
//-1 didapat dari 3 X berapa yang mendekati -5 = -1

remain = Infinity % 2
console.log(remain) // Not a Number -> NaN

remain = 10 % 0
console.log(remain) // Not a Number -> NaN

remain = 10 % Infinity
console.log(remain) //hasilnya bilangan itu sendiri

remain = 0 % 1
console.log(remain) //hasinya bilagan 0

//with string
remain = "10" % 3
console.log(remain) //tetap teroperasika seperti biasa

//get ganjil genap step with declaration
let num = 14
let isOdd
if (num % 2 == 0) {
	isOdd = `${num} adalah bilagan gemap`
} else {
	isOdd = `${num} adalah bilagan ganjil`
}
console.log(isOdd)

//get ganjil genap with function
function isOdd2(num1) {
	if (num % 2) {
		return `${num1} adalah bilagan genap`
	} else {
		return `${num1} adalah bilagan ganjil`
	}
}
console.log(isOdd2(13))
//maka hasilkan 1 jika  ganji;genap hasilkan 0
