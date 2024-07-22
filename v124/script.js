const urlParams = new URLSearchParams(location.search)
for (const [key, value] of urlParams) {
	console.log(`${key} : ${value}`)
}

//keys()
const urlParams2 = new URLSearchParams("type=list&page=100")
for (const key of urlParams2.keys()) {
	console.log(key)
}

//values()
const urlParams3 = new URLSearchParams("type=list&page=101")
for (const value of urlParams3.values()) {
	console.log(value)
}

//entries()
const urlParams4 = new URLSearchParams("type=add&page=102")
for (const entries of urlParams4.entries()) {
	console.log(entries)
}

//cek apakah ada query parameter string
console.log(urlParams4.has("add"))
console.log(urlParams4.has("page"))
