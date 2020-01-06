// TASK 1:

// Create a constructor function for generating student objects. Each student object should have name, last name, age and average grade.

function Student (name, lastName, age, averageGrade){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.averageGrade = averageGrade;
}

var jack = new Student ("Jack", "Sparrow", 23, 7.8);

console.log(jack);

// TASK 2:

// Create a constructor function for generating objects with data about players of your favorite football team (name, age, goals scored, yellow cards). You can find statistics online.

function Arsenal (name, age, goals_scored, yellow_cards){
    this.name = name;
    this.age = age;
    this.goals_scored = goals_scored;
    this.yellow_cards = yellow_cards;
}

var ozil = new Arsenal ("Mesut Ozil", 31, 12, 0);
var leno = new Arsenal ("Bernd Leno", 27, 0, 1);
var luiz = new Arsenal ("David Luiz", 32, 20, 2 );

console.log(ozil, leno, luiz);


// TASK 3:

// Try to do the same thing as in the previous task, but when creating player objects try to do it dinammicaly (using loop). For that you'll need data in following format:

// var players = [["Player name", 27, 12, 4], ["Player name", 27, 12, 4], ["Player name", 27, 12, 4]];

// This array is just example, change data in this array with data of players you choose.


function Arsenall (player) {
    this.name = player[0];
    this.age = player[1];
    this.goals_scored = player[2];
    this.yellow_cards = player[3];
}

var players = [ ["Ozil", 31, 12, 0], ["Leno", 27, 0, 1], ["Luiz", 32, 20, 2]]

for (var i = 0; i<players.length; i++){
    this[players[i][0].toLowerCase()] = new Arsenall (players[i]);
}

console.log(ozil, leno, luiz);

// TASK 4:

// Create a construction function that should contain properties for first number, second number, and method. Then create a four instances of object from that constructor, each with different numbers, and different method. First should have method for multiplying of its own numbers, second for dividing, third for adding and fourth for subtracting.

function Operations (first, second, met) {
    this.first=first;
    this.second=second;
    switch(met){
case "multy": this.mathOp = function () {
return this.first*this.second;
    }
    break;
    case "dividing": this.mathOp = function () {
        return this.first/this.second;
            }
            break;
            case "adding": this.mathOp = function () {
                return this.first+this.second;
                    }
                    break;
                    case "substracting": this.mathOp = function () {
                        return this.first-this.second;
                            }
                            break;
                        };
                    };

    var multy = new Operations (2,3,"multy");
    var dividing = new Operations (2,3,"dividing");
    var adding = new Operations (2,3, "adding");
    var substracting = new Operations (2,3, "substracting");
    console.log(multy.mathOp());
    console.log(dividing.mathOp().toFixed(2));//ovde sam iskoristio method da probam, jer je rezultat bio 0.6666, pa sam ga sveo na dve decimale, medjutim pretvorio ga je u string
    console.log(adding.mathOp());
    console.log(substracting.mathOp());


   


