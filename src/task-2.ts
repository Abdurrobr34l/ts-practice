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

//* Task 2-6
//? Make let input: unknown = "TypeScript". Use as string to print its .length.
// let input: unknown = "TypeScript"
// console.log((input as string).length);

//? Make let price: unknown = 100. Use as number to print price * 2.
// let price: unknown = 100
// console.log((price as number) * 2);

//? In a comment, answer: what is the risk of as? Add an example that compiles but would crash at runtime. Don’t run it, just write it.
// If i lie or add a wrong datatype to an value then it will not get error before run time
// let exm: unknown = "JS"
// console.log((exm as number).toFixed(2));

//* Task 2-7/2-8
//? Write function describe(x: string | number | boolean): string. Use typeof to return "Text: ...", "Number: ..." or "Boolean: ...". Test all three.
const describe = (x: string | number | boolean): string => {
  if (typeof x === "string") {
    return `Text: ${x}`;
  } else if (typeof x === "number") {
    return `Number: ${x}`;
  } else {
    return `Boolean: ${x}`;
  }
};
console.log(describe("Hello"));
console.log(describe(25));
console.log(describe(true));

//? Write function isBigger(a: string | number): number. If it’s a string, return its .length. If it’s a number, return the number itself. Test both.
function isBigger(a: string | number): number {
  if (typeof a === "number") {
    return a;
  } else {
    return a.length;
  }
}
console.log(isBigger("Hello"));
console.log(isBigger(25));

//? Make the Cat | Dog types above and write speak using in. Test with one cat and one dog object.
type Cat = {
  meaow: string;
};
type Dog = {
  woof: string;
};

const myCat: Cat = {
  meaow: "Meow meow!",
};

const myDog: Dog = {
  woof: "Woof woof!",
};

function speak(animal: Cat | Dog) {
  if ("meaow" in animal) {
    return animal.meaow;
  } else {
    return animal.woof;
  }
}

console.log(speak(myCat));
console.log(speak(myDog));

//? Make the Circle | Square types and write area using the kind check. Test both shapes.
type Circle = {
  kind: "circle";
  circleValue: number;
};
type Square = {
  kind: "square";
  squareValue: number;
};

// if("circle" in Circle.kind) {}