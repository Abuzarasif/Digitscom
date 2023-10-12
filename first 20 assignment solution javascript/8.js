// 1. Declare an empty array using JS literal
//  notation to store
// student names in future.

// let student = [];
// student.push('abuzar');
// student.push("asif");
// student.push(27);
// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);



// 2. Declare an empty array using JS object notation to store
// student names in future

// let studentobj = {
//     name_a: [],
//     age: []

// };
// studentobj.name_a.push('king');
// studentobj.name_a.push('khan');
// studentobj.name_a.push('amjad');

// studentobj.age.push(27);
// studentobj.age.push(55);
// studentobj.age.push(59);

// console.log("the name of student is " + studentobj.name_a[0] + "  And the age  of student is  " + studentobj.age[0]);
// console.log("the name of student is " + studentobj.name_a[1] + "  And the age  of student is  " + studentobj.age[1]);
// console.log("the name of student is " + studentobj.name_a[2] + "  And the age  of student is  " + studentobj.age[2]);


// 3. Declare and initialize a strings array.

// let names_a = [("abuzar"), ("Asif"), ("Awan"), ("786")];
// let names_b = ['Abubakar ', 'Asif', 'Awan', '110'];
// console.log(names_a[0]);
// console.log(names_a[1]);
// console.log(names_a[2]);
// console.log(names_a[3]);
// console.log(names_b[0]);
// console.log(names_b[1]);
// console.log(names_b[2]);
// console.log(names_b[3]);


// 4.Declare and initialize a numbers array.

// let num=[1,5,6,7,8,9,10,11,12,13,14];


// 5. Declare and initialize a boolean array.

// let bool = [true, false, true, false];
// bool.push(true);
// console.log(bool[4]);

// 6. Declare and initialize a mixed array.
// let mixed_array = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD', 27, 'haji'];
// console.log(mixed_array.length);
// console.log(mixed_array[9]);


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let mixed_array = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD', 27, 'haji'];
// console.log(mixed_array.length);
// console.log(mixed_array[9]);
// console.log(mixed_array[8]);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let names = ['abuzar', 'abubakar', 'usama'];
// let scores = [480, 320, 272]
// let total_marks = 500;
// let percent_a = scores[0] / total_marks * 100;
// let percent_b = scores[1] / total_marks * 100;
// let percent_c = scores[2] / total_marks * 100;

// console.log("score of " + names[0] + " is " + scores[0] + " and percentage is : " + percent_a)
// console.log("score of " + names[1] + " is " + scores[1] + " and percentage is : " + percent_b)
// console.log("score of " + names[2] + " is " + scores[2] + " and percentage is : " + percent_c)


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// let colors = ['red', 'green', 'blue', 'brown', 'orange', 'yellow']
// console.log(colors[0])
// console.log(colors[1])
// console.log(colors[2])
// console.log(colors[3])
// console.log(colors[4])
// console.log(colors[5])
// console.log(colors[6])
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// let new_color = prompt("what color you want to add to the beginning of the array");
// colors.unshift(new_color);
// console.log(colors);


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// let second_color = prompt("what color you want to add to the end of the array");
// colors.push(second_color);
// console.log(colors);

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// let first_color = prompt("first new color that you want to add to the beginning of the array");
// let two_color = prompt("second new color that you want to add to the beginning of the array");
// colors.unshift(first_color);
// colors.unshift(two_color);
// console.log(colors);


// d. Delete the first color in the array. Display the updated
// array in your browser.

// colors.shift();
// console.log(colors);
// e. Delete the last color in the array. Display the updated
// array in your browser.
// colors.pop();
// console.log(colors);

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.

// let add_color = prompt("at what index you want to add the color ");
// let name_color = prompt("at what index you want to add the color ");
// colors.splice(add_color, 2, name_color);
// console.log(colors);

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// let del = prompt("at what index you want to delete  colors ");
// let del_index = prompt("how many index you want to delete");
// colors.splice(del, del_index);
// console.log(colors);



// 9.Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.v

// let scores = [990, 1026, 8956, 1200, 654, 2544, 321];

// for asscending order 
// scores.sort((a, b) => a - b);
// console.log(scores);
// for descending order 
// scores.sort((a, b) => b - a);
// console.log(scores);


// Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array

let city = ['lahore', 'karachi', 'quetta', 'multan', 'islamabad '];
let selectedCities = city.slice(0, 4);
console.log(selectedCities);