let note = document.getElementById("note")
console.log(note.textContent)
console.log(note.innerText)

note.textContent = "Hello World"

let menu = document.querySelector("#menu")
console.log(menu.innerHTML)

const img = '<img src="1" onerror=\'alert("hello world");\'>'
const main = document.getElementById("main")
main.innerHTML = img

let li = document.createElement("li")
li.innerText = "About us"
menu.appendChild(li)
console.log(menu.innerHTML)
