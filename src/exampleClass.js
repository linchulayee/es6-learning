class User{
	constructor(username,email){
		this.username = username;
		this.email = email;
	}
	changeEmail(newEmail){
		this.email = newEmail;
	}
	//with the static key word we can access that method directly
	//using the class name without creating an instance of class.example given below
	static register(...args){//rest parameters
		return new User(...args);//spread operator
	}
	let user = new user('Jeffreyway','support@laracasts.com');
	user.changeEmail('foo@example.com');
	console.dir(user);
}
