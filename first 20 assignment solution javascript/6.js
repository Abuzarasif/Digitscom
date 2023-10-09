// q1

// let city = prompt("please enter the name of the city");
// if (city === "karachi") {
//     document.write("Welcome to the city of lights");
// }

// q2

// let gender = prompt("Please enter   the gender  ");
// if (gender === "male") {
//     document.write("Good morning sir ");

// } else if (gender === "female") {
//     document.write("Good morning Ma'am ");

// } else {
//     document.write("invalid gender");
// }

// q3

// let color = prompt("please enter the color for the signal ");
// if (color === "red" || color === "RED") {
//     document.write("Must stop")
// } else if (color === "yellow" || color === "YELLOW") {
//     document.write("Ready to move ")
// } else if (color === "green" || color === "GREEN") {
//     document.write("Move Now")
// } else {
//     document.write("invalid color")

// }


// q4

// let remaining_litre = prompt("please enter  the remaining fuel");
// parseFloat(remaining_litre);
// if (remaining_litre < 0.25) {
//     document.write("Please refuel the petrol tank");
// } else {
//     document.write("enjoy");
// }

// q5
// let a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// q6

// let marks_a = prompt("please enter the number of first student");
// let marks_b = prompt("please enter the number of second student ");
// let marks_c = prompt("please enter the number of third student ");
// let tot_marks = prompt("please enter total the number ");
// let result_a = parseInt(marks_a) / parseInt(tot_marks) * 100;
// let result_b = parseInt(marks_b) / parseInt(tot_marks) * 100;
// let result_c = parseInt(marks_c) / parseInt(tot_marks) * 100;
// // document.write(result_a);
// // console.log(result_a)
// // document.write(result_b);
// // document.write(result_c);
// // console.log(result_a)
// switch (true) {
//     case result_a > 80 && result_a < 100:
//         document.write("student first got grade A+");
//         break;
//     case result_a > 70 && result_a <= 80:
//         document.write("student first got grade A");
//         break;
//     case result_a > 60 && result_a <= 70:
//         document.write("student first got grade B");
//         break;
//     case result_a > 50 && result_a <= 60:
//         document.write("student first got grade C");
//         break;
//     case result_a <= 50:
//         document.write("student first got grade D");
//         break;
//     default:
//         document.write("student first got F grade");
//         break;
// }






// switch (true) {
//     case result_b > 80 && result_b < 100:

//         document.write("student second got grade A+");
//         break;

//     case result_b > 70 && result_b < 80:
//         document.write("student second got grade A");
//         break;

//     case result_b > 60 && result_b < 70:

//         document.write("student second got grade B");
//         break;

//     case result_b > 50 && result_b < 60:

//         document.write("student second got grade C");
//         break;

//     case result_b > 50:

//         document.write("student second got grade F");
//         break;

//     default:
//         document.write("student second got No grade");
//         break;
// }
// switch (true) {
//     case result_c > 80 && result_c < 100:

//         document.write("student second got grade A+");
//         break;

//     case result_c > 70 && result_c < 80:
//         document.write("student second got grade A");
//         break;

//     case result_c > 60 && result_c < 70:

//         document.write("student second got grade B");
//         break;

//     case result_c > 50 && result_c < 60:

//         document.write("student second got grade C");
//         break;

//     case result_c > 50:

//         document.write("student second got grade F");
//         break;

//     default:
//         document.write("student second got No grade");
//         break;
// }







// Q7

// let secret = 7;
// let number = prompt("Please enter a number for guess between 0 and 10");
// if (number == secret) {
//     document.write("BINGO");

// } else if (number == --secret) {
//     document.write("You are too close enter again");
// } else if (number == ++secret) {
//     document.write("You are too close enter again");
// } else {
//     document.write("please  enter again");

// }


// Q8
// Write a program to check whether the given number is
// divisible by 3. Show the message to the user
// if the number
// is divisible by 3.



// let a = prompt("please enter a number");
// parseInt(a)
// if (a % 3 == 0) {
//     document.write("number is divisible by 3");
// } else {
//     document.write("number is not divisible by 3");

// }



// q9

// Write a program that takes temperature as input and
// shows a message based on following criteria
// a.T > 40 then“ It is too hot outside.”
// b.T > 30 then“ The Weather today is Normal.”
// c.T > 20 then“ Today’ s Weather is cool.”
// d.T > 10 then“ OMG!Today’ s weather is so Cool.”




// let temp = prompt("please enter the temperature")

// switch (true) {
//     case temp > 40:
//         document.write("It is too hot outside ");
//         break;
//     case temp > 30:
//         document.write("The weather is normal");
//         break;
//     case temp > 20:
//         document.write("The weather is cool");
//         break;
//     case temp > 10:
//         document.write("OMG today is very cool");
//         break;
//     case temp > 0:
//         document.write("it about been raining");
//         break;
//     default:
//         document.write("you enter the invalid temperature");
//         break;
// }

// q10
// Write a program to create a calculator
// for +, -, * , / & %
// using
// if statements.Take the following input:
//     a.First number
// b.Second number
// c.Operation(+, -, * , /, %)
//         Compute & show the calculated result to user.

let firstNumber = prompt("please enter a first number");
let secondNumber = prompt("please enter a second number");
let operator = prompt("please enter a operator");
if (operator === "+") {
    let sum = parseInt(firstNumber) + parseInt(secondNumber);
    document.write("sum is " + sum);


} else if (operator === "-") {
    let sum = parseInt(firstNumber) - parseInt(secondNumber);
    document.write("sub is " + sum);


} else if (operator === "*") {
    let sum = parseInt(firstNumber) * parseInt(secondNumber);
    document.write("mul is " + sum);


} else if (operator === "/") {
    let sum = parseInt(firstNumber) / parseInt(secondNumber);
    document.write("div is " + sum);


} else if (operator === "%") {
    let sum = parseInt(firstNumber) % parseInt(secondNumber);
    document.write("rem is " + sum);


} else {
    document.write("invalid operator " + operator);

}