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
