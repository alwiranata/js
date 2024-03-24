//operator logika
//!NOT -> membalikakan nilai true menjadi false dan nilai false menjadi true
//||OR -> salah satu harus true
//&& AND -> keduanya harus true

//!
let tersedia = true,
	kebutuhan = 0
//jika typenay dan valuenya bernilai false hasilnya true dan sebaliknya
console.log(!tersedia)
console.log(!kebutuhan)

console.log(!undefined)
console.log(!null)
console.log(!0)

console.log(!{}) //Objeck bernilai true
console.log(!"") //Bernilai false
console.log(!false)
console.log(!true)

let counter = 10
//2 negasi nilai awal true berarti true -> fasle -> true
console.log(!!counter)

//AND
//bernilai true jika keduanya true
console.log("true: ", true && true)
console.log("false: ", false && true)
console.log("false: ", false && false)

let b = true
console.log(b && 1 / 0)
b = false
console.log(b && 1 / 0)
console.log(true && true && true)
console.log(false && true && true)

//OR
console.log(true || true)
console.log(false || false)
console.log(true || false)
console.log(false || true)
console.log(true || false || true)
console.log(false || false || false)
