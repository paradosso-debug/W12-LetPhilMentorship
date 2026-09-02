// ============================================================
// 🐛  ARRAYS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the last element of the array ("cherry"),
// but it logs undefined instead. What's wrong?

const fruits = ["apple", "banana", "cherry"];
// console.log(fruits[3]);

// What's wrong ↓
// The first index of an array starts from 0. The last index of const fruits is 2, so fruits[3] is undefined.

// Your fix ↓
console.log(fruits[fruits.length - 1]);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer declared the array with const and is now
// trying to update one of the scores. It throws an error.
// But wait — should it? Read carefully before answering.

const scores = [88, 72, 95];
scores[2] = 100;
console.log(scores);

// What's wrong ↓
// scores = [88, 72, 100];

// Your fix ↓
// Hint: there IS a way to update the 95 to 100 without
// reassigning the whole array. What is it?

// const scores = [88, 72, 95];
// scores[2] = 100;
// console.log(scores);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loop should log every song in the playlist.
// Instead it logs the last four songs AND then logs undefined
// at the end. There are TWO bugs. Find both.

const playlist = ["Jazz Vibes", "Lo-Fi Study", "Rock Classics", "Pop Hits"];

for (let i = 0; i < playlist.length; i++) {
  console.log("Track " + (i + 1) + ": " + playlist[i]);
}

// Bug 1 ↓
// need to start at 0. 0-indexed array

// Bug 2 ↓
// i need to be < n

// Your fix ↓
// start i at 0 end i at n-1
