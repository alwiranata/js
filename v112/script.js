//cara lama
let remark = ["1", "2", "3"]
for (let i = 0; i < remark.length; i++) {
	console.log(remark[i])
}

remark.forEach(function (e) {
	console.log("forEach", e)
})

function Counter() {
	this.count = 0
	let self = this
	return {
		increse: function () {
			self.count++
		},
		current: function () {
			return self.count
		},
		reset: function () {
			self.count = 0
		},
	}
}

var counter = new Counter()

var numbers = [1, 2, 3]

var sum = 0

numbers.forEach(function (e) {
	sum += e
	this.increse()
}, counter)

console.log(sum)
console.log(counter.current())
console.log(counter.reset())
