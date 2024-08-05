let menu = document.querySelector("#menu")
console.log(menu.className)

//menambahkan class
menu.className += " new"
console.log(menu.className)

menu.classList.add("menu2")
console.log(menu.className)

//sepenuhnya menggantikan
menu.className = "clas1 clas2"
console.log(menu.className)

let div = document.querySelector("#contact")
for (let cssClastList of div.classList) {
	console.log(cssClastList)
}

div.classList.add("pw", "email", "login")
console.log(div.className)

//menghapus class

div.classList.remove("pw")
console.log(div.className)

div.classList.remove("login", "email")
console.log(div.className)

div.classList.replace("main", "add")
console.log(div.className)

let hasil = div.classList.contains("add")
console.log(hasil)

div.classList.toggle("main")
console.log(div.className)

div.classList.toggle("add")
console.log(div.className)
