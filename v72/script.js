function getUser() {
	return [
		{
			username: "Aldo",
			email: "aldowiranata16@gmail.com",
		},
		{
			username: "My",
			email: "my@gmail.com",
		},
	]
}

function findUser(username) {
	const users = getUser()
	const user = users.find((user) => user.username === username)
	return user
}
console.log(findUser("My"))

//contoh dengan delay

function getUser2() {
	let users2 = []
	setTimeout(() => {
		users2 = [
			{
				username: "Aldo",
				pw: "1234",
			},
			{
				username: "Wiranata",
				pw: "1234",
			},
		]
	}, 1000)
	return users2
}

function findUser2(username) {
	const users2 = getUser2()
	const user2 = users2.find((user2) => user2.username === username)
	return user2
}

console.log(findUser2("Wiranata"))

function getUser3(callback) {
	setTimeout(() => {
		callback([
			{
				username: "Aldo",
				pw: "1234",
			},
			{
				username: "Wiranata",
				pw: "1234",
			},
		])
	}, 1000)
}

function findUser3(username, callback) {
	getUser3((users) => {
		const user = users.find((users) => users.username === username)
		callback(user)
	})
}

findUser3("Aldo", console.log)

const succes = true
function getUser4() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (succes) {
				reject(new Error("Data Error"))
			} else {
				resolve([
					{
						username: "Aldo",
						pw: "1234",
					},
					{
						username: "WIranata",
						pw: "1234",
					},
				])
			}
		}, 1000)
	})
}

function add(users) {
	console.log(users)
}
function failed(error) {
	console.error(error)
}

const data = getUser4()
data.then(add).catch(failed)

let success = true
function getUser5() {
	return new Promise((resolve, reject) => {
		if (success) {
			setTimeout(() => {
				resolve([
					{
						username: "Aldo",
						pw: "2323",
					},
					{
						username: "2391238",
						pw: "Aldo",
					},
				])
			}, 1000)
		} else {
			reject(new Error("Failed data"))
		}
	})
}

const proms = getUser5()
proms
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		console.error(error)
	})
