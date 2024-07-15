let sentence = ["JS", "", "PHP", "", "PYHTON"]
let add = sentence.map((e) => e.split(" "))
console.log(add)
let result = add.flat(Infinity)
console.log(result)

let result2 = sentence.flatMap((s) => s.split(" "))
console.log(result2)

let cart = [
	{
		name: "Smartphone",
		qty: 3,
		price: 5000,
		freeOFChange: false,
	},
	{
		name: "Tablet",
		qty: 1,
		price: 8000,
		freeOFChange: false,
	},
]

let newCat = cart.flatMap((item) => {
	if (item.name === "Smartphone") {
		return [
			item,
			{
				name: "PS",
				qty: item.qty,
				price: 5000,
				freeOFChange: true,
			},
		]
	} else {
		return item
	}
})

console.log(newCat)
