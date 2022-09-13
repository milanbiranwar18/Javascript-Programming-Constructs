console.log("Wellcome to the JavaScript Programing Construct Program");

console.log(Math.floor(Math.random() * 10));

var Dice1 = Math.floor(Math.random()*7);
console.log(Dice1);
var Dice2 = Math.floor(Math.random()*7);
console.log(Dice2);
var Dice3 = Math.floor(Math.random()*7);
console.log(Dice3);
 
var x2 = 0;

 for (var i = 1; i <= 5; i++) {

    let x = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    console.log("Num " + i + " = " + x);
    x1= x2 + x;
     x2=x1;
   
    console.log("Sum of 5 random numbers is  " + x1);
   
}

var avg = x1/5;
console.log("Average of 5 random number is " + avg);

