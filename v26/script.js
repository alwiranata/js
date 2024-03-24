//TODO for loop adalah perulangan dengan 3 parameter
//Parameter 1:initializer /nilai awal
//Parameter 2:condition /kondisi
//Parameter 3:iterator
//Note perintah dasarnya
/*for (initiator; condition; iterator){
    statement
}*/

for (let i = 0; i <= 4; i++) {
	console.log(i)
}

//loop tanpa initiator
let j = 1
for (; j <= 10; j += 2) {
	console.log(j)
}
//for loop tanpa condition
for (let j = 1; ; j += 2) {
	console.log(j)
	if (j > 10) break
}

//for loop tanpa expresion
j = 1
for (;;) {
	if (j > 10) break
	console.log(j)
	j += 2
}

// for loop tanpa  body
let sum = 0
for (let i = 0; i < 3; i++, sum += i) {}
console.log(sum)
