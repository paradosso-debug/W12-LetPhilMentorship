// ============================================================
// 🐛  CONDITIONALS — LIVE CLASS  |  DEBUG TASKS
// ============================================================
// Each snippet has a bug. Read carefully, fix it, and explain
// what was wrong as a comment.
// ============================================================

// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log "Access granted" when age is 21,
// but it always logs "Access denied" no matter what.

const age = 21;
const minAge = 18;

if (age >= minAge) {
  console.log("✅ Access granted.");
} else {
  console.log("❌ Access denied.");
}

// What's wrong ↓
// if (age = minAge)
// Your fix ↓

// if (age > minAge)

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// A user should be allowed in if they have a VIP pass
// OR if they are on the guest list.
// But the door only opens when BOTH are true. That's wrong.

const hasVipPass = true;
const isOnGuestList = false;

if (hasVipPass || isOnGuestList) {
  console.log("🎉 Welcome in!");
} else {
  console.log("🚫 Entry denied.");
}

// What's wrong ↓
// if (hasVipPasss && isOnGuestList)

// Your fix ↓
// if (hasVipPass || isOnGuestList)

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount system has a logic gap.
// When score is 75, it logs BOTH the 50+ message
// AND the 70+ message. It should only log one.
// Find the structural problem and fix it.

let score = 10;

if (score >= 90) {
  console.log("🥇 Gold reward unlocked.");
} else if (score >= 70) {
  console.log("🥈 Silver reward unlocked.");
} else if (score >= 50) {
  console.log("🥉 Bronze reward unlocked.");
} else {
  console.log("Youre a loser..jk..participation trophy!! :)");
}

// What's wrong ↓
// they are all if statements
// Your fix ↓
// convert the if statements to else if and invert the order of the if statements
