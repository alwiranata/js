var counter = 1
var showCounter = () => console.log(counter)
console.log(window.counter)
window.showCounter()

//1.ukuran window
var width = window.innerWidth
var height = window.innerHeight
// console.log(width, height)

width = document.documentElement.clientWidth
height = document.documentElement.clientHeight
// console.log(width, height)

//2.membuka window baru
let url = "google.com"
// window.open(url, "goggle")

//3.fitur untuk window
let feature = "height=500 , width=300"
// window.open(url, "google", feature)

//Membuka window baru
// setTimeout(() => {
// 	window.open(url, "google", feature)
// }, 1000)

let jsWindow = window.open("goggle.com", "goggle", "height=500 , width=300")

// setTimeout(() => {
// 	jsWindow.resizeTo(1000, 2000)
// }, 3000)

// setTimeout(() => {
// 	jsWindow.moveTo(1000, 200)
// }, 5000)

setTimeout(() => {
	jsWindow.close()
}, 3000)
