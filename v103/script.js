let numbers = [1, 2, 3, 4, 5]
console.log(numbers.find((e) => e % 2 == 0))

let costumer = [
	{
		name: "Aldo",
		credit: 100,
	},
	{
		name: "Wiranata",
		credit: 200,
	},
	{
		name: "gmail",
		credit: 300,
	},
]

console.log(costumer.find((c) => c.credit < 300 && c.credit > 100))
