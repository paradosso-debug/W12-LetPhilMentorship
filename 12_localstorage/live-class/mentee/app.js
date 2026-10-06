// ============================================================
// 💾  localStorage — LIVE CLASS  |  MENTEE VERSION
// ============================================================
// Open index.html in your browser.
//
// CONNECTING THE DOTS:
// Everything we've built so far disappears on page refresh.
// Change the bio, add skills, enable dark mode — then refresh.
// Gone. Every time.
//
// localStorage lets you save data to the BROWSER so it
// survives refreshes, tab closures, even browser restarts.
// It's like a tiny database living right in the user's browser.
//
// Today we wire persistence into the Profile Page so the
// user's settings actually stick.
// ============================================================

// ============================================================
// DEFAULT PROFILE DATA
// ============================================================
const defaultProfile = {
  bio: "Passionate developer with 4 years of experience building web apps.",
  skills: ["JavaScript", "React", "Node.js", "CSS", "Git"],
  status: "active",
  darkMode: false,
};

// ----------------------------------------------------------
// PART 1 — THE localStorage API
// ----------------------------------------------------------
// localStorage is a key-value store built into every browser.
// It lives on window.localStorage (usually just localStorage).
//
// FOUR methods — that's all you need:
//
//   localStorage.setItem("key", "value")
//   → saves a value under a key
//   → both key AND value must be STRINGS
//
//   localStorage.getItem("key")
//   → retrieves the value for a key
//   → returns null if the key doesn't exist
//
//   localStorage.removeItem("key")
//   → deletes one specific key
//
//   localStorage.clear()
//   → deletes EVERYTHING in localStorage for this domain
//
// ⚠️  localStorage ONLY stores strings.
//     Numbers, booleans, arrays, objects all become strings.
//     To store an object or array:
//       JSON.stringify(value)  → converts to a JSON string
//       JSON.parse(string)     → converts back to the original
//
// Check your saved data at any time:
//   DevTools → Application tab → Local Storage → your domain

// TASK 1 — setItem and getItem with simple values
// Declare a function called testStorage.
// Inside:
//   a) Save a string: localStorage.setItem("userName", "Alex Rivera")
//   b) Save a number as string: localStorage.setItem("userAge", String(28))
//   c) Save a boolean as string: localStorage.setItem("isDark", String(false))
//
//   d) Read them back and log:
//      localStorage.getItem("userName")
//      localStorage.getItem("userAge")
//      localStorage.getItem("isDark")
//
//   e) Write a comment: what TYPE does getItem always return?
//
// Call testStorage() and check the console.
// Also open DevTools → Application → Local Storage to see the values.

function testStorage() {
  localStorage.setItem("userName", "Alex Rivera");
  localStorage.setItem("userAge", String(28));
  localStorage.setItem("isDark", String(false));

  console.log(localStorage.getItem("userName"));
  console.log(localStorage.getItem("userAge"));
  console.log(localStorage.getItem("isDark"));
}

testStorage();

// TASK 2 — JSON.stringify and JSON.parse
// localStorage only stores strings. To save an object or array
// you must serialise it first with JSON.stringify.
//
// Declare a function called testObjectStorage.
// Inside:
//   a) Declare a const called skillsArray = ["JS", "CSS", "React"]
//   b) Try saving it DIRECTLY (without stringify):
//      localStorage.setItem("badSkills", skillsArray)
//      Read it back and log — what do you see? Write it as a comment.
//
//   c) Now save it CORRECTLY with JSON.stringify:
//      localStorage.setItem("goodSkills", JSON.stringify(skillsArray))
//      Read it back with getItem — log the raw string.
//      Then parse it: JSON.parse(localStorage.getItem("goodSkills"))
//      Log the parsed result — notice it's an array again.
//
//   d) Do the same with an object:
//      const user = { name: "Alex", age: 28 }
//      Save, read raw, parse, log each step.
//
// Call testObjectStorage().

function testObjectStorage() {
  const skillsArray = ["JS", "CSS", "React"];

  localStorage.setItem("badSkills", skillsArray);
  console.log(localStorage.getItem("badSkills"));

  localStorage.setItem("badSkills", JSON.stringify(skillsArray));
  console.log(localStorage.getItem("badSkills"));

  const user = { name: "Alex", age: 28 };
  localStorage.setItem("user", user);
  console.log(localStorage.getItem("user"));

  localStorage.setItem("user", JSON.stringify(user));
  console.log(localStorage.getItem("user"));
}

testObjectStorage();

// ----------------------------------------------------------
// PART 2 — SAVING PROFILE DATA
// ----------------------------------------------------------

// TASK 3 — saveProfile
// Declare a function called saveProfile.
// No parameters — reads current values from the DOM.
//
// Inside:
//   1. Build a profileData object:
//      {
//        bio:      document.getElementById("bio-input").value,
//        skills:   getCurrentSkills(),  ← you'll write this next
//        status:   document.getElementById("status-select").value,
//        darkMode: document.body.classList.contains("dark")
//      }
//   2. Save it: localStorage.setItem("profileData", JSON.stringify(profileData))
//   3. Update the storage status label:
//      Select #storage-status
//      Set textContent: "✅ Saved at " + new Date().toLocaleTimeString()
//      Replace its classes: remove all, add "saved"
//   4. Log: "Profile saved to localStorage"
//
// Declare a helper function called getCurrentSkills.
// No parameters.
// Selects all <li> elements inside #skills-list.
// Returns an array of their textContent values.
// Hint: use querySelectorAll + Array.from() + .map()
//   Array.from(document.querySelectorAll("#skills-list li"))
//     .map(li => li.textContent)

function getCurrentSkills() {
  return Array.from(
    document.querySelectorAll("#skills-list li, #skills-listItem li"),
  ).map((li) => li.textContent);
}

function saveProfile() {
  const profileData = {
    bio: document.getElementById("bio-input").value,
    skills: getCurrentSkills(),
    status: document.getElementById("status-select").value,
    darkMode: document.body.classList.contains("dark"),
  };

  localStorage.setItem("profileData", JSON.stringify(profileData));

  const storageStatus = document.getElementById("storage-status");
  storageStatus.textContent = "✅ Saved at " + new Date().toLocaleTimeString();
  storageStatus.className = "saved";

  console.log("Profile saved to localStorage", profileData);
}

// Wire up the Save button:
document.getElementById("save-btn").addEventListener("click", saveProfile);

// ----------------------------------------------------------
// PART 3 — KEEPING THE CHARACTER COUNT IN SYNC
// ----------------------------------------------------------

// TASK 4 — updateCharCount
// The bio character count must ALWAYS match what's in the textarea.
// The bio can change in three ways:
//   1. The user types (input event)
//   2. Saved data is loaded on page start
//   3. The Reset button restores the defaults
// ALL THREE must update the count — otherwise it goes stale.
//
// Declare a function called updateCharCount.
// No parameters.
// Inside:
//   1. Read the current bio length:
//      const len = document.getElementById("bio-input").value.length
//   2. Set #char-count textContent to: len + " / 200"
//
// You will call this function from loadProfile, renderWithDefaults,
// and the bio input listener — one function, three callers,
// the count can never go stale.

function updateCharCount() {
  const len = document.getElementById("bio-input").value.length;
  const charCount = document.getElementById("char-count");
  charCount.textContent = len + " / 200";
}

// updateCharCount();

// ----------------------------------------------------------
// PART 4 — LOADING SAVED DATA
// ----------------------------------------------------------

// TASK 5 — loadProfile
// Declare a function called loadProfile.
// No parameters.
//
// Inside:
//   1. Try to get saved data:
//      const saved = localStorage.getItem("profileData")
//
//   2. IF saved is null → there's nothing to load yet.
//      Call renderWithDefaults() and return early.
//      (You'll write renderWithDefaults below)
//
//   3. ELSE → parse the data:
//      const profileData = JSON.parse(saved)
//
//   4. Restore the bio:
//      document.getElementById("bio-input").value = profileData.bio
//
//   5. Restore the skills:
//      Clear #skills-list (innerHTML = "")
//      Loop through profileData.skills → call addSkillToPage(skill) for each
//
//   6. Restore the status:
//      Set #status-select value to profileData.status
//      Call renderStatusBadge(profileData.status)
//
//   7. Restore dark mode: call applyDarkMode(profileData.darkMode)
//      (You'll write applyDarkMode below — it handles BOTH directions)
//
//   8. Update the character count: call updateCharCount()
//      (The bio just changed — the count must follow)
//
//   9. Update storage status:
//      Set #storage-status textContent: "✅ Profile loaded from storage"
//      Add class "saved"
//
// First declare a helper function called applyDarkMode.
// Parameter: isDark (boolean)
// Inside:
//   IF isDark:
//     - document.body.classList.add("dark")
//     - set #theme-btn textContent to "☀️ Light Mode"
//   ELSE:
//     - document.body.classList.remove("dark")
//     - set #theme-btn textContent to "🌙 Dark Mode"
//
// ⚠️  Why both directions? A render-from-state function must set
//     every piece of state it represents — including turning dark
//     mode OFF when the state says off. If you only handle the ON
//     case, resetting while in dark mode leaves the page dark.

function applyDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add("dark");
    document.getElementById("theme-btn").textContent = "☀️ Light Mode";
  } else {
    document.body.classList.remove("dark");
    document.getElementById("theme-btn").textContent = "🌙 Dark Mode";
  }
}

// Then declare a function called renderWithDefaults.
// No parameters.
// Uses defaultProfile to restore EVERY piece of page state:
//   - Set bio-input value to defaultProfile.bio
//   - Clear #skills-list, then loop through defaultProfile.skills
//     → call addSkillToPage for each
//   - Set the #status-select dropdown value to defaultProfile.status
//     (the badge AND the dropdown must both reset — don't skip the dropdown)
//   - Call renderStatusBadge(defaultProfile.status)
//   - Call applyDarkMode(defaultProfile.darkMode)
//   - Call updateCharCount()  ← the bio just changed here too
//
// Checklist — the page has SEVEN pieces of state. Does your function
// set all of them? Bio text, char count, skills list, status badge,
// status dropdown, dark mode class, theme button text.

function renderWithDefaults() {
  document.getElementById("bio-input").textContent = defaultProfile.bio;
  const skillsList = document.getElementById("skills-list");
  skillsList.textContent = "";
  defaultProfile.skills.forEach((skill) => {
    addSkillToPage(skill);
  });

  document.getElementById("status-select").value = defaultProfile.status;
  renderStatusBadge(defaultProfile.status);
  applyDarkMode(defaultProfile.darkMode);
  updateCharCount();
}

function loadProfile() {
  const saved = localStorage.getItem("profileData");
  if (saved === null) {
    renderWithDefaults();
    return;
  }

  const profileData = JSON.parse(saved);
  document.getElementById("bio-input").value = profileData.bio;

  const skillsList = document.getElementById("skills-list");
  skillsList.innerHTML = "";
  profileData.skills.forEach((skill) => addSkillToPage(skill));

  document.getElementById("status-select").value = profileData.status;
  renderStatusBadge(profileData.status);
  applyDarkMode(profileData.darkMode);
  updateCharCount();
  const storageStat = document.getElementById("storage-status");
  storageStat.textContent = "✅ Profile loaded from storage";
  storageStat.className = saved;
}

// ----------------------------------------------------------
// PART 5 — RESET TO DEFAULTS
// ----------------------------------------------------------
// The Reset button removes the SAVED data and puts the page
// back to its default state — exactly what a brand-new visitor
// would see. This is the same fallback loadProfile uses when
// localStorage is empty.
//
// Note: this is a RESET, not an "empty the page" action.
// Removing the stored data doesn't blank the page — it makes
// the page fall back to defaultProfile, just like a first visit.

// TASK 6 — resetProfile
// Declare a function called resetProfile.
// Inside:
//   1. Remove the profile key: localStorage.removeItem("profileData")
//   2. Reset the page to defaults: call renderWithDefaults()
//      (renderWithDefaults already updates the char count)
//   3. Update status label: "↩️ Reset to defaults" with class "cleared"
//   4. Log: "Saved data removed — page reset to defaults"
//
// Wire up the Reset button:
//   document.getElementById("clear-btn")
//     .addEventListener("click", resetProfile)
//
// 💡 Also update the button label in index.html from "Clear Data"
//    to "Reset to Defaults" so the label matches the behaviour.

function resetProfile() {
  localStorage.removeItem("profileData");
  renderWithDefaults();
  const storageStatusEl = document.getElementById("storage-status");
  storageStatusEl.textContent = "↩️ Reset to defaults";
  storageStatusEl.classList.add("cleared");
  console.log("Saved data removed — page reset to defaults");

  const clearBtnEl = document.getElementById("clear-btn");
  clearBtnEl.textContent = "Reset to Defaults";
}

document.getElementById("clear-btn").addEventListener("click", resetProfile);

// ----------------------------------------------------------
// PART 6 — SKILLS AND STATUS HELPERS
// ----------------------------------------------------------
// These helpers are carried forward from Event Listeners.
// They're needed by loadProfile and renderWithDefaults.

// TASK 7
// Declare a function called addSkillToPage.
// Parameter: skillName
// Creates a <li>, sets textContent, adds click-to-remove,
// appends to #skills-list, updates skill count.
// (Same as Event Listeners lesson — copy your logic here)

function addSkillToPage(skillName) {
  const skillsList = document.getElementById("skills-list");
  const newLi = document.createElement("li");
  newLi.textContent = skillName;

  newLi.addEventListener("click", () => {
    newLi.remove();
    updateSkillCount();
    saveProfile();
  });

  skillsList.append(newLi);
  updateSkillCount();
}

// Declare a function called updateSkillCount.
// Updates #skill-count with the current number of skills.

function updateSkillCount() {
  const skillsList = document.getElementById("skills-list");
  document.getElementById("skill-count").textContent =
    skillsList.children.length;
}

// Declare a function called renderStatusBadge.
// Parameter: status
// Sets the #status-badge text and class based on status value.
// (Same as Event Listeners lesson)

function renderStatusBadge(status) {
  const statusBadge = document.getElementById("status-badge");
  statusBadge.classList.remove("active", "away", "offline");
  statusBadge.textContent = status; //"Away";
  statusBadge.classList.add(status);
  console.log(statusBadge);
}

//    if (status === "active") {
//   statusBadge.textContent = "Active";
//   statusBadge.classList.add("active");
// } else if (status === "away") {
//   statusBadge.textContent = "away";
//   statusBadge.classList.add("Away");
// } else if (status === "offline") {
//   statusBadge.textContent = "Offline";
//   statusBadge.classList.add("Offline");
// }
// ----------------------------------------------------------
// PART 7 — EXISTING EVENT LISTENERS
// ----------------------------------------------------------
// Wire up the remaining interactions
// (carried from Event Listeners lesson).

// TASK 8 — wire up theme toggle, skill form, and status change
// a) Dark mode toggle:
//    document.getElementById("theme-btn")
//      .addEventListener("click", handleThemeToggle)
//    Declare handleThemeToggle: toggles "dark" on body,
//    updates button text.
//
// b) Add skill form:
//    document.getElementById("add-skill-form")
//      .addEventListener("submit", handleSkillSubmit)
//    Declare handleSkillSubmit: preventDefault, reads input,
//    calls addSkillToPage, clears input.
//
// c) Status change:
//    document.getElementById("status-select")
//      .addEventListener("change", handleStatusChange)
//    Declare handleStatusChange: reads event.target.value,
//    calls renderStatusBadge.

function handleThemeToggle() {
  // your code here
}

function handleSkillSubmit(event) {
  // your code here
}

function handleStatusChange(event) {
  // your code here
}

document
  .getElementById("theme-btn")
  .addEventListener("click", handleThemeToggle);
document
  .getElementById("add-skill-form")
  .addEventListener("submit", handleSkillSubmit);
document
  .getElementById("status-select")
  .addEventListener("change", handleStatusChange);

// ----------------------------------------------------------
// PART 8 — AUTO-SAVE ON CHANGES
// ----------------------------------------------------------

// TASK 9 — auto-save
// Instead of requiring the user to click Save, auto-save
// whenever the bio or skills change.
//
// a) Add an "input" listener to #bio-input:
//    On every keystroke:
//      - call updateCharCount()   ← reuse Task 4, don't duplicate the logic
//      - call saveProfile()
//
// b) The skills list already calls saveProfile via addSkillToPage
//    and the click-to-remove. Make sure saveProfile is called there.
//
// Write a comment: what are the trade-offs of auto-saving
// vs a manual Save button?

document
  .getElementById("bio-input")
  .addEventListener("input", function (event) {
    // your code here
  });

// ============================================================
// START THE PAGE
// ============================================================
// Call loadProfile() to restore saved data (or render defaults).
// Either path ends with updateCharCount() — the count is correct
// from the very first paint.
loadProfile();
