//   arrow function
const greeting = document.querySelector("#greeting")
const username = document.querySelector("#username")
// username.addEventListener("keyup", () => {
// 	greeting.textContent = "Hello " + this.value
// })
username.addEventListener("keyup", function () {
	greeting.textContent = "Hello " + this.value
})

//method object

const counter = {
	count: 0,
	next: () => ++this.count,
	current: () => this.count,
}

console.log(counter.next())

const counter2 = {
	count: 0,
	next() {
		return ++this.count
	},
	current() {
		return this.count
	},
}

console.log(counter2.next())
console.log(counter2.current())

function Counter() {
	this.count = 0
}

Counter.prototype.next = () => {
	return this.count
}

let no = new Counter()
console.log(no.next())
