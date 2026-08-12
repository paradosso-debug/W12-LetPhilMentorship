// ============================================================
// 🟨  VARIABLES — LIVE CLASS
// ============================================================
// All your work happens here in this file.
// Open DevTools (F12 → Console) to see your output.
// No DOM. No HTML edits. Just variables and console.log().
// ============================================================

// ----------------------------------------------------------
// PART 1 — const vs let
// ----------------------------------------------------------
// const → use when the value will NEVER change
// let   → use when the value WILL change later
//
// TASK 1
// Declare a const called siteName with the value "JS Fundamentals"
// Log it to the console.
const siteName = "JS Fundamentals";
console.log(siteName);

// TASK 2
// Declare a let called currentLesson with the value 1
// Log it to the console.
// Then reassign currentLesson to 2.
// Log it again. Notice how let allows the change.

let currentLesson = 1;
console.log(currentLesson);
currentLesson = 2;
console.log(currentLesson);

// TASK 3
// Try to reassign your siteName const to something else.
// Read the error message in the console carefully.
// Then comment that line out so the rest of your code runs.
// Write the error message as a comment below:
// Error:

// siteName = 6;
// console.log(siteName);

// ----------------------------------------------------------
// PART 2 — Data in variables (strings, numbers, booleans)
// ----------------------------------------------------------
// You don't need to know these types deeply yet — just get
// comfortable storing different kinds of values.

// TASK 4
// Declare a const called userName   → your name as a string
// Declare a const called userAge    → your age as a number (no quotes)
// Declare a let   called isLoggedIn → true
// Log all three.

const userName = "Dil";
const userAge = 31;
let isLoggedIn = true;
console.log(userName, userAge, isLoggedIn);

// TASK 5
// Reassign isLoggedIn to false.
// Log it again.
// Notice: only let allowed this — if it were const it would throw an error.
isLoggedIn = false;
console.log(isLoggedIn);

// ----------------------------------------------------------
// PART 3 — Naming variables
// ----------------------------------------------------------
// Rules:
//   ✅ camelCase         →  firstName, totalScore
//   ✅ descriptive       →  userAge  (not just "x")
//   ❌ no spaces         →  first name  is invalid
//   ❌ no starting digit →  1user      is invalid

// TASK 6
// These variable names are bad. Rewrite each one correctly.
// Then declare them as consts with any value you choose.
//
//   first name     → fix it and declare it
//   x              → rename to something descriptive, declare it
//   1stColor       → fix it and declare it

const firstName = "Jae";
const age = 31;
const firstColor = "Blue";
console.log(firstName, age, firstColor);

// ----------------------------------------------------------
// PART 4 — Declaring then assigning (two-step)
// ----------------------------------------------------------

// TASK 7
// Declare a let called score   — do NOT assign a value yet.
// Log score. What do you see? Write it as a comment.
//
// Now assign score the value 0.
// Log it again.

let score;
console.log(score);

score = 0;
console.log(score);

// TASK 8
// Declare a let called playerName — do NOT assign a value yet.
// Then assign it your name.
// Then reassign it to a different name.
// Log playerName after each change. (3 logs total)

let playerName;
console.log(playerName); // undefined
playerName = "Declan";

console.log(playerName); // Declan
playerName = "Saka";

console.log(playerName); // Saka

// let average;

// const score1 = 100;

// const score2 = 90;

// const score3 = 90;

// average = (score1 + score2 + score3) / 3;

// console.log(average);

// ----------------------------------------------------------
// PART 5 — String combination preview
// ----------------------------------------------------------
// The + operator can join strings together.
// We will cover operators fully in a later lesson —
// for now just use it to build a readable console message.

// TASK 9
// Declare a const called firstName and a const called lastName.
// Log: "Full name: " + firstName + " " + lastName

const name = "Hank";

const lastName = "Hill";

console.log("Full name: " + name + " " + lastName);

// TASK 10
// Declare a const called language  with the value "JavaScript"
// Declare a const called lessonNum with the value 1
// Log: "Welcome to " + language + " — Lesson " + lessonNum
// Expected output: "Welcome to JavaScript — Lesson 1"

const language = "JavaScript";
const lessonNum = 1;
console.log("Welcome to " + language + " - Lesson " + lessonNum);
