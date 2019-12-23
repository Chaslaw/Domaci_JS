// TASK 5:
// Create the other object which should inherit data from existing object. Then console.log age by accessing the newly created object.

var person = {
	name: "Jack",
	age: 32,
	married: true
};

var other = Object.create (person);

console.log(other.age);


// Task6
// Create a method which, when called, should console.log name and age of existing object.

var person = {
	name: "Mike",
	age: 28,
    married: true,
    callMe: function (){
        console.log(this.name);
        console.log(this.age);

    }
}

person.callMe();

// TASK 7
// Create a method which should create name, age and married properties in existing object, based on parameters passed in method.


var person = {
    newData: function (){
        this.name="Mike";
        this.age=36;
        this.married=false;
    }
}
person.newData();




















