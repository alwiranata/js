let cities = [
	{name: "Pekanbaru", population: 3921912},
	{name: "Jakarta", population: 231922019320},
	{name: "Medan", population: 40923034},
]

//cara lama
let bigCities = []
for (let i = 0; i < cities.length; i++) {
	if (cities[i].population > 40000000) {
		bigCities.push(cities[i])
	}
}

console.log(bigCities)

//cara baru
let bigCities2 = cities.filter((e) => {
	return e.population > 40000000
})

console.log(bigCities2)

let result = cities
	.filter((city) => city.population < 40000000)
	.sort((c1, c2) => c1.population - c2.population)
	.map((city) => city.name + ":" + city.population)

console.log(result)
//
function isInRange(value) {
	if (typeof value != "number") {
		return false
	}
	return value >= this.lower && value <= this.upper
}

let range = {
	lower: 1,
	upper: 20,
}

let data = ["212", 3, "Aldo", 20]

let numberRange = data.filter(isInRange, range)

console.log(numberRange)
