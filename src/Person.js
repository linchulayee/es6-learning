class Person{
	constructor(name){
		this.name = name;
	}
	greet(){
		return this.name + 'says hello.';//review template stings
	}
}
console.log(new Person('linchu').greet());