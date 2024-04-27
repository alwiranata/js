let Person = class {
	constructor(name) {
		this.name = name
	}

	getName() {
		return this.name
	}
}

let person = new Person("Aldo")

console.log(typeof Person)
console.log(person.getName())

function factory(aClass) {
	return new aClass()
}

let greeting = factory(
	class {
		sayHai() {
			console.log("Hai.....")
		}
	}
)
greeting.sayHai()

let app = new (class {
	constructor(name) {
		this.name = name
	}

	start() {
		console.log(`Starting the ${this.name} ...`)
	}
})("Awesone App")

app.start()
