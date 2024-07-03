let ranks = [1, 2, 3, 4, 5, 6, 7]
let index = ranks.findIndex((rank) => rank == 1)
console.log(index)

const products = [
	{name: "kue", price: 10000},
	{name: "bolu", price: 15000},
	{name: "kerupuk", price: 20000},
]

const index2 = products.findIndex((product) => product.price >= 15000)
console.log(index2)
