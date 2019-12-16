// TASK 1:
// Create a function that should receive an array, and return an array in reverse order. Result should be stored in a variable

function reverseArray(dataOld) {

    var dataNew = [];
    
    for (var i = dataOld.length-1; i>=0; i--){
        dataNew[dataOld.length-1 - i] = dataOld[i];
    }
        console.log(dataNew);
}
reverseArray([1,2,3,4,5,6]);

// TASK 2: 
// Create a function that should receive parameter of any type, and console log the type of received data


var anyParametar = function (a) {
    console.log(typeof a);
} 

anyParametar(true);
anyParametar("Peter");
anyParametar(36);

// TASK 3: 
// Create a function that should receive an array of at least five names, 
// and return the length of the longest name in the array 
// (hint - you can get the length of an string the same way as for array). 
// Result should be stored in a variable

function longestName (names) {

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

longestName(["Mia", "Anna", "Mikel", "Allexandridoss", "Konstantinos"]);

// TASK 4: 
// Create a function that should receive an array of numbers, find the second lowest and second greatest number, and console log result

function second (numbers) {

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

second([1, 2, -3, 44, 532, 622, 7, -4, 921, -20, -13]);

// Isti ovaj zadatak mogao sam da uradim i tako sto bih prvo poredjao niz od najmanjeg ka najvecem, a onda bih lako
// mogao da izdvojim ne samo drugi najmanji i najveci, vec bilo koji u nizu, sto je dosta jednostavnije nego u prvom slucaju
// Ovaj nacin koristio mi je i za Task 7. 

function test(arr){

    var order = [];
    var unique = [];
    
    var position = 0;
    var max = arr[0];
    var min = arr[0];
    var a = false;

    for (var e = 0; e<arr.length; e++){
        if(max<arr[e]){
            max=arr[e];
        }
    }

    for (var i=0; i<arr.length; i++){
        for (var j=0; j<arr.length; j++){
            if(arr[j]!=false){
                if(min>arr[j]){
                    min=arr[j];
                    position=j;
                }
            }
          }
        order[i] = min; 
        arr[position]=false;
        min=max;
    }
    console.log(order);
    console.log(order[2], order[order.length-3]);
}

test([1, 2, -3, 44, 532, 622, 7, -4, 921, -20, -13]);

//Task 5

function numbers (arr, number) {
   
    getBigger(arr, number);
}
numbers([45, 33, 75, 2, 9, 1, -2, -5, 87, 234, 333, 89], 4)

function getBigger (list, singleNumber) {
   
    var result = [];
    for (var i=0; i< list.length; i++){
        if(list[i] > singleNumber){
            result[i]=list[i];
        }
    }
    console.log(result);
}





