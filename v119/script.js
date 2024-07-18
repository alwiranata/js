// let activity = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ]

// console.log(activity[0][2])

let activity = [
	["work", 1],
	["study", 2],
	["examp", 3],
]

console.table(activity)
console.log(activity[2][1])

activity.push(["sleep", 4])
console.table(activity)

activity.splice(1, 0, ["programing", 5])
console.table(activity)

activity.forEach((e) => {
	console.log(e)
	let add = ((e[1] / 1) * 100).valueOf()
	e[2] = add + " % "
})
console.table(activity)

activity.pop()
console.table(activity)

//loop
for (let i = 0; i < activity.length; i++) {
	var innerArrayLength = activity[i].length
	for (let v = 0; v < innerArrayLength; v++) {
		console.log("[" + `i = ${i}` + "]{" + `v = ${v}` + "] " + activity[i][v])
	}
}

console.table(activity)

activity.forEach((activity) => {
	activity.forEach((data) => {
		console.log(data)
	})
})
