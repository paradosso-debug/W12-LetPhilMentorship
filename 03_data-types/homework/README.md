# 📦 Data Types — Homework

---

## 🧠 WHAT You're Practicing

Template literals, string methods, type conversion, and the null/undefined distinction — all applied to building a formatted shopping receipt. No functions, no conditionals, no loops. Just sequential code using variables and operators.

---

## ❓ WHY A Receipt?

A receipt is a perfect Lesson 3 project. It has:
- Messy string data that needs cleaning (`.trim()`, `.toLowerCase()`)
- Prices as strings from form inputs that need converting (`parseFloat`)
- Arithmetic that breaks if you forget to convert first
- A formatted output that uses template literals throughout

Every e-commerce app in the world does exactly this.

---

## 🔍 WHAT You're Building

A **Shopping Receipt** that:
- Cleans raw store and customer data
- Converts string prices to numbers
- Calculates line totals, subtotal, discount, tax, and grand total
- Checks a discount code by cleaning and comparing
- Outputs a formatted, aligned receipt to the console

---

## 📁 Files

| File | What to do |
|------|------------|
| `index.html` | Open in browser — reference panel on the left |
| `style.css` | Already written — nothing to edit |
| `app.js` | All 8 tasks + stretch goal |
| `debug.js` | Three bugs to fix — swap the script tag to run them |

---

## 🌍 Real-World Connection

Every web form that takes payment information does what you built today:
- Trim whitespace from card numbers and names
- Convert string inputs to numbers before arithmetic
- Normalise text (lowercase email, uppercase codes) before comparing
- Format currency output with exactly two decimal places

---

## ⚠️ Common Mistakes to Watch For

1. **String + number = concatenation** — `"79.99" + 1.5992` gives `"79.991.5992"`. Convert with `parseFloat()` first.

2. **`.toFixed()` returns a string** — use it only at the final display step. If you do arithmetic after `.toFixed()`, you're back to string concatenation.

3. **Not cleaning before comparing** — `"  SAVE10  " === "SAVE10"` is false. Always `.trim().toUpperCase()` before strict equality checks.

4. **Case-sensitive variable names** — `cleanname` and `cleanName` are different variables. JavaScript won't warn you — it just throws a ReferenceError.

5. **typeof null === "object"** — not a mistake you made, but a JavaScript quirk to know. Always use `=== null` to check for null.

---

## ✅ Done When You Can

- [ ] Complete all 8 tasks — the receipt prints correctly
- [ ] Fix all 3 debug tasks with explanations
- [ ] Complete the stretch goal
- [ ] Explain why form prices need converting before arithmetic
- [ ] Explain why `.trim().toUpperCase()` is needed before comparing a discount code
- [ ] Name the six falsy values from memory
- [ ] Explain the difference between `null` and `undefined`
