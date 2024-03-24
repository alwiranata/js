//Boleean adalah type data primitf
let pending = false
let done = true
console.log(typeof pending)
console.log(typeof done)

// Boolean type object
let a = Boolean("Hai")
console.log(a)
console.log(typeof a)

let b = Boolean(false)
console.log(b)
console.log(typeof b)
console.log(b.valueOf())
console.log(b.toString())

//JS boolean vs Objek boolean
let active = new Boolean() //object Boolean
let completed = true //primitve == langsung

active.primitveValue = active.valueOf()
console.log(active.primitveValue)

completed.name = "primitive"
console.log(completed.name)

console.log(typeof active)
console.log(typeof completed)

console.log(completed instanceof Boolean)
console.log(active instanceof Boolean)

//object Boolean
let falseObj = new Boolean(true)
console.log(falseObj)
console.log(falseObj.valueOf())

if (falseObj.valueOf()) {
	console.log("Ini ternyat Run")
}

//primitif boolean = false
let object = true
if (object) {
	console.log("Ini Primitif Boolean == true")
}

//primitf boolean = false
let object1 = false
if (object1) {
	console.log("ini tidak akan dijalankan karena == false")
}
