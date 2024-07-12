let number = new Array(2)
console.log(number.length)
console.log(number[0])

number = new Array("2")
console.log("str.length", number.length)
console.log("str", number[0])

number = Array.of(3)
console.log(number.length)
console.log(number[0])

let numbers = Array.of("A", "B", "C")
console.log(numbers.length)
console.log(numbers[0])

numbers = new Array(3, 2)
console.log(numbers.length)
console.log(numbers[0])
