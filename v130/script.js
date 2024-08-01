function createMenuItem(name) {
	var li = document.createElement("li")
	li.textContent = name
	return li
}

const menu = document.getElementById("menu")

menu.appendChild(createMenuItem("Home"))
menu.appendChild(createMenuItem("Service"))
menu.appendChild(createMenuItem("About"))

const firstList = document.querySelector("#first-list")
const secondList = document.querySelector("#second-list")
const everest = firstList.firstElementChild
secondList.appendChild(everest)

function addItem() {
	var node = document.createElement("li")
	var text = document.createTextNode(
		prompt("Masukkan  text untuk menambahkan : ")
	)
	node .appendChild(text)
    document.getElementById("myList").appendChild(node)

}
