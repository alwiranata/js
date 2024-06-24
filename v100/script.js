let numbers = [1, 2, 3, 4, 5]
let newNumbers = numbers.slice(1, 3)
console.log(newNumbers)
console.log(numbers)

let colors = ["red", "grenn", "blue", "yellow"]
let rgb = colors.slice(0, 3)
console.log(rgb)

function toArray() {
	return Array.prototype.slice.call(arguments)
}
var clasification = toArray("A", "B", "C")
console.log(clasification)
