//complete this code
class Person {
	constructor(name, age)
	{
		this.name=name;
		this.age=age;
	
	}
	get name(){
		return this.name;
	}
	set age(newage)
	{
		this.age= newage;
	}
	get age(){
		return this.age;
	}
}

class Student extends Person {
	constructor(name,age)
	{
		super(name,age);
	}
	study(){
		console.log(this.name "is studying")
	}
}

class Teacher extends Person {
	constructor(name,age)
	{
		super(name,age);
	}
	teach(){
		console.log(this.name "is teaching");
	}
}

const john= new Student('John', 20);
const sarah= new Student('sarah', 30);

console.log(john.name);
console.log(john.age); 

john.study(); 

console.log(sarah.name); 
console.log(sarah.age); 

sarah.teach(); 








// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
