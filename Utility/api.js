var api = {
	getUsers() {
		return fetch('http://jsonplaceholder.typicode.com/users')
      	.then((res) => res.json()); 	
	},
	postUsers(username, password) {
		return new Promise(function(resolve, reject) {
			if(username === 'nikhil' && password == 'nikhil') {
				resolve(true);
			} else {
				reject(false);
			}
		})
	}
}

module.exports = api;