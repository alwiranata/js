let input = document.getElementById("username")
for (let atter of input.attributes) {
	console.log(atter.name, ": ", atter.value)
}

let input2 = document.querySelector("#username")
input2.setAttribute("placeholder", "Masukkan Username : ")
input2.setAttribute("tabindex", 2)
console.log(input2.getAttribute("tabindex"))
