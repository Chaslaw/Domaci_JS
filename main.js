//TASK 1 :
//Peter has 3500$, and Jim has 5000$, print if Peter has more money than Jim (console log result, true of false)


var Peter = 3500;
var Jim = 5000; 

console.log (Peter > Jim);

//TASK 2 :
//John is 38 years old. In 8 years John will be two times older than Mike. How old is Mike now (console log result)


var John = 38;
var Mike = (John + 8)/2; //moglo je i sve u jednoj liniji (John + 8)/2-8; ali                               sam ga malo zakomplikovao cisto radi vezbe :)
var nowMike = Mike - 8;

Mike = nowMike;

console.log (Mike);

//TASK 3 :
//There are 78 birds in a first flock, and 57 birds in a second flock. 
//12 birds decided to move from the first flock to the second flock, 
//and then 4 birds left second flock. 
//Is the first flock larger or equal to the second one ? (console log result, true or false)

var firstFlock = 78;
var secondFlock = 57;

firstFlock -= 12;
secondFlock += 12;

var finalSecondFlock = secondFlock - 4;

console.log (firstFlock >= finalSecondFlock);


