// 1. Write a program that takes a character(number or string) in a variable 
// & checks whether the given input is a
// number, uppercase letter or lower
// case letter.(Hint: ASCII codes: -A = 65, Z = 90, a = 97, z = 122).



// let char_alphabet = prompt("please enter a character or number ");

// checking for number

// if (!isNaN(char_alphabet)) {
//     console.log("the character you enter is a number ")
// }

// checking for upper case
// else if (char_alphabet.charCodeAt(0) >= 65 && char_alphabet.charCodeAt(0) <= 90)

// {
//     console.log("the character is upper case ")
// }


// checking for lower case

// else if (char_alphabet.charCodeAt(0) >= 97 && char_alphabet.charCodeAt(0) <= 122) {
//     console.log("the character is lower case ")
// } else {
//     console.log("the character is not upper case or lower case ")
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger.Also show
// if the two integers are equal.


// let a = prompt("please  enter the first numbr ");
// let b = prompt("please  enter the second number ");

// if (parseInt(a) > parseInt(b)) {
//     console.log("first number is greater than second  number");
// } else if (parseInt(b) > parseInt(a)) {
//     console.log("second number is greater than first  number");
// } else if (parseInt(a) === parseInt(b)) {
//     console.log("first number is equal to the  second number");
// } else {
//     console.log("invalid input");

// }

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// let a = prompt("please enter a number ");
// if (parseInt(a) > 0) {
//     console.log("number is positive");
// }
// if (parseInt(a) < 0) {
//     console.log("number is negative ");
// }
// if (parseInt(a) === 0) {
//     console.log("number is zero");
// }

// 4. Write a program that takes a character(i.e.string of length 1) and returns true
// if it is a vowel, false otherwise

// let vowels = prompt("please enter a character");
// if (vowels === "a" || vowels === "A") {
//     console.log("charatcer is a vowel");
// } else if (vowels === "e" || vowels === "E") {
//     console.log("charatcer is a vowel");
// } else if (vowels === "i" || vowels === "I") {
//     console.log("charatcer is a vowel");
// } else if (vowels === "o" || vowels === "O") {
//     console.log("charatcer is a vowel");
// } else if (vowels === "u" || vowels === "U") {
//     console.log("charatcer is a vowel");
// } else {
//     console.log("not a vowel character");
// }





// 5. Write a program that
// a.Store correct password in a JS variable.
// b.Asks user to enter his / her password
// c.Validate the two passwords:
//     i.Check
//     if user has entered password.If not, then
//     give message“ Please enter your password”
//     ii.Check
//     if both passwords are same.If they are
//     same, show message“ Correct!The password you
//     entered matches the original password”.Show“ Incorrect password” otherwise.



// let pass = ("abuzar asif");
// let insert = prompt("please emter the password");
// if (insert === pass) {
//     console.log("you entered the correct password");
// } else if (insert !== pass) {
//     console.log("you entered the wrong password");
// } else if (insert.length === 0) {
//     console.log("please enter the password");
// }
















//     6. This
//     if /
//     else statement does not work.Try to fix it:
//         var greeting;
//     var hour = 13;
//     if (hour < 18) {
//         greeting = "Good day";
//         else
//             greeting = "Good evening";
//     }

// var greeting;
// var hour = 13;
// if (hour < 18) {
//     greeting = "Good day";
//     console.log(greeting)
// } else {
//     greeting = "Good evening";
//     console.log(greeting)

// }



//     7. Write a program that takes time as input from user in 24
//     hours clock format like: 1900 = 7 pm.Implement the
//     following
// case using
// if,
// else &
//     else if statements

// let time = prompt("Please enter the time from 0 to 2400");
// if (parseInt(time) >= 0 && parseInt(time) < 1200) {
//     console.log("good morning")
// } else if (parseInt(time) >= 1200 && parseInt(time) < 1700) {
//     console.log("good AfterNoon")
// } else if (parseInt(time) >= 1700 && parseInt(time) < 2100) {
//     console.log("good Evening")
// } else if (parseInt(time) >= 2100 && parseInt(time) <= 2359) {
//     console.log("good Night")
// } else {
//     console.log("Invalid Date");
// }