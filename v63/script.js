const person = {
	firstName: "Aldo",
	lastName: "Wiranata",
}

function greeat(greating, message) {
	return `${greating} ${this.firstName} ${this.lastName} ${message} `
}
let result = greeat.apply(person, ["Hello", "How are you?"])
console.log(result)

//Meminjam fungsi

const computer = {
	name: "HP",
	isOn: false,
	turnOn() {
		this.isOn = true
		return `The ${this.name} is On`
	},
	turnOff() {
		this.isOn = false
		return `The ${this.name} is Off`
	},
}

const server = {
	name: "IBM POWER PC",
	isOn: false,
}

let result2 = computer.turnOn.apply(server)
console.log(result2)

//Menambahkan array ke array yang lain
let arr = [1, 2, 3]
let number = [4, 5, 6]
arr.push.apply(arr, number)
console.log(arr)
