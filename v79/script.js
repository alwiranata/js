// Promise.then((result) => {
// 	//prosses result
// 	//clean up
// }).catch((error) => {
// 	//error handling
// 	//clean up
// })

// Promise
// .then((result) => {
// 	//prosses result
// })
// 	.catch((error) => {
// 		//error handling
// 	})
// 	.finally(() => {
// 		//clean up
// 	})

//example

class Connection {
	execute(query) {
		if (query != "insert" && query != "update" && query != "delete") {
			throw new Error(`The ${query} is not supported your Data`)
		}
		console.log(`Execute the ${query}`)
		return this
	}

	close() {
		console.log("Close the connection")
	}
}

const succes = true

function connect() {
	return new Promise((reoslve, reject) => {
		if (succes) {
			reoslve(new Connection())
		} else {
			reject("Failed Conection to Database")
		}
	})
}

let globalConnection

connect()
	.then((Connection) => {
		globalConnection = Connection
		return globalConnection.execute("insert")
	})
	.then((Connection) => {
		globalConnection = Connection
		return globalConnection.execute("update")
	})
	.catch((error) => {
		console.error(error)
	})
	.finally(() => {
		if (globalConnection) {
			globalConnection.close()
		}
	})
