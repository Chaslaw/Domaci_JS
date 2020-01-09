// TASK 1
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should receive string, and transform all letters to lowercase.

// var lorem = "Lorem ipsum dolor sit amet";

function transform(word){
    console.log(word.toLowerCase());
}
transform("Lorem ipsum dolor sit amet");

// TASK 2
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should check if there is a word "sit" in the string, and console log sentence saying that it exist or not.

var someLorem = "Lorem ipsum dolor sit amet";

var theWord = "sit";

function isThereAword(){
    if(someLorem.indexOf(theWord)>-1){
        console.log("Yes, we got the word " + theWord);
    }
}
isThereAword();

//Take 2

var theOtherWord = "amet";

function isThereAnotherWord(){
    if(someLorem.includes(theOtherWord)==true){
        console.log("Yes, we got the word " + theOtherWord)
    }else{
        console.log("No, wo got no word " + theOtherWord);
    }
}
isThereAnotherWord();

// TASK 3
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should find and return index of the last letter in the sentence.

var someLorem = "Lorem ipsum dolor sit amet";

function findLast(sentence){
 var arr = sentence.length-1;
console.log(arr);
};

findLast(someLorem);


// TASK 4
// Based on given string:
// "Lorem ipsum dolor sit amet"
// Create a function that should split string based on empty space, and return first 3 results.

var firstThree = "Lorem ipsum dolor sit amet";

function getThree(){
    var firstStep = firstThree.split(" ");
    var secondStep = firstStep.slice(0,3);

    console.log(secondStep);
}

getThree();

// TASK 5
// Based on given string:
// "Piter is an actor."
// Create a function that should turn a string into the following string:
// "Pitor is an acter."

// Verovtno je postojao jednostavniji nacin
// al ja uradih ovako

var sentence = "Piter is an actor.";

function turn (){
    
    var arr = sentence.split("");
    
    var e = arr.indexOf("e");
    var o = arr.indexOf("o");
    var ind = sentence.charAt(3);

    arr[e]=arr[o];
    arr[o]= ind;

    var str = arr.toString();
    var final =str.replace(/,/g, "");

  console.log(final);

}
console.log(sentence);
turn();

// TASK 6
// Based on given array:
// var someData = [34, 23, 14, 56, 23, 44, 65];
// Create a function that should remove number 56 from an array and return array without it.

var someData = [34, 23, 14, 56, 23, 44, 65];

function without(){

var bigger = someData.filter(function(element){
    return element<56;
});

var smaller = someData.filter(function(element){
    return element>56;
});

var result = bigger.concat(smaller);

console.log(result);

};

without();

// TASK 7
// Based on given array:
// var someData = [34, 23, 14, 56, 23, 44, 65];
// Create a function that should turn it into following array:
// var otherData = [23, 14, 56, 65, 44, 23];

var someData = [34, 23, 14, 56, 23, 44, 65];

function cut (){

    var otherWay = [...someData].reverse();

    var result = someData.filter(function(element){
    return element = someData.splice(4,3);
});

    var newResult = otherWay.filter(function(element){
    return element = otherWay.splice(3,3);
});
    
var otherData = result.concat(newResult);

    otherData.shift();

    console.log(otherData);
};

cut();

// TASK 8
// Based on given array:
// var someData = [334, 233, 212, 199, 154, 122];
// Create a function that should repack array to the new one, where each element should be current one, reduced by value of previous one from initial array.

var someData = [334, 233, 212, 199, 154, 122];

function reduced(){

var result = someData.map(function(element){
    return element - someData[someData.indexOf(element)-1];
});
 console.log(result);
};

reduced();

// TASK 9
// Based on given array:
// Create a function that should return new array with all students whose average grade is larger than 8.5. In new array, average grade should be formatted to 2 decimals.

var students = [
  {
     name: "Jim",
     avgGrade: 8.5556
  },
  {
     name: "Mike",
     avgGrade: 8.5492
  },
  {
     name: "Anna",
     avgGrade: 8.9322 
  },
  {
     name: "Jack",
     avgGrade: 8.6111
  }
];

var avg = 8.6;

function goodStudents () {

    var onlyTheBest = students.filter(function(item){
            return item.avgGrade>=avg;
  });

    onlyTheBest.forEach(function(item){
        item.avgGrade = item.avgGrade.toFixed(2);
  })
  console.log(onlyTheBest);
};

goodStudents();






























   


