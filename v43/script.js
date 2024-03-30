//Note for ...in loop digunakna untuk object enumrable
//for (const name  propertyName in Object){
//  --statemen
//}

let person = {
	firstName: "Aldo",
	lastName: "Wiranata",
	nis: "23193913813",
}

for (const props in person) {
	console.log(props + " : " + person[props])
}

var declaration = {
	color: "red",
}

var circle = Object.create(declaration)
circle.radius = 10

for (const prop in circle) {
	console.log(prop + " : " + circle[prop])
}

for (const props in circle) {
	if (circle.hasOwnProperty(props)) {
		console.log(props)
	}
}

//For IN loop untuk array
const items = [10, 20, 30]
let total = 1

for (const item in items) {
	total *= items[item]
}

console.log(total)

var array = []
array[2] = 3
for (let i = 0; i < array.length; i++) {
	console.log(array[i], " indexnya " + i)
}
console.log("----------------------------")
for (const key in array) {
	console.log(array[key], key)
}
