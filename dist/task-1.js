"use strict";
//* Task 1-5
//* Write code that:
//? Creates a string variable courseName and a number variable lessons.
// let courseName: string = "Javascript Mastery";
// let lessons: number = 39;
// console.log(`${courseName} and ${lessons}`);
//? Creates a boolean variable isCompleted.
// let isCompleted: boolean = true;
// console.log(isCompleted);
// ? Creates one variable with no type written, just a value, like let batch = 12;.
// let isComplete = false;
// console.log(isComplete);
//? Then writes one line that would cause an error (for example, putting a string into batch). Add a comment saying why.
// let lessons: number = 39; Cannot redeclare same variable name
// let lessons: number = "hello"; cannot assign string to a variable which allows only number
//* Task 1-7
//? Make a string[] called skills with three items, then push one more.
// let skills : string[] = ["html", "css", "js"];
// skills.push("react");
// console.log(skills);
//? Make a tuple [string, number, boolean] called student (name, age, isActive).
// let student : [string, number, boolean] = ["Rob", 25, true]
// console.log(student);
//? Make a readonly number[] called marks, then write one line that tries to push into it (this should error). Add a comment saying why.
// let marks : readonly number[] = [45345, 2451646]
// marks.push(65) push doesnot exist on readonly
// console.log(marks)
//* Task 1-8
//? Write introduce(name: string, age?: number): string. If age is given, return "I am Rob, 25 years old". If not, return "I am Rob".
// const introduce = (name: string, age?: number): string => {
//   if (age) {
//     return `My name is ${name}, my age is ${age}`;
//   } else {
//     return `My name is ${name}`;
//   }
// };
// console.log(introduce("Abdur Rob", 24));
// console.log(introduce("Abdur Rob"));
//? Write calculatePrice(price: number, tax: number = 5): number that returns price + tax. Call it with one argument and then with two.
// const calculatePrice = (price: number, tax: number = 5): number => {
//   return price + tax;
// };
// console.log(calculatePrice(250, 13.6));
// console.log(calculatePrice(250));
//* Task 1-9
//? Write multiply(...nums: number[]): number that multiplies all the numbers together. (Hint: start result at 1, not 0. Can you guess why?) Call it with 3 numbers and then with 5.
// const multiply = (...nums: number[]): number => {
//   let result = 1;
//   for (const n of nums) {
//     result *= n;
//   }
//   return result;
// };
// console.log(multiply(1, 3, 4));
// console.log(multiply(1, 2, 3, 4, 7));
//? Write joinWords(separator: string, ...words: string[]): string that joins the words using the separator. For example, joinWords("-", "type", "script") returns "type-script".
// const joinWords = (separator: string, ...words: string[]) : string => {
//   return words.join(separator);
// }
// console.log(joinWords("-", "type", "script"));
