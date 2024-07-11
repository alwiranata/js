let odds = [1, 3, 5]
let evens = [2, 4, 6]
let combined = odds.concat(evens)
console.log(combined)
console.log(odds)

combined = [].concat(evens, odds)
console.log(combined)

let Upper = ["A", "B", "C"]
let lower = ["a", "b", "c"]
let digit = [1, 2, 3]
let alphanumerik = Upper.concat(lower, digit)
console.log(alphanumerik)

let color = ["Red", "Green", "Blue"]
let rgb = color.concat()
console.log(rgb)

let moreColor = color.concat("Yellow", "Purple")
console.log(moreColor)

let kombinasi = [...Upper, ...lower]
console.log(kombinasi)
