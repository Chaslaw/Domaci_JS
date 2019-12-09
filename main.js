
//Task 1

function reverseArray() {

    var dataOld = [1,2,3,4,5,6];
    var dataNew = [];
    
    for (var i = dataOld.length-1; i>=0; i--){
        dataNew[dataOld.length-1 - i] = dataOld[i];
    }
        console.log(dataNew);
}
reverseArray();

//Task 2

var anyParametar = function (a) {

console.log(typeof a);
} 

anyParametar(true);

//Task 3

function longestName () {

    var names = ["Mia", "Anna", "Mikel", "Allexandridoss", "Konstantinos"];
    var parametarLength = 0;
    var longest="";
    
    for (var i=0; i<names.length; i++){

        if (names[i].length > parametarLength){
            parametarLength=names[i].length;
            longest = names[i];
        }
  }
console.log(longest);
}

longestName();

//Task 4

function second () {
var numbers = [1, 2, -3, 44, 532, 622, 7, -4, 921, -20, -13];

var largest = 0;
var secondLargest = 0;
var smallest = 0;
var secondSmallest = 0;

for (var i=0; i<numbers.length; i++){
    if (numbers[i] > largest){
        secondLargest = largest;
        largest=numbers[i];
    }
    else if (numbers[i] > secondLargest){
        secondLargest = numbers[i];
    }
}

for (var i=0; i<numbers.length; i++) {
    if (numbers[i]<smallest){
        secondSmallest = smallest;
        smallest=numbers[i];
    }
    else if (numbers[i] < secondSmallest){
        secondSmallest = numbers[i];
    }
}
console.log(secondLargest, secondSmallest);
}

second();

//Task 5

function numbers (arr, number) {
   
    getBigger(arr, number);
}
numbers([45, 33, 75, 2, 9, 1, -2, 05, 87, 234, 333, 89], 4)


function getBigger (list, singleNumber) {
   
    var result = [];
    for (var i=0; i< list.length; i++){
        if(list[i] > singleNumber){
            result[i]=list[i];
        }
    }
    console.log(result);
}





