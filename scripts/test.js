function sayHello(name) {
	if (!name) return "error";
	console.log("Hello " + name);
	return "hi there: " + name;

	console.log("not executed");
}

function testFn() {
	let x = "Shane";
	let res = sayHello(x);
	console.log(res);
}

function travel(city) {
	return "Traveling to " + city;
}
let t1 = travel("Monaco");
let t2 = travel("Rome");
console.log(t1, t2);

function Dog(name, a) {
	this.name = name;
	this.age = a;
	this.owner = "Shane";
}
class Cat {
	constructor(name, age, color) {
		this.name = name;
		this.age = age;
		this.color = color;
	}
	roar() {
		console.log("I'm roarrinngggg!");
	}
}
function testObj() {
	//obj literal
	let lola = {
		name: "Lola",
		age: "3",
	};
	console.log(lola);
	//obj constructor
	let fido = new Dog("Fido", 4);
	let scooby = new Dog("Scooby", 60);
	console.log(fido);
	console.log(scooby);
	//class
	let a = "Garfield";
	let garfield = new Cat(a, 30, "Orange");
	console.log(garfield);
	garfield.color = "Blue";
	//use the objects
	console.log(lola.name);
	console.log(fido.age);
	garfield.roar();
}
