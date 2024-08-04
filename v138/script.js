let menu = document.getElementById("menu")
let li = document.createElement("li")
li.textContent = "Home"

// menu.replaceChild(li, menu.children[0])
menu.replaceChild(li, menu.firstElementChild)

// clone node
let menu2 = document.getElementById("menu")
let cloneMenu = menu2.cloneNode(true)
cloneMenu.id = "menu-mobile"
document.body.appendChild(cloneMenu)

//remove child
let menu3 = document.getElementById("menu")
menu3.removeChild(menu3.lastElementChild)

//replace child

let menu4 = document.getElementById("menu")
let li4 = document.createElement("li")
li4.textContent = "App"
menu4.insertBefore(li4, menu4.firstElementChild)
