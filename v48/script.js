function getUser(id) {
	if (id <= 0) {
		return null
	}
	//get data from db
	//kembalikan null jika tidak ada data
	//jika ada kita kembalikan data
	return {
		id: id,
		userName: "admin",
		profile: {
			avatar: "/avatar.png",
			language: "Enghlish",
		},
	}
}

let user = getUser(1)
let profile = user.profile
let id = user.id
let userName = user.userName

console.log(id)
console.log(userName)
console.log(profile)

user = getUser(0)
profile = user && user.profile
console.log(profile)

//ES2020 chainign symbol  ( ?. )

//objectName ?. propertName
//objectName ?. (propert)
let user2 = getUser(0)
let profile2 = user2?.profile
console.log(profile2)

//secara teknis sama dengan

let user3 = getUser(2)
let profile3 = user3 !== null || user3 != undefined ? user3.profile : "No data"

console.log(profile3)

console.log("-----------------------")
//menumpuk operator chaining
let user4 = getUser(-1)
let avatar = user4?.profile?.avatar
console.log(avatar)

//menegmabalikan degan nullish

let defaultProfile = {
	default: "default.png",
	language: "Indonesia",
}
let user5 = getUser(-1)
let profile5 = user5?.profile ?? defaultProfile
console.log(profile5)

//optional dengan pemanggilan fungsi
let file = {
	read() {
		return "File content"
	},
	write(content) {
		console.log(`Writing ${content} to file`)
		return true
	},
}

let data = file.read()
console.log(data)

let compressData = file.compressData?.()
console.log(compressData)

//before

function getUser2(id, callBack) {
	let user = {
		id: id,
		userName: "Admin",
	}
	if (callBack) {
		callBack(user)
	}
	return user
}

console.log(getUser2(1, user))

//after

function getUser3(id, callBack) {
	let user = {
		id: id,
		userName: "Admin",
	}
	callBack?.(user)
	return user
}

console.log(getUser3(2, user))
