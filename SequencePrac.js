console.log("Wellcome to the JavaScript Programing Construct Program");

//UC1
console.log(Math.floor(Math.random() * 10));

//UC2
var Dice1 = Math.floor(Math.random()*7);
console.log(Dice1);

//UC3
var Dice2 = Math.floor(Math.random()*7);
console.log(Dice2);
var Dice3 = Math.floor(Math.random()*7);
console.log(Dice3);
 

//UC 4
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


//UC5 Unit Conversion (a)
// 1 ft = 12 in 
var Feet = 1/12;
var inch = 42;
console.log("42 in = " + Feet*inch + " "+"ft");  

//UC5 Unit Conversion (b)
//Rectangular Plot of 60 feet x 40 feet in meters
var length = 60;
var breadth = 40;
var onemeter = 0.3048;
console.log("Rectangular Plot of 60 feet x 40 feet is "+ length*onemeter+" meter * "+ breadth*onemeter+ " meter");

//UC5 Unit Conversion (c)
// 1 acre = 4047 sq-m
let length;
let breadth;
let area = (length * breadth);
let areas = (area * 0.0929).toFixed(2);
console.log('area in sq metres = ' + areas + ' sq-m');

var areaInAcre = (totalArea / 4047).toFixed(2);  
console.log('Total Area of 25 such plots in acre = ' + areaInAcre + ' acres');




