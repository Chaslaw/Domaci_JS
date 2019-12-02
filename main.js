//Task 1

var a = 15;
var b = -2;
var c = 22;
var d = 0;
var e = 13;

if (a>b && a>c && a>d && a>e) {
    console.log ("The largest number of all is " + a);
}else if ( b>a && b>c && b>d && b>e) {
    console.log ("The largest number of all is " + b);
}else if (c>a && c>b && c>d && c>e) {
    console.log ("The largest number of all is " + c);
} else if (d>a && d>b && d>c && d>e) {
    console.log ("The largest number of all is " + d);
}else {
        console.log ("The largest number of all is " + e);
    }

//Task 2

var a = 3;
var b = -7;
var c = 2;

if (a>0){
    console.log ("+"+a);
}else {
    console.log (a);
}

if (b>0) {
    console.log ("+"+b);
}else {
    console.log (b);
}

if (c>0) {
    console.log ("+"+c);
}else {
    console.log (c);
}

//Task 2, take 2

var a = 3;
var b = -7;
var c = 2;

if (a>0 && b>0 && c>0){
    console.log ("+"+a+" "+"+"+b+" "+"+"+c);
}else if (a<0 && b<0 && c<0){
    console.log (a+""+b+"  "+c);
}else if (a<0 && b>0 && c>0) {
    console.log (a+" "+"+"+b+" "+"+"+c)
}else if (a>0 && b<0 && c>0){
    console.log ("+"+a+", "+b+", "+"+"+c)
}else if (a>0 && b>0 && c<0){
console.log ("+"+a+" "+"+"+b+" "+c);
}

//Task 2, take 3

var a = 3;
var b = -7;
var c = 2;
var product = a*b*c;

if (product>0) {
    console.log("+");
} else {
    console.log("-");
}

//Task 3

var language = "Serbian";

switch (language) {
    case "Serbian":
        console.log("Zdravo svete");
    case "English":
        console.log("Hello world");
    case "Spain":
        console.log("Buenos dias");
    case "Italian":
        console.log("Buon giorno");
    default:
        console.log("Saluton mondo");
      }

//Task 3, take 2

var language = "Hello World";

switch (language) {
    
    case "English":
        console.log("Hello world");
        break;
    case "Serbian":
        console.log("Zdravo svete");
        break;
    case "Italian":
        console.log("Ciao mondo");
        break;
    case "Esperanto":
        console.log("Saluton mondo");
        break;
     case "Hello World":
        console.log("Hello World" + ", " + "Zdravo svete" + ", " + "Saluton mondo" + ", " + "Ciao mondo" + ", " + "Привет мир");

//Task 4

var userAge = 36;

userAge > 28 ? console.log("true") : console.log("false");

var result = "true";

if (!result) {
    console.log ("User is less than 28 years old");
} else {
    console.log(true);
}

if (userAge>28) {
    console.log ("User is older than 28 years old");
}else {
    console.log("User is 28 years old");
}
