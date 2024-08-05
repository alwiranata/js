const message = document.querySelector(".message")
let style = getComputedStyle(message)
console.log("color : ", style.color)

console.log("backgroundColor :", style.backgroundColor)
console.log("borderRadius :", style.borderRadius)

const p = document.getElementById("main")
const style2 = getComputedStyle(p, "::first-letter")
console.log(style2.borderRadius)
