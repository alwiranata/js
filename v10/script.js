//Array
let score = new Array()
console.log(score)

//get Array
score = new Array(10, 20, 30)
console.log(score)

//string array
score = new Array("Aldo")
console.log(score)

//can be directly defined
score = Array(20, 30)
console.log(score)

//can be directly defined type Array
let color = ["Red", "Green", "Blue"]
console.log(color)

//this is include in type array
warna = []
console.log(warna)

//called value from array
//Value array start from index 0
let province = ["Riau", "Sumbar", "Aceh"]
console.log(province[0]) //get index
console.log(province[1]) //get index
console.log(province[2]) //get index

//Change index
province[1] = "Lampung"
console.log(province)

//Length started from 1
console.log(province.length)

//add  value to  last line type array
province.push("Jatim")
console.log(province)

//add value to first line type array
province.unshift("IKN")
console.log(province)

//delete/replace value to last line type array
const valueLast = province.pop()
console.log(valueLast)
console.log(province)

//delete/replace value to first line type array
const valueFirst = province.shift()
console.log(province)

//get index array
let idx = province.indexOf("Riau")
console.log(idx)
//check this type var provinece is type array
console.log(Array.isArray(province))
