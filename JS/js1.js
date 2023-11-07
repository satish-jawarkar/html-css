//pre and post increment

var a=10;
console.log(a++);
console.log(++a);


//comparison operator

let str="1234";
let num=1234;
console.log(str==num);
console.log(str===num);
console.log(typeof str);

//


const num=10;
console.log(num);

let num=20;
console.log(num);
num=19;
console.log(num);


/********************* Variables in JS ************************/

            //console.log(num1); // undefined - Hoisting
            // var num1 = 10;
            // console.log(num1);
            //num1 = 15; // NO Error
            //console.log(num1);
            /*
            (1) access the variable before initialization, no Error
            (2) Can re-assign the values
            (3) It has a functional scope
            */

            //console.log(num2); // Uncaught ReferenceError: Cannot access 'num2' before initialization
            // let num2 = 20;
            // console.log(num2);
            //num2 = 25; // NO Error
            //console.log(num2);
            /*
            (1) Cannot access the variable before initialization, ERROR
            (2) Can re-assign the values
            (3) has a block scope
            */

            //console.log(num3); // Uncaught ReferenceError: Cannot access 'num3' before initialization
            // const num3 = 30;
            // console.log(num3);
            //num3 = 35; // Uncaught TypeError: Assignment to constant variable
            //console.log(num3); 
            /*
            (1) Cannot access the variable before initialization, ERROR
            (2) CANNOT re-assign values
            (3) has a block scope
            */



            /********************* Datatypes in JS ************************/

            // var numDT1 = 20;
            // console.log(typeof numDT1); // number

            // var numDT2 = 20.455;
            // console.log(typeof numDT2); // number

            // var strDT1 = "A";
            // console.log(typeof strDT1); // string

            // var strDT2 = "Abhishek";
            // console.log(typeof strDT2); // string

            // var boolDT1 = true;
            // console.log(typeof boolDT1); // boolean

            // var boolDT2 = false;
            // console.log(typeof boolDT2); // boolean

            // var undDT1 = undefined;
            // console.log(typeof undDT1); // undefined

            // var nullDT1 = null;
            // console.log(typeof nullDT1); // object

            // var name; // undefined