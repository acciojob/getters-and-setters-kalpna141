class Person {
	constructor(name, age)
	{
		this._name=name;
		this._age=age;
	}
	get name(){
		return this._name;
	}
	set age(newage)
	{
		this._age= newage;
	}
	get age(){
		return this._age;
	}
}

class Student extends Person {
	constructor(name,age)
	{
		super(name,age);
	}
	study(){
		console.log(this.name + " is studying")
	}
}

class Teacher extends Person {
	constructor(name,age)
	{
		super(name,age);
	}
	teach(){
		console.log(this.name + " is teaching");
	}
}

const john= new Student('John', 20);
const sarah= new Teacher('sarah', 30);

console.log(john.name);
console.log(john.age); 

john.study(); 

console.log(sarah.name); 
console.log(sarah.age); 

sarah.teach();