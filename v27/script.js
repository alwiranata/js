//break == menghentikaan project
//break [label]
for (let i = 0; i <= 5; i++) {
	console.log(i)
}

for (let i = 0; i <= 5; i++) {
	console.log(i)

	if (i == 2) {
		console.log(i, "Stop disini")
		break
	}
}

console.log("====================================")
console.log()
console.log("====================================")

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		console.log("loop", i, j)
	}
}

console.log("====================================")
console.log()
console.log("====================================")

for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		if (i + j == 4) {
			break
		}
		console.log("loop", i, j)
	}
}
console.log("====================================")
console.log("Label")
console.log("====================================")

outher: for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		if (i + j == 4) {
			break outher
		}
		console.log("loop", i, j)
	}
}

console.log("====================================")
console.log()
console.log("====================================")
i = 0
while (i < 5) {
	i++
	console.log(i)
}

i = 0
while (i < 3) {
	i++
	console.log(i)
	if (i == 2) {
		break
	}
}

console.log("====================================")
console.log("Do while")
console.log("====================================")

i = 0
do {
	i++
	console.log(i)
} while (i < 5)

i = 0
do {
	i++
	console.log(i)
	if (i == 3) {
		break
	}
} while (i < 5)
