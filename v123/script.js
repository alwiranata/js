let loc = window.location

document.getElementById("current-url").innerText = loc.href

function changeHash() {
	loc.hash = "?type=listing&page=2#title"
	console.log("Hash telah diubah menjadi : " + loc.hash)
}

function reloadPage() {
	loc.reload()
}

function goToGoggle() {
	loc.assign("https://www.google.com")
}

function replaceGithub(){
    loc.replace("https://github.com/")
}

function loadProperty(){
    loc.load()
}