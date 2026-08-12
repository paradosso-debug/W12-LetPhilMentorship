📦 Variables — Live Class

---

## 🧠 WHAT Are Variables?

A **variable** is a named container that stores a value in your program's memory.

Think of it like a labeled box in a storage room. You write a name on the box, put something inside, and later you can find it again by reading the label. You can also open the box, swap out what's inside, or lock it so nothing can change.

```
📦  Label:    "userName"
    Contents: "Maria"
```

In JavaScript that looks like this:

```js
let userName = "Maria";
```

---

## ❓ WHY Do Variables Exist?

Imagine you're building an app and the user's name appears in five different places. Without variables you'd have to hardcode it everywhere:

```js
console.log("Hello, Maria!");
console.log("Welcome back, Maria!");
console.log("Maria, you have 3 new messages.");
```

If the name changes — or a different user logs in — you'd have to hunt down and update every single line.

With a variable you change it **once**:

```js
let userName = "Maria";
console.log("Hello, " + userName);
console.log("Welcome back, " + userName);
console.log(userName + ", you have 3 new messages.");
```

Variables make your code:

- **Reusable** — define the value once, use it anywhere
- **Flexible** — update one variable, everything that uses it updates automatically
- **Readable** — `userName` tells you exactly what it holds; a mystery string floating in code tells you nothing

---

## 🔍 HOW Do Variables Work?

### The Three Keywords: `var`, `let`, `const`

JavaScript has three ways to declare a variable. Think of them as three types of boxes with different rules.

---

### `var` — The Old Box (recognize it, but don't use it)

```js
var score = 10;
```

- The original way to declare variables before 2015
- Has unpredictable behavior (it "leaks" out of blocks — we'll cover this later)
- You'll see it in older code, so you need to recognize it
- **Best practice:** Don't use `var` in new code

---

### `let` — The Flexible Box ✅

```js
let score = 10;
score = 20; // ✅ allowed — the value can change
```

- Use `let` when the value **will change** over time
- A scoreboard that updates, a counter that increments, a login status that flips

---

### `const` — The Locked Box 🔒

```js
const siteName = "MyApp";
siteName = "NewApp"; // ❌ TypeError — cannot reassign a const
```

- Use `const` when the value **should never change**
- A site name, a tax rate, a user's ID for the current session
- **Best practice:** Default to `const`. Only reach for `let` when you know the value must change.

---

### Declaring vs. Assigning

These are two separate steps that are usually combined:

```js
// Declaration — telling JS "this variable exists"
let age;

// Assignment — putting a value inside it
age = 25;

// Both at once (the most common pattern)
let age = 25;
```

If you declare a variable without assigning a value, JavaScript sets it to `undefined` — the box exists, but it's empty.

---

### Naming Rules

| Rule                             | ✅ Good              | ❌ Bad       |
| -------------------------------- | -------------------- | ------------ |
| Start with a letter, `_`, or `$` | `userName`, `_count` | `1stName`    |
| No spaces                        | `firstName`          | `first name` |
| Case-sensitive                   | `score` ≠ `Score`    | —            |
| Use camelCase                    | `totalScore`         | `totalscore` |
| Be descriptive                   | `userAge`            | `x`          |

---

## 🌍 Real-World Usage

Variables appear in **every JavaScript program ever written**:

- **Shopping cart:** `let cartTotal = 0;` — updates as items are added
- **User session:** `const userId = "abc123";` — locked for the session
- **Dark mode:** `let isDarkMode = false;` — flips when the button is clicked
- **Game score:** `let playerScore = 0;` — increases as the player earns points

---

## ⚠️ Common Mistakes

1. **Reassigning a `const`**

   ```js
   const price = 9.99;
   price = 14.99; // ❌ TypeError: Assignment to constant variable
   ```

2. **Using a variable before declaring it**

   ```js
   console.log(name); // ❌ ReferenceError: name is not defined
   let name = "Alex";
   ```

3. **Case-sensitive typos**

   ```js
   let userName = "Sam";
   console.log(username); // ❌ undefined or ReferenceError — different name!
   ```

4. **Forgetting the keyword**

   ```js
   age = 30; // ❌ accidentally creates a global variable
   let age = 30; // ✅
   ```

5. **Vague variable names**
   ```js
   let x = "Maria"; // ❌ What is x?
   let userName = "Maria"; // ✅ Clear and descriptive
   ```

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Explain what a variable is in plain English
- [ ] Choose correctly between `let` and `const`
- [ ] Declare, assign, and reassign variables
- [ ] Name variables using camelCase
- [ ] Understand what `undefined` means
- [ ] Read an error message and identify which mistake caused it
