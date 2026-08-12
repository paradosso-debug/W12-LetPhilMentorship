// ============================================================
// 🐛  VARIABLES — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet below has a bug.
// Read the code carefully, find the problem, and fix it.
// Run the file after each fix to confirm it works.
//
// Open DevTools (F12 → Console) to see errors and output.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This code throws an error. What's wrong?

// const greeting = "Hello, World!";
// greeting = "Hi there!";
// console.log(greeting);

// Your fix ↓ - const cannot be reassigned.
let greeting = "Hello, World!";
greeting = "Hi there!";
console.log(greeting);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This code runs but logs the wrong thing. Find the bug.

// let firstName = "Jordan";
// let lastName = "Smith";
// console.log("Full name: " + firstname + " " + lastName);

// Your fix ↓

let firstName = "Jordan";
let lastName = "Smith";
console.log("Full name: " + firstName + " " + lastName);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// There are TWO bugs in this snippet.
// Find both, explain each one as a comment, then fix them.

// let Total = 100;
// let discount = 20;
// let finalPrice = total - discount;
// console.log("Your price is: $" + finalPrice);

// Bug 1 explanation ↓
// let total = 100; variables are case sensitive

// Bug 2 explanation ↓
// let finalPrice = total - discount; This now does the math
// Your fix ↓
let total = 100;
let discount = 20;
let finalPrice = total - discount;
console.log(`Your price is: $${finalPrice}`);
