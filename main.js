// TASK 1
// Create a function that will ALERT if browser is online or not.

// function online (){
//     if(window.navigator.onLine == true){
// alert("This browser is online");
//     }
//     else{
//         alert("This browser is offline");
//     }
// };

// online();

// TASK 2
// Create a function that should, when run, reload the page.

// function reload () {
//     window.location.reload();
// }
// reload();

// TASK 3
// Create a function that should, 3 seconds after page is loaded, redirect you to google.com, ad then, 3 seconds after that take you back to your page. (Comment out your code once you're done so you can continue with the other tasks, as this will cause infinite loop).

// function goAndBack(){
//     window.location.href = "http://www.google.com";
// }

// setTimeout(goAndBack, 3000);

// TASK 4
// Crete a function that should every second console log a number incremented by one. When number reach 15 it should stop running.

// var number = 1;

// function everySecond(){
// console.log(number);
// number++;
// if (number>15){
//     clearInterval(interval);
// }
// };

// var interval = setInterval(everySecond, 1000);

// TASK 5
// Create a function that should return a random number (round number) between 0 and 10, every time you run it.

// function random (){
//     console.log(Math.round(Math.random()*11));
// };
// random();

// TASK 6

// 	STEP 1
// 	    Create an array of objects, containing at least 5 users. Each of them should have name, age and status. Status should be "inactive" for each of them.

// 	STEP 2
// 	    Once page is loaded it should display a popup where user can enter his name. Once it's done name user entered should be compared against existing users.

// 	    If it doesn't match any user you should console log message: 

// 	        "User with name " + name + " doesn't exist."

// 	    If it match some of users, object with that user's data should be copied from array. It's status should be changed to "active", and it should be saved in local storage using "loggedInUser" as a key.

// 	STEP 3
// 	    After one minute user's data should be removed from local storage.

// 	    You should console log a message that user is logged out.


var friends = [
    {
        name: "Peter",
        age:35,
        status: "inactive"
    },
    {
        name: "John",
        age:36,
        status: "inactive"
    },
    {
        name: "Alex",
        age:32,
        status: "inactive"
    },
    {
        name: "Erasmo",
        age:31,
        status: "inactive"
    },
    {
        name: "Hugo",
        age:30,
        status: "inactive"
    }
];

// nisam bas zadovoljan ovo kako sam uradio
// tacnije, nisam siguran ni da li sam dobro razumeo zadatak
// Ovo radi nekako, znaci brise ime ga iz lokala i menja status
// medjutim, daleko da je dobro sve
// Trebalo je eventualno da iskoristim neki method za loop umesto for loopa


var visitor =  prompt("Please, enter your name:");
var presentUser;

function getNameOut () {
for (var i = 0; i<friends.length; i++){
   
    if (visitor === friends[i].name){
        presentUser = friends[i];
        presentUser.status = "active";
        localStorage.setItem ("loggedInUser", presentUser.name);
        console.log("Welcome " + visitor + " !");
        alert("Welcome " + visitor + " ! You will officialy be logged out after 30 seconds.")
        
            setTimeout(function(){

                localStorage.removeItem("loggedInUser");
                presentUser.status = "inactive";
            
                    alert(visitor + " ,you are officialy logged out now.");
        
                }, 30000);
        
    }
    
    else if(visitor != presentUser ){
            console.log("User with name " + visitor + " doesn't exist.")
   }
  }
};

getNameOut();




































   


