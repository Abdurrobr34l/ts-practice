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