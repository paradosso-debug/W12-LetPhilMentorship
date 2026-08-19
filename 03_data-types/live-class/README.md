# 📦 Data Types — Live Class

---

## 🧠 WHAT Are Data Types?

Every value in JavaScript has a type. Two lessons in, you've been working with types without naming them. This lesson names them and gives you tools to work with each one precisely.

```js
typeof "hello"; // "string"
typeof 42; // "number"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object"  ← historic JS bug
```

---

## 🔍 The Five Types You Use Every Day

**`string`** — text, in any kind of quotes

```js
"hello"   'world'   `template`
```

**`number`** — integers, decimals, and special values

```js
42   3.14   -7   NaN
```

**`boolean`** — only ever `true` or `false`

**`undefined`** — declared but never assigned a value

**`null`** — intentionally set to "no value"

---

## 🔍 Template Literals ← The Big Upgrade Today

Template literals use backticks and let you embed expressions with `${}`. Use them from now on instead of string concatenation.

```js
// Old way
"Hello, " +
  firstName +
  " " +
  lastName +
  "!"
  // Template literal
  `Hello, ${firstName} ${lastName}!`;
```

Any expression works inside `${}`:

```js
`Total: $${price * qty}``Length: ${email.length}``Type: ${typeof age}`;
```

Multiline with no `\n` needed:

```js
const card = `=== Profile ===
Name: ${firstName}
Email: ${email}`;
```

---

## 🔍 Essential String Methods

```js
"  hello  ".trim(); // "hello"  — removes whitespace
"hello".toUpperCase(); // "HELLO"
"HELLO".toLowerCase(); // "hello"
"hello".length; // 5
"hello world".includes("world"); // true
"hello".startsWith("he"); // true
"hello".slice(1, 3); // "el"
"hello"[0]; // "h"  — bracket notation works on strings too
```

Capitalising the first letter:

```js
str[0].toUpperCase() + str.slice(1).toLowerCase();
```

---

## 🔍 Type Coercion

JavaScript converts types automatically in some situations. The `+` operator is the danger zone:

```js
"5" + 3; // "53"  ← + with string = concatenation
"5" - 3; // 2     ← - forces numeric conversion
"5" * 2; // 10    ← same
true + 1; // 2     ← true coerces to 1
```

**Rule:** `+` with any string = concatenation. Every other operator forces numeric conversion.

**Always convert explicitly before arithmetic:**

```js
const age = Number("28"); // 28
const px = parseInt("42px"); // 42 — stops at first non-numeric char
isNaN(Number("abc")); // true — use to guard against bad conversions
```

---

## 🔍 `null` vs `undefined`

```js
let score = null; // set intentionally — "no value here"
let lastLogin; // undefined — never assigned

typeof null; // "object" ← JS bug — use === null to check
typeof undefined; // "undefined"
```

Both are falsy. The difference is **intent**:

- `null` = you deliberately said "nothing here"
- `undefined` = it was never touched

---

## 🔍 The Six Falsy Values

```
false   0   ""   null   undefined   NaN
```

Everything else is **truthy** — including `"0"`, `"false"`, `[]`, `{}`.

```js
Boolean("0"); // true  ← non-empty string
Boolean(0); // false ← the number zero
```

---

## 🔍 `==` vs `===`

Always use `===`. It compares type AND value with no automatic conversion.

```js
1 === "1"; // false ← different types
1 == "1"; // true  ← converts "1" to 1 first
0 === false; // false
0 == false; // true
```

The one time `==` is useful: `value == null` catches both `null` and `undefined`.

---

## ⚠️ Common Mistakes

1. **Adding a number to a string from a form**

   ```js
   const price = "19.99"; // from input
   price + tax; // "19.99..." — concatenation!
   parseFloat(price) + tax; // ✅ convert first
   ```

2. **`typeof null === "object"`** — use `=== null` to check for null, not `typeof`.

3. **NaN in arithmetic without checking**

   ```js
   const age = parseInt("twenty"); // NaN
   2025 - age; // NaN — silently wrong
   isNaN(age); // true — guard before using
   ```

4. **`"0"` is truthy, `0` is falsy** — the type matters, not just the value.

---

## ✅ Today's Goal

By the end of this class you should be able to:

- [ ] Name the 5 main primitive types and give an example of each
- [ ] Use `typeof` to check what type a variable holds
- [ ] Write template literals with `${}` expressions
- [ ] Use `.trim()`, `.toLowerCase()`, `.toUpperCase()`, `.includes()`, `.length`, `.slice()`
- [ ] Explain what type coercion is and when `+` causes problems
- [ ] Convert types explicitly with `Number()`, `parseInt()`, `String()`, `Boolean()`
- [ ] Name the six falsy values from memory
- [ ] Explain the difference between `null` and `undefined`
- [ ] Explain why `===` is safer than `==`
