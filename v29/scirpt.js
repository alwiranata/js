//NOTE operasi comma mengevaluasi dari kiri ke kanan  dan mnegembalikan nilai
let result = (10, 40 + 30)
console.log(result)

let x = 10
let y = (x++, x + 1)
console.log(x, y)

x = 10
x++
y = x + 1
console.log(x, y)

let board = [1, 2, 3, 4, 5, 6]
let s = " "

for (let i = 0, j = 1; i < board.length; i++, j++) {
	s += board[i] + " "
	if (j % 3 == 0) {
		console.log(s)
		s = " "
	}
}
