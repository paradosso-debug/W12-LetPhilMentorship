// ============================================================
// 🐛  OPERATORS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the total price but something is off.
// What's wrong?

const price = 50;
const qty = 3;
const total = price * qty;
console.log("Total: $" + total);

// What's wrong ↓

// Your fix ↓
// const total = price * qty;

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to check if the user's age meets
// the minimum requirement. The comparison always logs true
// even when it shouldn't. Why?

const minAge = 18;
let userAge = 16;
console.log("Meets requirement: " + (userAge = minAge));

// What's wrong ↓
console.log("Meets requirement: " + (userAge >= minAge));

// Your fix ↓

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This score tracker has two bugs.
// One causes a wrong value. One causes an error.
// Find both, explain each, and fix them.

let startScore = 100;
startScore += 50;
console.log("After bonus: " + startScore); // 150

let multiplier = 2;
let boostedScore = startScore * multiplier;
console.log("Boosted: " + boostedScore); // 300

// Bug 1 ↓
// const startScore = 100; const type can't change the value of startScore. It should be let instead of const.

// Bug 2 ↓
// let boostedScore = startScore * Multiplier
// Your fix ↓

// Fix1: let startScore = 100;

//let boostedScore = startScore * multiplier;
