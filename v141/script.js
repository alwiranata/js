let p = document.querySelector("#content")
p.style.color = "red"
p.style.fontSize = "20px"
p.style.fontWeight = "bold"

function css(e, getStyle) {
	for (const property in getStyle) {
		e.style[property] = getStyle[property]
	}
}

let div = document.querySelector("#example")
css(div, {
	backgroundColor: "yellow",
	fontSize: "20px",
	color: "blue",
})
