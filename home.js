//statements 
let age = 1; //if 20, will display last code, less than 13, will display first code
if (age < 13) {
console.log ("You're a child")}

 else if (age >= 13, age <= 19) {
    console.log ("You're a teenager")
 }

else {

   console.log("You're an adult")

}
//else if statements are only evaluated if the preceding if condition was false
 //else statement is always the last and doesnt have a condition

 let time = '0000';

 if (time >= 600 && time < 1200) {
    console.log('Goodmorning');
 }
 else if (time >= 1200 && time < 1600) {
    console.log('Good Afternoon');
 }

 else if (time >= 1600 && time < 2000) {
    console.log ('Good Evening');
 }

 else if (time >= 2000 && time <= 2359) {
     console.log('Good night');
 }

 else {
    console.log("It's late in the night");
 };


 for (let i=0; i<5; i++ ) {
    console.log("Hello World")
 };

 let cart = [1000, 2500, 1999, 2999];
 let total = 0;
 for (let i=1; i< cart.length; i++) {
    total += cart[i]; //0 + 2500
 }
 console.log(total);

 let count = 21;
 while(count >= 10) {
    console.log(count);
    count--;
 } 
 let seconds = 10;
 const timer = setInterval(() => {
    console.log('Time left:', seconds);
       seconds--;
       if (seconds === 0) {
        clearInterval(timer);
        console.log("Time is Up!");
       }
}, 1000)



//  let i = 21; 
//  do { 
//     console.log("Number:", i);
//     i++;

//  } while ( i < 20);

// let correctPassword = '12345';
// let input; 

// do {
//     input = prompt('Enter password');
//  } while (input !== correctPassword) {

//  }
    // console.log('Acces Granted!');

    // functions 
    function sayHello (name) {
        return "HELLO " + name
    };
    console.log(sayHello("John"));

    

