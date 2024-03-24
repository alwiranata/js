//function untuk constructor

function Person(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
}

let person = new Person("Aldo", "Wiranata")
console.log(person)

person = {
	firstName: "aldo",
	lastName: "wiranata",
}

console.log(person)

console.log(new Person("alwi", "wiranata"))
console.log(new Person("Farel", "Chandra"))

//menambahkan fungsi  di dalam constructor

function Profile(firstName, lastName) {
	this.firstName = firstName
	this.lastName = lastName
	this.getFullName = function () {
		return this.firstName + " " + this.lastName
	}
}

profile = new Profile("aku", "kamu")
console.log(profile.firstName)
console.log(profile.lastName)
console.log(profile.getFullName())

//object tanpa new

// profile2 = Profile("Aldo", "20")
// console.log(profile2.getFullName())

function Profile3(firstName, lastName) {
	if (!new.target) {
		// throw Error("Tolong gunakan new")
		return new Profile3(firstName, lastName)
	}
	this.firstName = firstName
	this.lastName = lastName
	this.getFullName = () => {
		return this.firstName + " " + lastName
	}
}

let profile3 = Profile3("aldo", "pw")
console.log(profile3.getFullName())
