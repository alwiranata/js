//NOTE perintah continue adalah melanjutkan proses dan melewatkan proses dibawahnya
//TODO continue
for (let i = 0; i < 10; i++) {
	if (i % 2 === 0) {
		continue
	}
	console.log(i)
}

console.log("====================================")
console.log("While")
console.log("====================================")

let i = 0
while (i < 10) {
	i++
	if (i % 2 == 0) {
		continue
	}
	console.log(i)
}

for (let i = 1; i < 3; i++) {
	for (let j = 1; j < 3; j++) {
		console.log(i, j)
	}
}

console.log("====================================")
console.log("outer")
console.log("====================================")

outer: for (let i = 1; i < 3; i++) {
	for (let j = 1; j < 3; j++) {
		if (i + j == 3) continue outer
		console.log(i, j)
	}
}

       
