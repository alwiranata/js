function createMachine(name, status) {
	return {
		name: name,
		status: status,
	}
}

//contoh ES6

function getMachine(name, status) {
	return {
		name,
		status,
	}
}

console.log(createMachine("Kalkulator", 1))
console.log(getMachine("Hp", 1))

//membuat literal object dari variable local

let name = "computer",
	status = "on"

let machine = {
	name,
	status,
}

console.log(machine)

//Compute property  name
name = "Machine"
machine = {
	[name]: "server",
	"Machine hour": 1000,
}

console.log(machine[name])
console.log(machine["Machine hour"])

//contoh es 6
let prefix = "machine"
machine = {
	[prefix + " name"]: "Server",
	[prefix + " hour"]: 1000,
}
console.log(machine["machine name"])
console.log(machine["machine hour"])

//Sintaks method simple
//sebelum es6
let server = {
	name: "Server",
	port: "3000",
	restart: function () {
		console.log("The " + this.name + " is starting in http://" + this.port)
	},
}

server.restart()

//ES6

server = {
	name: "Server 2",
	port: 5000,
	restart() {
		console.log("The " + this.name + " is starting in http://" + this.port)
	},
}

server.restart()

server = {
	name: "server",
	port: 5001,
	restart() {
		console.log("The " + this.name + " is starting in http://" + this.port)
	},
	"start up"() {
		console.log("The " + this.name + "is start up ...")
	},
}

server["start up"]()

console.log(server)
