//then catch finally : promise
//example

let success = true
function getUsers() {
	return new Promise((resolve, reject) => {
		if (success) {
			setTimeout(() => {
				resolve([
					{
						username: "Aldo",
						pw: "239390",
					},
					{
						username: "Wiranata",
						pw: "39123",
					},
				])
			}, 1000)
		} else {
			reject("Failed Get Data")
		}
	})
}

function get(users) {
	console.log(users)
}

function error(error) {
	console.error(error)
}

const user = getUsers()
user.then(get, error)

//sederhanakan
user.then(
	(users) => console.log(users),
	(error) => console.error(error)
)

//catch method
let access2 = true
function getUser2() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (access2) {
				resolve([
					{
						username: "Aldo Wiranata",
						pw: "23923219",
					},
					{
						username: " Aldo",
						pw: "Wiranata",
					},
				])
			} else {
				reject("Failed Data")
			}
		}, 1000)
	})
}

const users2 = getUser2()
users2.catch((users2) => console.error(users2))

//finaly method

const render = () => {
	console.log("Proccess Render")
}

getUser2()
	.then((users2) => {
		console.log(users2)
	})
	.catch((error) => {
		console.error(error)
	})
	.finally(() => {
		render()
	})
