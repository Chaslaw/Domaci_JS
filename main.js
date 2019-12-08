//Task 1

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];


for (var i = 0 ; i < 4; i++) {
   dataNew[i]=dataOld[i];
}
    console.log (dataNew);
    

//Task 2

var dataOld = [34, true, "Peter", 1992];
var dataNew = [];

for (var i = dataOld.length-1; i>=0; i--){
    dataNew[dataOld.length-1 - i] = dataOld[i];
}
console.log(dataNew);

//Task 3

var dataOld = [34, true, "Peter", 1992];
var dataNew = [12, "Jack"];

for(var i=0; i < dataOld.length; i++){
    dataNew [dataNew.length++]=dataOld[i];
}
console.log (dataNew);

//Task 4 (Ovde problem može da pravi 
//nova varijabla c koja uzima vrednost varijable a)

var a = [12, 56, 32, 44, 69];
var b = [88, 7, 13];
var c = a;

for(var i=0; i < b.length; i++){
   a[a.length++]=b[i];
}

console.log(c);

//Task 5

var a = [12, 56, 32, 44];
var b = [88, 7, 13]
var c = [];

for (var i = 0; i < a.length; i++) {
	for (var j = 0; j < b.length; j++) {
		c[2*i] = a[i];
		c[2*j + 1] = b[j];
	}
}

console.log(c);

//Task 6 (Znam da se document.write() ne koristi, 
//ipak, ostavio sam ga kako bih video rezultat na monitoru)


 for (var i=1; i<=6; i++){
     for (var j=1; j<=i; j++){
        document.write("*");
    }
    document.write("<br/>");
 }

 //Task 7 (Nisam zadovoljan ovim, nikako nisam uspevao 
 //da napravim resenje koje mi daje jasne razmake izmedju
 //bocnih strana kvadrata, kasnije sam video kako bih mogao
 //ali nisam napisao jer nije moje originalno resenje)
 var n =" ";
 for (var i=1; i<=6; i++){
     for (var j=1; j<=10; j++){
         if (i>1 && i<6 && j>1 && j<10 ) {
 
         document.write(n*j);
     }
     else  {
         document.write("*");
     }
 }
 document.write("<br/>");
 }









   













