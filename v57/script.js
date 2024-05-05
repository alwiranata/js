class item {
	static count = 0

	static getCount() {
		return item.count
	}
}

console.log(item.count)
console.log(item.getCount())

class item2 {
	constructor(name, quantity) {
		this.name = name
		this.quantity = quantity
		this.constructor.count++
	}

	static count = 0

	static getCount() {
		return item2.count
	}

	getItem() {
		return `Name : ${this.name} , queantity : ${this.quantity}`
	}
}

let pen = new item2("pen", 5)
let noteBook = new item2("note", 10)
let pen2 = new item2("pen2 ", 10)

console.log(pen.getItem())
console.log(item2.getCount())
