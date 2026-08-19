// ============================================================
// 🐛  DATA TYPES — LIVE CLASS  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the total price including tax.
// Instead it logs "$19.990.08" — a string, not a number.
// What's wrong?

const price   = "19.99"; // came from a form field
const taxRate = 0.08;

const tax   = price * taxRate;         // works — * forces numeric
const total = price + tax;             // bug here
console.log(`Total: $${total}`);       // "$19.990.08159..." — wrong

// What's wrong ↓

// Your fix ↓


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This tries to check if a score is missing.
// It logs "Score: undefined" when lastLogin is passed in,
// but that should also say "Score not set". What's wrong?

const score     = null;
const lastLogin = undefined;

// The developer checks for null but forgets undefined:
const scoreDisplay = score === null ? "Score not set" : `Score: ${score}`;
console.log(scoreDisplay); // ✅ "Score not set"

const loginDisplay = lastLogin === null ? "Never logged in" : `Last login: ${lastLogin}`;
console.log(loginDisplay); // ❌ "Last login: undefined" — wrong

// What's wrong ↓

// Your fix — without using anything beyond what we know so far.
// (Hint: check for null OR undefined separately, or use == null) ↓


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This converts a form input to a number and does arithmetic.
// There are TWO bugs. One produces NaN silently.
// One produces the wrong number even when the input looks fine.

const ageInput  = "twenty-eight";
const ageInput2 = "028";           // leading zero

const age1 = parseInt(ageInput);
const age2 = parseInt(ageInput2);

const result1 = 2025 - age1;
const result2 = 2025 - age2;

console.log(`Birth year 1: ${result1}`);  // Bug 1: NaN — no guard
console.log(`Birth year 2: ${result2}`);  // Bug 2: is this right?

// Bug 1: what does parseInt("twenty-eight") return?
//        what does 2025 - NaN produce? ↓

// Bug 2: what does parseInt("028") return?
//        is that the correct answer? ↓
// (Hint: try parseInt("028") vs Number("028") in your console)

// Your fix for Bug 1 — use isNaN() to detect the problem ↓

// Your explanation for Bug 2 ↓
