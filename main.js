// TASK 1: 
// Based on existing object:
// Create a function which should change age to 34, and delete married property. In the end console.log object.

var person = {
	name: "Mike",
	age: 28,
	married: true
}

function changeDelete () {
    person.age = 34;
    delete person.married;

    console.log(person);
}

changeDelete();


// TASK 2: 

// Based on existing object:
// Create a function which should check if person has children property, if not add it. Its value should be array containing two objects with children data. Each object should contain child name, age and gender.


var person = {
	name: "Jack",
	age: 32,
	married: true
}



function child () {
    
    if (typeof person.children===null){
        console.log(person);
    }
    else { person.children=[{},{}];
 person.children[0].name="Mike";
 person.children[0].age=8;
 person.children[0].gender="male";
 person.children[1].name="Anna";
 person.children[1].age=9;
 person.children[1].gender="female";}

    console.log(person);
}
child();

// TASK 3:
// Based on existing array of objects:
// Create a function which should console.log if student passed exam, result should be something like:
// "Jack passed exam" or "Mike didn't pass exam"


var students = [ 
    {
        name: 'Mike',
        age: 28,
        passed: false
    },
    {
        name: 'Anna',
        age: 23,
        passed: true
    },
    {
        name: 'Jack',
        age: 32,
        passed: true
    },
 ];

 function passExame (){

    for (var i=0; i<students.length; i++)
     if (students[i].passed==false){
         console.log(students[i].name + " didn't pass exam")
     }
     else{
        console.log(students[i].name + " passed exam")
     }
 }

 passExame();


 // TASK 4:
//  Create a function which should repack existing data into three arrays, names, ages, and passed. Example of names array:

var students = [ 
    {
        name: 'Mike',
        age: 28,
        passed: false
    },
    {
        name: 'Anna',
        age: 23,
        passed: true
    },
    {
        name: 'Jack',
        age: 32,
        passed: true
    },
 ];

 function repack () {

    var names = [];
    var age = [];
    var passed = [];
     
 for (var i=0; i<students.length; i++){
         names[i]=students[i].name;
         age[i]=students[i].age;
         passed[i]=students[i].passed;
     }
     console.log(names);
     console.log(age);
     console.log(passed);
}

repack();
















