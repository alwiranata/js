// import {show} from "./dialog.js"

// const getShow = show

// let btn = document.querySelector("#show")
// btn.addEventListener("click", function () {
// 	getShow()
// })

// let btn = document.querySelector("#show")
// btn.addEventListener("click", function () {
// 	import("./dialog.js")
// 		.then((dialog) => {
// 			dialog.show("Hai dari Es2020")
// 		})
// 		.catch((error) => console.error(error))
// })

// let btn = document.querySelector("#show")
// btn.addEventListener("click", function () {
// 	;(async () => {
// 		try {
// 			let dialog = await import("./dialog.js")
// 			dialog.show("Hai dari ES2020")
// 		} catch (error) {
// 			console.error(`error : ${error}`)
// 		}
// 	})()
// })

let btn = document.querySelector("#show")
btn.addEventListener("click", function () {
	;(async () => {
		try {
			let {show, hide} = await import("./dialog.js")
			show("Hai dari ES2020")
			hide()
		} catch (error) {
			console.error(`error : ${error}`)
		}
	})()
})
