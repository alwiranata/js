//es5

let circles = [10, 20, 30]
let areas = []
let area = 0

// for (let i = 0; i < circles.length; i++) {
// 	area = Math.floor(Math.PI * circles[i] * circles[i])
// 	areas.push(area)
// }

// console.log(areas)

//ES6

function circleArea(radius) {
	return Math.floor(Math.PI * radius * radius)
}
areas = circles.map(circleArea)
console.log(areas)

let numbers = [9, 16, 25]
let result = numbers.map(Math.sqrt)
console.log(result)
