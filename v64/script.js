let person = {
	name: "Aldo Wiranata",
	getName: function () {
		console.log(this.name)
	},
}

setTimeout(person.getName, 1000)

setTimeout(function () {
	person.getName()
}, 2000)

let f = person.getName.bind(person)
setTimeout(f, 3000)

let runner = {
	name: "runner",
	run: function (speed) {
		console.log(this.name + " Run At " + speed + " MPH")
	},
}

let flayer = {
	name: "flayer",
	fly: function (speed) {
		console.log(this.name + " fiels at " + speed + "MPH")
	},
}

var run = runner.run.bind(flayer, 20)
run()
