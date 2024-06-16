let aldo = {
		name: " Aldo Wiranata",
	},
	wiranata = {
		name: " Wiranata",
	},
	pw = {
		name: " 1234",
	}

let userRols = new Map()
// console.log(typeof userRols)
// console.log(userRols instanceof Map)

userRols.set(aldo, "Admin")
//multi
userRols.set(wiranata, "Editor").set(pw, "Editor")
console.log(userRols.get(aldo))

let userRole = new Map([
	[aldo, "Staf Admin"],
	[wiranata, "Editor"],
	[pw, "1234"],
])

console.log(userRole.get(aldo))
console.log(userRole.get(wiranata))
console.log(userRole.get(pw))

let trials = {
	trial: "Testing",
}
// userRole.set(trials, "test")
console.log(userRole.get(trials))
console.log(userRole.has(trials))
console.log(userRole.has(aldo))

//cek length data
console.log(userRole.size)

//menampilkan view

for (let role of userRole.values()) {
	console.log(role)
}

for (let [user, role] of userRole.entries()) {
	console.log(`Name : ${user.name} &  Key : ${role}`)
}

for (const role of userRole.entries()) {
	console.log(`${role[0]} : ${role[1]}`)
}

userRole.forEach((role, user) => {
	console.log(`${user.name} : ${role}`)
})

let keys = [...userRole.keys()]
console.log(keys)
let values = [...userRole.values()]
console.log(values)

userRole.delete(aldo)
console.log(userRole.values())
console.log(userRole.keys())

userRole.clear()
console.log(userRole.size > 0 ? userRole.values() : undefined)
console.log(userRole.size > 0 ? userRole.keys() : undefined)
