//* Task 1-5
//* Write code that:
//? Creates a string variable courseName and a number variable lessons.
const courseName: string = "Javascript Mastery";
const lessons: number = 39;
console.log(`${courseName} and ${lessons}`);

//? Creates a boolean variable isCompleted.
const isCompleted: boolean = true;
console.log(isCompleted);


//? Creates one variable with no type written, just a value, like let batch = 12;.
const isComplete = false;
console.log(isComplete);

//? Then writes one line that would cause an error (for example, putting a string into batch). Add a comment saying why.
// const lessons: number = 39; Cannot redeclare same variable name
// const lessons: number = "hello"; cannot assign string to a variable which allows only number