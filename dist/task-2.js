"use strict";
//* Task 2-2
//? Make a variable result that can be a string or a number. Assign a number, then a string.
// let result: string | number;
// result = 25
// result = "true"
// console.log(result);
//? Write type Status = "pending" | "done" | "failed". Make a variable taskStatus of that type. Then write one line that assigns an invalid value (it should error, add a comment saying why).
// type Status = "pending" | "done" | "failed"
// let taskStatus : Status
// // taskStatus = "sdad"  //// Error: "sdad" is not assignable to type Status
// taskStatus = "done"
// console.log(taskStatus);
//? Write function double(x: string | number). It should just return x for now. Call it with a string and a number.
// const double = (x: string | number) => {
//   if(typeof x === "string") {
//     return x
//   } else {
//     return "It is a number"
//   }
// }
// console.log(double("asd"));
// console.log(double(5664));
//* Task 2-3
//? Create an interface Animal with name: string. Create interface Dog extends Animal with breed: string. Make one dog object.
// interface Animal {
//   name: string;
// }
// interface Dog extends Animal {
//   breed: string;
// }
//? Create type Animal2 = { name: string } and type Dog2 = Animal2 & { breed: string }. Make one dog object.
// type Animal2 = {
//   name: string;
// };
// type Dog2 = Animal2 & {
//   breed: string;
// };
//? Write type Result = string | number. Then try to write the same thing as an interface, and put a comment on what you see (the error).
// type Result = string | number;
// interface InterfaceResult {
// }
//* Task 2-4
//? Make let data: unknown = "TypeScript". Then use typeof to check it’s a string, and print data.toUpperCase() only inside the check.
// let data: unknown = "TypeScript";
// if (typeof data === "string") {
//   console.log(data.toUpperCase());
// }
//? Write function sayHi(name: string): void that only logs Hello, name.
// const sayHi = (name: string): void => {
//   console.log(`Hello, ${name}`);
// };
// sayHi("Raihan");
//? Write function throwError(msg: string): never that throws an error.
// const throwError = (msg: string): never => {
//   throw new Error(msg);
// };
// throwError("Raihan");
//? In a comment, answer: why is unknown safer than any?
// Unknow questions you "Are you sure is it the same type stated above?", where in any it does not does anything like that, it simply allows anytype(which is simply like making the typescript work like Vanilla JS)
