// ============================================================
// 📦  DATA TYPES — LIVE CLASS  |  MENTEE VERSION
// ============================================================
// Open index.html in your browser.
// All output goes to the console (F12 → Console).
//
// CONNECTING THE DOTS:
// Lesson 1: you stored values in variables.
// Lesson 2: you combined values with operators.
//
// But what ARE those values exactly? The number 42 and the
// string "42" look similar — but JavaScript treats them
// completely differently. This lesson names what you've been
// working with and gives you the tools to handle each type.
//
// The big new feature today: TEMPLATE LITERALS.
// Every "Hello " + name + "!" you've written becomes
// `Hello ${name}!` — shorter, cleaner, no more quote juggling.
// You'll use template literals from here to the end of the course.
// ============================================================

console.log("=== DATA TYPES — LIVE CLASS ===\n");

// ============================================================
// THE DATA — a user profile with intentionally mixed types
// ============================================================
const firstName = "aLEX";
const lastName = "RIVERA";
const email = "  Alex.Rivera@Email.COM  ";
const age = "28"; // stored as string (as it comes from a form)
const bio = "  Passionate developer. Loves clean code.  ";
const isPremium = true;
const score = null; // intentionally set to nothing
const lastLogin = undefined; // never assigned

// ============================================================
// PART 1 — THE PRIMITIVE TYPES
// ============================================================
// JavaScript has 5 types you'll use every day:
//
// string    — text in any kind of quotes
// number    — any numeric value (integers, decimals, NaN)
// boolean   — true or false only
// undefined — declared but never given a value
// null      — intentionally set to "no value"
//
// typeof tells you what type a value is.
// It always returns a STRING describing the type.

// TASK 1 — Inspect the types of your variables
// Log the typeof each variable declared above.
// Format each line using string concatenation (you know this):
//   console.log("firstName: " + typeof firstName);
//
// Do this for all 8 variables.
// Then answer these as comments:
//   Q1: What type is age — and why is that surprising?
//   Q2: What type is score? Is it "null"?
//   Q3: What does typeof undefined return?

console.log("--- Task 1: typeof ---");

console.log(typeof firstName); // string

console.log(typeof age); // string

console.log(typeof lastName); //string

console.log(typeof bio); // string

console.log(typeof email); //string

console.log(typeof isPremium); //boolean
console.log(typeof score); //object
console.log(typeof lastLogin); // undefined

// ============================================================
// PART 2 — TEMPLATE LITERALS
// ============================================================
// Template literals use BACKTICKS (`) instead of quotes.
// Embed any value directly with ${}.
//
//   "Hello, " + name + "!"   ← old way (concatenation)
//   `Hello, ${name}!`         ← new way (template literal)
//
// RULES:
//   - Use backtick ` to open and close (not ' or ")
//   - Put any variable or expression inside ${ }
//   - Everything inside ${} is evaluated and converted to a string
//   - You can use multiple ${} in one template literal
//   - Multiline works — just press Enter, no \n needed

// TASK 2 — Rewrite with template literals
// Each sub-task has a "before" version using concatenation.
// Rewrite it as a template literal and log the result.
//

console.log("\n--- Task 2: Template Literals ---");

// a) BEFORE: "First name: " + firstName
//    AFTER:  log using a template literal

console.log(` First Name: ${firstName}`);

//
// b) BEFORE: "Full name: " + firstName + " " + lastName
//    AFTER:  log using a template literal
console.log(`Full name: ${firstName} ${lastName}`);

//
// c) BEFORE: "Age: " + age + " years old"
//    AFTER:  log using a template literal
console.log(`Age: ${age} years old`);

//
// d) BEFORE: "Premium: " + isPremium
//    AFTER:  log using a template literal
console.log(`Premium: ${isPremium}`);
//
// e) Write a multiline template literal that spans THREE lines:
//    Line 1: "=== Profile ==="
//    Line 2: "Name: " + firstName + " " + lastName
//    Line 3: "Email: " + email
//    Store it in const profileCard and log it.

const profileCard = `=== Profile ===
Name: ${firstName} ${lastName}
Email: ${email}`;
console.log(profileCard);
//
// Write a comment: what are two advantages of template literals
// over string concatenation?

// TASK 3 — Expressions inside ${}
// Inside ${} you can put ANY expression, not just a variable.
// The expression is evaluated and its result becomes part of the string.
//
// a) Log the email length using a template literal:
//    `Email length: ${email.length}`
//    (email.length is an expression — it evaluates to a number)

console.log("\n--- Task 3: Expressions in Template Literals ---");
console.log(`Email length: ${email.length}`);
//
// b) Log whether age equals "28" using ===:
//    `age === "28": ${age === "28"}`
//    What type does this expression produce?

console.log(`age === "28": ${age === "28"}`); //True

//
// c) Use the operators you know (+) inside ${}:
const price = 49.99;
const qty = 3;
//    Log: `Total: $${price * qty}`
//    (Two $ signs: the first is literal text, the second starts ${})
console.log(`Total: $${price * qty}`); // Total: $ 149.97
//

// d) Log a comparison result:
//    `isPremium is ${isPremium} — type: ${typeof isPremium}`
//    Notice: typeof isPremium is itself an expression inside ${}

console.log(`isPremium is ${isPremium} - type: ${typeof isPremium}`); //true

// ============================================================
// PART 3 — STRING METHODS
// ============================================================
// Strings have built-in methods you can call on them.
// A method is called with a dot: string.methodName()
// (You'll learn about writing your own methods later —
//  for now, just learn to USE the built-in ones.)
//
// The ones you need most often:
//
// .length          → number of characters (not a method call, just .length)
// .toUpperCase()   → "hello" → "HELLO"
// .toLowerCase()   → "HELLO" → "hello"
// .trim()          → "  hi  " → "hi"   removes whitespace from both ends
// .includes("x")   → true/false — does the string contain "x"?
// .startsWith("x") → true/false — does it begin with "x"?
// .endsWith("x")   → true/false — does it end with "x"?
// .slice(start,end)→ extract part of a string by index positions

// TASK 4 — Clean the email
// The email is "  Alex.Rivera@Email.COM  " — messy from a form field.
//
// a) Use .trim() to remove the spaces:
//    const trimmedEmail = email.trim();
//    Log: `Trimmed: "${trimmedEmail}"`
console.log("\n--- Task 4: String Methods on Email ---");

const trimmedEmail = email.trim();
console.log(`Clean email: ${trimmedEmail}`);

//
// b) Use .toLowerCase() on trimmedEmail to normalise the case:
//    const cleanEmail = trimmedEmail.toLowerCase();
//    Log: `Clean: "${cleanEmail}"`
//
const cleanEmail = trimmedEmail.toLowerCase();
console.log(`Clean: "${cleanEmail}"`); //alex.rivera@email.com";

// c) Use .includes("@") to check if it looks like an email.
//    Log: `Contains @: ${cleanEmail.includes("@")}`

console.log(`Contains @: ${cleanEmail.includes("@")}`); // true
//
// d) Use .length on cleanEmail.
//    Log: `Email length: ${cleanEmail.length}`
//
console.log(`Email length: ${cleanEmail.length}`); // Email lenght: 21

// e) Use .startsWith("alex") to check the start:
//    Log: `Starts with "alex": ${cleanEmail.startsWith("alex")}`

console.log(`Starts with "alex": ${cleanEmail.startsWith("alex")}`); // true

// TASK 5 — Fix the name casing
// firstName is "alex" (all lowercase) and lastName is "RIVERA" (all caps).
// Neither is properly formatted.
//
// To capitalise just the first letter:
//   firstName[0].toUpperCase() + firstName.slice(1).toLowerCase()
//   ↑ first character uppercased    ↑ rest of string lowercased
//   (firstName[0] uses the same bracket notation as arrays — strings are indexed too)
//
console.log("\n--- Task 5: Fixing Name Casing ---");
// a) Fix firstName:
//    const fixedFirst = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
//    Log: `Fixed first: ${fixedFirst}`
const fixedFirst =
  firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
console.log(`fixedFirst: ${fixedFirst}`); //"Alex"
//

// a - 0;
// l - 1;
// e - 2;
// x - 3;

// A;

// lex;

// Alex;

// b) Fix lastName the same way.
//    const fixedLast = ...
//    Log: `Fixed last: ${fixedLast}`
const fixedLast = lastName[0] + lastName.slice(1).toLowerCase();
console.log(`fixedLast: ${fixedLast}`); // Rivera

//
// c) Build the full name using a template literal:
//    const fullName = `${fixedFirst} ${fixedLast}`;
//    Log: `Full name: ${fullName}`

const fullName = `${fixedFirst} ${fixedLast}`;
console.log(`Full name: ${fullName}`);
// Alex Rivera

// d) Build initials:
//    const initials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
//    Log: `Initials: ${initials}`
const initials = `${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`;
console.log(`Initials: ${initials}`); // AR

// ============================================================
// PART 4 — TYPE COERCION AND CONVERSION
// ============================================================
// JavaScript sometimes converts types automatically.
// This is called TYPE COERCION.
// The + operator is where this causes the most surprises.
//
//   "5" + 3   → "53"   ← + with a string = CONCATENATION
//   "5" - 3   → 2      ← - forces numeric conversion
//   "5" * 2   → 10     ← same
//
// Rule: + with ANY string = concatenation, not addition.
// Every other arithmetic operator forces numeric conversion.
//
// EXPLICIT CONVERSION — always safer than relying on coercion:
//   Number("42")     → 42       converts string to number
//   Number("abc")    → NaN      can't convert → Not a Number
//   parseInt("42px") → 42       stops at first non-numeric char
//   String(42)       → "42"     converts number to string
//   Boolean(0)       → false    converts to boolean

// TASK 6 — Coercion surprises
// Log each expression AND its typeof.
// Write a comment explaining why each one producesf what it does.
//
// a) "10" + 5
// b) "10" - 5
// c) "10" * 2
// d) true + 1     (true coerces to the number 1)
// e) false + "!"

console.log("\n--- Task 6: Coercion Surprises ---");
const expression1 = "10" + 5;
console.log(expression1, typeof expression1); // "15" String

// (b)
const expression2 = "10" - 5;
console.log(expression2, typeof expression2); // 5 Number

// (c)
const expression3 = "10" * 2;
console.log(expression3, typeof expression3); //20 Number

// (d)
const expression4 = true + 1;
console.log(expression4, typeof expression4); // 2 Number

// (e)
const expression5 = false + "!";
console.log(expression5, typeof expression5); // "false!" String

// TASK 7 — Explicit conversion
// age is the string "28" — as it would arrive from an HTML form input.
//
// a) Convert it to a number:
//    const ageNumber = Number(age);
//    Log: `ageNumber: ${ageNumber}` and `type: ${typeof ageNumber}`
//.
console.log("\n--- Task 7: Explicit Conversion ---");
const ageNumber = Number(age);
console.log(ageNumber, typeof ageNumber);

// b) Now you can do arithmetic:
//    const birthYear = 2025 - ageNumber;
//    Log: `Born approximately: ${birthYear}`
//    (Try doing 2025 - age without converting — log what happens)

const birthYear = 2025 - ageNumber;
console.log(`Born approximately: ${birthYear}`);

const birthYearPreConversion = 2025 - age;
console.log(`Born approximately: ${birthYearPreConversion}`);

// c) What happens when you can't convert?
//    const bad = Number("twenty-eight");
//    Log: `bad: ${bad}`
//    Log: `isNaN(bad): ${isNaN(bad)}`
//    (isNaN() returns true if the value is NaN)
//
const bad = Number("twenty-eight");
console.log(`bad: ${bad}`);
console.log(`isNAN(bad) : ${isNaN(bad)}`); // not a number

// d) parseInt extracts a number and stops at non-numeric characters:
//    const messy = "42px";
//    const px = parseInt(messy);
//    Log: `px: ${px}`
//
const messy = "42px";
const px = parseInt(messy); //42 keep search for numeric string until a nondigit is encountered
console.log(`px: ${px}`);
// e) Convert isPremium to a string:
//    const premiumText = String(isPremium);
//    Log: `premiumText: ${premiumText}` and typeof
const premiumText = String(isPremium); // "true"
console.log(`premiumText: ${premiumText} and typeof: ${typeof premiumText}`); // "true" string

// ============================================================
// PART 5 — NULL, UNDEFINED, AND FALSY VALUES
// ============================================================
// null      → you intentionally said "no value here"
// undefined → the variable was declared but never assigned
//
// Both are FALSY — they behave like false in comparisons.
//
// THE SIX FALSY VALUES — memorise these:
//   false, 0, "", null, undefined, NaN
//
// Everything else is TRUTHY — including "0", "false"

// TASK 8 — Null and undefined
//
// a) Log score and lastLogin — what appears?
//    Log: `score: ${score}`
//    Log: `lastLogin: ${lastLogin}`
//
console.log(`score: ${score}`); // Null
console.log(`lastLogin: ${lastLogin}`); // undefined

// b) Log their types:
//    Log: `typeof score: ${typeof score}`
//    Log: `typeof lastLogin: ${typeof lastLogin}`
//
//    Write a comment: what does typeof null return, and why is that odd?
//
console.log(`typeof score: ${typeof score}`); // "typeof score: object"
console.log(`typeof lastLogin: ${typeof lastLogin}`); // "typeof lastLogin: undefined"
// typeof null returns an object. old bug from javascript

// c) Check each with Boolean() to confirm they're falsy:
//    Log: `Boolean(null): ${Boolean(null)}`
//    Log: `Boolean(undefined): ${Boolean(undefined)}`
console.log(`Boolean(null) : ${Boolean(null)}`); // Boolean(null) : FALSY
console.log(`Boolean(undefined) : ${Boolean(undefined)}`); // Boolean(undefined) : FALSY

// d) Write a comment in your own words:
//    When would a variable hold null vs undefined?

// Undefined would be when a variable has been declared but no value has been assigned.
// Null would be when a variable is declared AND assigned as null

let example;
let example2 = null;

console.log("\n--- Task 8: null and undefined ---");
// your code here

// TASK 9 — The six falsy values
// Log Boolean() for each of the six falsy values to confirm they're all false.
// Use a separate console.log for each one.
//
// Boolean(false)
// Boolean(0)
// Boolean("")
// Boolean(null)
// Boolean(undefined)
// Boolean(NaN)
//
// Then log Boolean() for these — they LOOK like they should be falsy but aren't:
// Boolean("0")      ← the STRING "0", not the number
// Boolean("false")  ← the STRING "false", not the boolean
//
// Write a comment: why is "0" truthy but 0 is falsy?

console.log("\n--- Task 9: Falsy Values ---");
// your code here
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// ============================================================
// PART 6 — == vs ===
// ============================================================
// === (strict equality) — type AND value must match. No conversion.
// ==  (loose equality)  — converts types before comparing.
//
//   1  === "1"   → false  (different types)
//   1  ==  "1"   → true   (JS converts "1" to 1)
//   0  === false → false  (different types)
//   0  ==  false → true   (both coerce to 0)
//
// RULE: Always use === in your code.
// == causes subtle bugs. === is explicit and safe.
//
// The ONE exception: null == undefined is true (both are "nothing").
// if (value == null) catches BOTH null and undefined at once.

// TASK 10 — == vs ===
// Log the result of each pair and explain the difference with a comment.
//
// a) 1 === "1"       and     1 == "1"
// b) 0 === false     and     0 == false

// (a)
console.log(1 === "1"); // false
console.log(typeof (1 == "1")); // true
// === is strict equality, it checks both value and type. 1 is a number and "1" is a string, so they are not equal.

// (b)
console.log(0 === false); //false
console.log(0 == false); // true
//  === is strict equality, same reason as above. 0 is a number and false is a boolean.

// c) "" === false    and     "" == false
// d) null === undefined  and  null == undefined
//
// Write a final comment:
// In what one situation would you intentionally use == instead of ===?

console.log("" === false); //false === "" different type so return false?
console.log("" == false); //true //loose equality treats empty "" and bool false as true?

console.log(null === undefined); //false (=== type dont match)
console.log(null == undefined); //true (loose equity treats null and undefined as equivalent)

//final comment: use == if checking value only etc(5 == '5'). === for checking both value and typeof (5 ==='5') false
let value;
console.log(value == null); // true

console.log("\n--- Task 10: == vs === ---");
// your code here

// ============================================================
// CONNECT THE DOTS — Lessons 1, 2, and 3
// ============================================================

// TASK 11 — Build a profile summary using everything from today
// Using only the variables declared at the top of this file,
// build a const called summary that holds this multiline string
// (using a template literal):
//
//   === AR — Alex Rivera ===
//   Email:   alex.rivera@email.com
//   Age:     28 (as a number, not "28")
//   Premium: true
//   Bio:     Passionate developer. Loves clean code.
//   Score:   null
//
// You'll need:
//   - Template literal for the whole string
//   - firstName[0] and lastName[0] for initials
//   - firstName and lastName with fixed casing (from Task 5)
//   - email with .trim().toLowerCase() chained together
//   - Number(age) for the numeric age
//   - bio.trim() for the cleaned bio
//   - score directly (it will show as "null" in the string)
//
// Log summary.
//
// Write a comment: why does Number(age) appear as 28 not "28"
// in the template literal even though it's a number type?

console.log("\n--- Task 11: Profile Summary ---");
// your code here

const summary = `
=== ${firstName[0].toUpperCase()}${lastName[0].toUpperCase()} — ${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()} ===
Email:   ${email.trim().toLowerCase()}
Age:     ${Number(age)} (as a number, not "28")
Premium: ${isPremium}
Bio:     ${bio.trim()}
Score:   ${score}
`;

console.log(summary);
